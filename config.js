// 配置和注释信息
const appConfig = {
  // 标题信息
  "title": "介词宾语练习",
  
  // 例句数据
  "examples": [
    // denken (an)
    {
      "chinese": "我经常想起我在中国最好的朋友。",
      "german": "Ich denke oft an meinen besten Freund in China.",
      "verb": "denken",
      "parts": [
        {"position": 1, "text": "Ich"},
        {"position": 2, "text": "denke"},
        {"position": 3, "text": "oft"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "an meinen besten Freund in China."}
      ]
    },
    {
      "chinese": "你在业余时间还想你的工作吗？",
      "german": "Denkst du noch in deiner Freizeit an deine Arbeit?",
      "verb": "denken",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Denkst"},
        {"position": 3, "text": "du"},
        {"position": 4, "text": "noch in deiner Freizeit"},
        {"position": 5, "text": "an deine Arbeit?"}
      ]
    },
    
    // glauben (an)
    {
      "chinese": "在欧洲许多孩子相信圣诞老人。",
      "german": "In Europa glauben viele Kinder an den Weihnachtsmann.",
      "verb": "glauben",
      "parts": [
        {"position": 1, "text": "In Europa"},
        {"position": 2, "text": "glauben"},
        {"position": 3, "text": "viele Kinder"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "an den Weihnachtsmann."}
      ]
    },
    {
      "chinese": "她为什么一直还相信这个疯狂的故事？",
      "german": "Warum glaubt sie immer noch an die verrückte Geschichte?",
      "verb": "glauben",
      "parts": [
        {"position": 1, "text": "Warum"},
        {"position": 2, "text": "glaubt"},
        {"position": 3, "text": "sie"},
        {"position": 4, "text": "immer noch"},
        {"position": 5, "text": "an die verrückte Geschichte?"}
      ]
    },
    
    // warten (auf)
    {
      "chinese": "我们现在在车站等下一班公交车。",
      "german": "Wir warten jetzt an der Haltestelle auf den nächsten Bus.",
      "verb": "warten",
      "parts": [
        {"position": 1, "text": "Wir"},
        {"position": 2, "text": "warten"},
        {"position": 3, "text": ""},
        {"position": 4, "text": "jetzt an der Haltestelle"},
        {"position": 5, "text": "auf den nächsten Bus."}
      ]
    },
    {
      "chinese": "你们早晨在哪里等体育老师？",
      "german": "Wo wartet ihr am Morgen auf den Sportlehrer?",
      "verb": "warten",
      "parts": [
        {"position": 1, "text": "Wo"},
        {"position": 2, "text": "wartet"},
        {"position": 3, "text": "ihr"},
        {"position": 4, "text": "am Morgen"},
        {"position": 5, "text": "auf den Sportlehrer?"}
      ]
    },
    
    // achten (auf)
    {
      "chinese": "老师注意学生的正确发音。",
      "german": "Der Lehrer achtet auf die richtige Aussprache der Schüler.",
      "verb": "achten",
      "parts": [
        {"position": 1, "text": "Der Lehrer"},
        {"position": 2, "text": "achtet"},
        {"position": 3, "text": "-"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "auf die richtige Aussprache der Schüler."}
      ]
    },
    {
      "chinese": "为什么他在湖里游泳的时候不注意事故的危险？",
      "german": "Warum achtet er beim Schwimmen im See nicht auf die Unfallgefahr?",
      "verb": "achten",
      "parts": [
        {"position": 1, "text": "Warum"},
        {"position": 2, "text": "achtet"},
        {"position": 3, "text": "er"},
        {"position": 4, "text": "beim Schwimmen im See nicht"},
        {"position": 5, "text": "auf die Unfallgefahr?"}
      ]
    },
    
    // erzählen (über)
    {
      "chinese": "我奶奶一直在讲述她在柏林的青年时代。",
      "german": "Meine Oma erzählt ganze Zeit über ihre Jugend in Berlin.",
      "verb": "erzählen",
      "parts": [
        {"position": 1, "text": "Meine Oma"},
        {"position": 2, "text": "erzählt"},
        {"position": 3, "text": ""},
        {"position": 4, "text": "ganze Zeit"},
        {"position": 5, "text": "über ihre Jugend in Berlin."}
      ]
    },
    {
      "chinese": "你愿意现在再次讲述下你的郊游吗？",
      "german": "Willst du jetzt noch mal über deinen Ausflug erzählen?",
      "verb": "erzählen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Willst"},
        {"position": 3, "text": "du"},
        {"position": 4, "text": "jetzt noch mal"},
        {"position": 5, "text": "über deinen Ausflug erzählen?"}
      ]
    },
    
    // diskutieren (über)
    {
      "chinese": "今天全班在讨论一个课本中的新主题。",
      "german": "Heute diskutiert die ganze Klasse über ein neues Thema im Kursbuch.",
      "verb": "diskutieren",
      "parts": [
        {"position": 1, "text": "Heute"},
        {"position": 2, "text": "diskutiert"},
        {"position": 3, "text": "die ganze Klasse"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "über ein neues Thema im Kursbuch."}
      ]
    },
    {
      "chinese": "你们经常这么大声讨论电影吗？",
      "german": "Diskutiert ihr oft so laut über Filme?",
      "verb": "diskutieren",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Diskutiert"},
        {"position": 3, "text": "ihr"},
        {"position": 4, "text": "oft so laut"},
        {"position": 5, "text": "über Filme?"}
      ]
    },
    
    // sorgen (für)
    {
      "chinese": "父母一直关心他们小孩的健康。",
      "german": "Eltern sorgen immer für die Gesundheit ihrer kleinen Kinder.",
      "verb": "sorgen",
      "parts": [
        {"position": 1, "text": "Eltern"},
        {"position": 2, "text": "sorgen"},
        {"position": 3, "text": "-"},
        {"position": 4, "text": "immer"},
        {"position": 5, "text": "für die Gesundheit ihrer kleinen Kinder."}
      ]
    },
    {
      "chinese": "她每天在家照顾生病的祖母吗？",
      "german": "Sorgt sie täglich zu Hause für ihre kranke Großmutter?",
      "verb": "sorgen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Sorgt"},
        {"position": 3, "text": "sie"},
        {"position": 4, "text": "täglich zu Hause"},
        {"position": 5, "text": "für ihre kranke Großmutter?"}
      ]
    },
    
    // kämpfen (für)
    {
      "chinese": "人们为更美好的未来而奋斗。",
      "german": "Die Menschen kämpfen für eine bessere Zukunft.",
      "verb": "kämpfen",
      "parts": [
        {"position": 1, "text": "Die Menschen"},
        {"position": 2, "text": "kämpfen"},
        {"position": 3, "text": "-"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "für eine bessere Zukunft."}
      ]
    },
    {
      "chinese": "他为他在职业中的目标艰苦奋斗吗？",
      "german": "Kämpft er hart für seine Ziele im Beruf?",
      "verb": "kämpfen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Kämpft"},
        {"position": 3, "text": "er"},
        {"position": 4, "text": "hart"},
        {"position": 5, "text": "für seine Ziele im Beruf?"}
      ]
    },
    
    // arbeiten (an)
    {
      "chinese": "从去年起我姐姐在北京做一个有趣的项目。",
      "german": "Seit leitztem Jahr arbeitet meine Schwester in Beijing an einem interessanten Projekt.",
      "verb": "arbeiten",
      "parts": [
        {"position": 1, "text": "Seit leitztem Jahr"},
        {"position": 2, "text": "arbeitet"},
        {"position": 3, "text": "meine Schwester"},
        {"position": 4, "text": "in Beijing"},
        {"position": 5, "text": "an einem interessanten Projekt."}
      ]
    },
    {
      "chinese": "这个艺术家在创作为展览的画作吗？",
      "german": "Arbeitet der Künstler an dem Bild für die Ausstellung?",
      "verb": "arbeiten",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Arbeitet"},
        {"position": 3, "text": "der Künstler"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "an dem Bild für die Ausstellung?"}
      ]
    },
    
    // teilnehmen (an)
    {
      "chinese": "下周我参加一个重要的比赛。",
      "german": "Nächste Woche nehme ich an einem wichtigen Wettbewerb teil.",
      "verb": "teilnehmen",
      "parts": [
        {"position": 1, "text": "Nächste Woche"},
        {"position": 2, "text": "nehme"},
        {"position": 3, "text": "ich"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "an einem wichtigen Wettbewerb teil."}
      ]
    },
    {
      "chinese": "请你们定期参加语言课程！",
      "german": "Nehmt bitte regelmäßig am Sprachkurs teil!",
      "verb": "teilnehmen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Nehmt"},
        {"position": 3, "text": "-"},
        {"position": 4, "text": "bitte regelmäßig"},
        {"position": 5, "text": "am Sprachkurs teil!"}
      ]
    },
    
    // sprechen (mit)
    {
      "chinese": "在短暂的休息后老板与员工们谈话。",
      "german": "Nach der kurzen Pause spricht der Chef mit den Angestellten.",
      "verb": "sprechen",
      "parts": [
        {"position": 1, "text": "Nach der kurzen Pause"},
        {"position": 2, "text": "spricht"},
        {"position": 3, "text": "der Chef"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "mit den Angestellten."}
      ]
    },
    {
      "chinese": "请你友好地和你的客户们说话！",
      "german": "Sprich bitte freundlich mit deinen Kunden!",
      "verb": "sprechen",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Sprich"},
        {"position": 3, "text": "-"},
        {"position": 4, "text": "bitte freundlich"},
        {"position": 5, "text": "mit deinen Kunden!"}
      ]
    },
    
    // telefonieren (mit)
    {
      "chinese": "每周日她都和祖母通电话。",
      "german": "Jeden Sonntag telefoniert sie mit ihrer Großmutter.",
      "verb": "telefonieren",
      "parts": [
        {"position": 1, "text": "Jeden Sonntag"},
        {"position": 2, "text": "telefoniert"},
        {"position": 3, "text": "sie"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "mit ihrer Großmutter."}
      ]
    },
    {
      "chinese": "请经常和你哥哥打电话！",
      "german": "Telefoniere bitte oft mit deinem Bruder!",
      "verb": "telefonieren",
      "parts": [
        {"position": 1, "text": "-"},
        {"position": 2, "text": "Telefoniere"},
        {"position": 3, "text": "-"},
        {"position": 4, "text": "bitte oft"},
        {"position": 5, "text": "mit deinem Bruder!"}
      ]
    },
    
    // erzählen (von)
    {
      "chinese": "在晚餐的时候我们的邻居聊到他在亚洲的旅行。",
      "german": "Beim Abendessen erzählt unser Nachbar von seinen Reisen in Asien.",
      "verb": "erzählen",
      "parts": [
        {"position": 1, "text": "Beim Abendessen"},
        {"position": 2, "text": "erzählt"},
        {"position": 3, "text": "unser Nachbar"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "von seinen Reisen in Asien."}
      ]
    },
    {
      "chinese": "孩子们兴奋地聊到动物园之行。",
      "german": "Die Kinder erzählen begeistert von ihrem Zoobesuch.",
      "verb": "erzählen",
      "parts": [
        {"position": 1, "text": "Die Kinder"},
        {"position": 2, "text": "erzählen"},
        {"position": 3, "text": "-"},
        {"position": 4, "text": "begeistert"},
        {"position": 5, "text": "von ihrem Zoobesuch."}
      ]
    },
    
    // träumen (von)
    {
      "chinese": "孩子梦想拥有一辆大玩具车。",
      "german": "Das Kind träumt von einem großen Spielzeugauto.",
      "verb": "träumen",
      "parts": [
        {"position": 1, "text": "Das Kind"},
        {"position": 2, "text": "träumt"},
        {"position": 3, "text": "-"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "von einem großen Spielzeugauto."}
      ]
    },
    {
      "chinese": "许多人梦想在国外生活。",
      "german": "Viele Leute träumen von einem Leben im Ausland.",
      "verb": "träumen",
      "parts": [
        {"position": 1, "text": "Viele Leute"},
        {"position": 2, "text": "träumen"},
        {"position": 3, "text": "-"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "von einem Leben im Ausland."}
      ]
    },
    
    // gehören (zu)
    {
      "chinese": "这栋漂亮的房子属于我叔叔。",
      "german": "Dieses schöne Haus gehört zu meinem Onkel.",
      "verb": "gehören",
      "parts": [
        {"position": 1, "text": "Dieses schöne Haus"},
        {"position": 2, "text": "gehört"},
        {"position": 3, "text": "-"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "zu meinem Onkel."}
      ]
    },
    {
      "chinese": "小狗是我们幸福家庭的一员。",
      "german": "Der kleine Hund gehört zu unserer glücklichen Familie.",
      "verb": "gehören",
      "parts": [
        {"position": 1, "text": "Der kleine Hund"},
        {"position": 2, "text": "gehört"},
        {"position": 3, "text": "-"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "zu unserer glücklichen Familie."}
      ]
    },
    
    // zählen (zu)
    {
      "chinese": "德语是最受欢迎的外语之一。",
      "german": "Deutsch zählt zu den beliebtesten Fremdsprachen.",
      "verb": "zählen",
      "parts": [
        {"position": 1, "text": "Deutsch"},
        {"position": 2, "text": "zählt"},
        {"position": 3, "text": "-"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "zu den beliebtesten Fremdsprachen."}
      ]
    },
    {
      "chinese": "这个公园是城市最美的地方之一。",
      "german": "Dieser Park zählt zu den schönsten Orten der Stadt.",
      "verb": "zählen",
      "parts": [
        {"position": 1, "text": "Dieser Park"},
        {"position": 2, "text": "zählt"},
        {"position": 3, "text": "-"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "zu den schönsten Orten der Stadt."}
      ]
    },
    
    // arbeiten (bei)
    {
      "chinese": "我哥哥在一家国际公司工作。",
      "german": "Mein Bruder arbeitet bei einer internationalen Firma.",
      "verb": "arbeiten",
      "parts": [
        {"position": 1, "text": "Mein Bruder"},
        {"position": 2, "text": "arbeitet"},
        {"position": 3, "text": "-"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "bei einer internationalen Firma."}
      ]
    },
    {
      "chinese": "李女士自从两年来在一家知名餐厅工作。",
      "german": "Frau Li arbeitet seit 2 Jahren bei einem bekannten Restaurant.",
      "verb": "arbeiten",
      "parts": [
        {"position": 1, "text": "Frau Li"},
        {"position": 2, "text": "arbeitet"},
        {"position": 3, "text": "-"},
        {"position": 4, "text": "seit 2 Jahren"},
        {"position": 5, "text": "bei einem bekannten Restaurant."}
      ]
    },
    
    // bestehen (aus)
    {
      "chinese": "这场考试由三个困难的部分组成。",
      "german": "Diese Prüfung besteht aus drei schwierigen Teilen.",
      "verb": "bestehen",
      "parts": [
        {"position": 1, "text": "Diese Prüfung"},
        {"position": 2, "text": "besteht"},
        {"position": 3, "text": "-"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "aus drei schwierigen Teilen."}
      ]
    },
    {
      "chinese": "我的早餐由面包、奶酪和新鲜水果组成。",
      "german": "Mein Frühstück besteht aus Brot, Käse und frischem Obst.",
      "verb": "bestehen",
      "parts": [
        {"position": 1, "text": "Mein Frühstück"},
        {"position": 2, "text": "besteht"},
        {"position": 3, "text": "-"},
        {"position": 4, "text": "-"},
        {"position": 5, "text": "aus Brot, Käse und frischem Obst."}
      ]
    }
  ],
  
  // UI文本
  "uiText": {
    "header": "至元德语 - 五位造句练习",
    "btnAnswer": "看答案",
    "btnReset": "重试",
    "btnNext": "下一句",
    "instructionsTitle": "如何使用造句器",
    "instructionSteps": [
      "阅读中文句子",
      "按照5位模型造句",
      "依次点击卡片验证",
      "不确定动词-点击\"提示\"",
      "不会造句-点击\"看答案\"",
      "重新尝试-点击\"重试\"",
      "完成造句-点击\"下一句\""
    ],
    "copyrightLines": [
      "仅至元德语内部学员使用",
      "未经同意请勿转发和商用"
    ]
  },
  
  // 样式配置
  "styles": {
    "headerColor": "#f3a233",
    "buttonColors": {
      "answer": "#e74c3c",
      "reset": "#f39c12", 
      "next": "#27ae60"
    }
  }
};
