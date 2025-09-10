// 全局变量
let currentExample = 0;
let flippedIndex = -1;
let selectedExamples = [];
let completedCount = 0;
const totalCount = 20;

// 从库中随机抽取20个句子
function selectRandomExamples() {
    const allExamples = appConfig.examples;
    const shuffled = [...allExamples].sort(() => 0.5 - Math.random());
    selectedExamples = shuffled.slice(0, totalCount);
}

// 翻转指定卡片
function flipCard(card) {
    const cardIndex = parseInt(card.classList[1].split('-')[1]);
    
    if (cardIndex === 0) {
        if (flippedIndex === 5) {
            card.classList.add('flipped');
        }
        return;
    }
    
    if ((cardIndex === 1 && flippedIndex === -1) || (cardIndex === flippedIndex + 1)) {
        card.classList.add('flipped');
        flippedIndex = cardIndex;
        
        if (flippedIndex === 5) {
            setTimeout(() => {
                document.querySelector('.card-0').classList.add('flipped');
            }, 300);
        }
        
        const prompt = card.querySelector('.validation-prompt');
        if (prompt) {
            prompt.remove();
        }
        
        if (cardIndex < 5) {
            const nextCard = document.querySelector(`.card-${cardIndex + 1}`);
            if (nextCard && !nextCard.querySelector('.validation-prompt')) {
                const prompt = document.createElement('div');
                prompt.className = 'validation-prompt';
                prompt.textContent = '点击验证';
                nextCard.querySelector('.card-front').appendChild(prompt);
            }
        }
    }
}

// 翻转所有卡片
function flipAllCards() {
    for (let i = 1; i <= 5; i++) {
        const card = document.querySelector(`.card-${i}`);
        card.classList.add('flipped');
        
        const prompt = card.querySelector('.validation-prompt');
        if (prompt) {
            prompt.remove();
        }
    }
    
    setTimeout(() => {
        document.querySelector('.card-0').classList.add('flipped');
    }, 300);
    
    flippedIndex = 5;
}

// 重置所有卡片
function resetAllCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.classList.remove('flipped');
        
        const prompt = card.querySelector('.validation-prompt');
        if (prompt) {
            prompt.remove();
        }
    });
    
    document.querySelector('.card-0').classList.remove('flipped');
    
    for (let i = 1; i <= 5; i++) {
        const card = document.querySelector(`.card-${i}`);
        card.classList.remove('flipped');
    }
    
    const firstCard = document.querySelector('.card-1');
    if (firstCard && !firstCard.querySelector('.validation-prompt')) {
        const prompt = document.createElement('div');
        prompt.className = 'validation-prompt';
        prompt.textContent = '点击验证';
        firstCard.querySelector('.card-front').appendChild(prompt);
    }
    
    flippedIndex = -1;
}

// 显示动词原形提示
function showHint() {
    const hintMessage = document.getElementById('hintMessage');
    const currentExampleData = selectedExamples[currentExample];
    const verb = currentExampleData.verb;
    
    hintMessage.textContent = verb;
    hintMessage.style.display = 'block';
    
    setTimeout(() => {
        hintMessage.style.display = 'none';
    }, 2000);
}

// 切换到下一个例句
function switchExample() {
    completedCount++;
    
    if (completedCount >= totalCount) {
        // 完成20个句子，弹出提示
        alert("本次练习完成！");
        // 重新开始新一轮练习
        completedCount = 0;
        selectRandomExamples();
    }
    
    currentExample = (currentExample + 1) % selectedExamples.length;
    updateExample();
    resetAllCards();
}

// 更新当前例句的界面显示
function updateExample() {
    const example = selectedExamples[currentExample];
    
    const chineseCardFront = document.querySelector('.card-0 .card-front .card-content');
    const chineseCardBack = document.querySelector('.card-0 .card-back .card-content');
    chineseCardFront.textContent = example.chinese;
    chineseCardBack.textContent = example.german;
    
    for (let i = 1; i <= 5; i++) {
        const partCard = document.querySelector(`.card-${i} .card-back .model-part`);
        const part = example.parts.find(p => p.position === i);
        partCard.textContent = part ? part.text : '-';
    }
    
    const indicator = document.querySelector('.example-indicator');
    indicator.textContent = `例句 ${completedCount+1}/${totalCount}`;
}

// 页面加载完成后的初始化函数
window.onload = function() {
    // 随机选择20个例句
    selectRandomExamples();
    updateExample();
    
    const exampleCard = document.querySelector('.card-0');
    exampleCard.classList.remove('flipped');
    
    const chineseCardFront = exampleCard.querySelector('.card-front .card-content');
    const chineseCardBack = exampleCard.querySelector('.card-back .card-content');
    const currentExampleData = selectedExamples[currentExample];
    chineseCardFront.textContent = currentExampleData.chinese;
    chineseCardBack.textContent = currentExampleData.german;
    
    for (let i = 1; i <= 5; i++) {
        const card = document.querySelector(`.card-${i}`);
        card.classList.remove('flipped');
    }
    
    const firstCard = document.querySelector('.card-1');
    if (firstCard && !firstCard.querySelector('.validation-prompt')) {
        const prompt = document.createElement('div');
        prompt.className = 'validation-prompt';
        prompt.textContent = '点击验证';
        firstCard.querySelector('.card-front').appendChild(prompt);
    }
};