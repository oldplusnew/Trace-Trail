export type Language = 'zh' | 'en';

export const translations = {
  zh: {
    // Navbar
    nav: {
      home: '首页',
      themes: '主题线路',
      about: '关于我们',
      services: '服务特色',
      contact: '联系我们',
      book: '预约咨询',
    },
    langSwitch: 'EN',

    // Hero
    hero: {
      location: '中国 · 河南',
      title: '行走于中原文脉',
      subtitle: 'Walk the Central Plains, Read China\'s Soul',
      tagline: '让每一次出发，都成为一场文化朝圣',
      description: '专注高净值家庭与 5-7 人商务团队的高端文化定制旅行\n深耕中原文化秘境，做您最懂河南的文化同行者',
      ctaThemes: '探索主题线路',
      ctaBook: '预约定制行程',
      stat1: { num: '200+', label: '实地调研遗址' },
      stat2: { num: '6', label: '文化主题模块' },
      stat3: { num: '5-7', label: '人精品小团' },
      scroll: 'SCROLL',
    },

    // Core Values
    values: {
      sectionLabel: '核心优势',
      title: '为什么选择「寻踪」',
      subtitle: '在人人都能打卡的时代，稀缺的是不被看见的风景',
      quote: '「在流量泛滥的时代，真正的稀缺不是景点，而是理解。」',
      items: [
        {
          num: '01',
          title: '学者主理，学术护航',
          desc: '河南大学历史文化学院旅游管理硕士主理，文化部认证「中国旅游专家」，确保每一条线路都经得起学术推敲。',
        },
        {
          num: '02',
          title: '冷门秘境，拒绝人潮',
          desc: '80%行程点非传统A级景区，深入风穴寺、三苏坟、汉三阙等文化秘境，避开商业喧嚣，沉浸真实文脉。',
        },
        {
          num: '03',
          title: '影像叙事，记忆永存',
          desc: '全程专业摄影跟拍 + 文化Vlog剪辑，行程结束后交付高清图集与精剪短片，让旅程成为可传承的数字资产。',
        },
        {
          num: '04',
          title: '小团私享，极致服务',
          desc: '5-7人封顶，1:3服务配比，全程专车接送、文化导师随行、管家式响应，打造真正私密的深度体验。',
        },
      ],
    },

    // Themes
    themes: {
      sectionLabel: '主题线路',
      title: '菜单式文化主题定制游',
      subtitle: '六大主题自由组合，3-7天专属行程一键生成',
      cta: '获取专属行程方案',
      note: '每个主题均可自由勾选组合，支持时间、节奏、交通、住宿全维度个性化定制',
      items: [
        {
          title: '佛教文化之旅',
          enTitle: 'Buddhist Heritage',
          highlight: '禅修体验 · 早课参与 · 高僧对话',
          desc: '循着达摩面壁、玄奘译经的足迹，在中原大地探寻佛教东传的第一缕曙光。于晨钟暮鼓中体验禅修，在古刹林立的静谧中对话千年佛缘。',
          spots: ['少林寺 · 禅宗祖庭', '白马寺 · 佛教东传第一寺', '风穴寺 · 千年古刹', '大相国寺'],
        },
        {
          title: '道教文化之旅',
          enTitle: 'Taoist Immersion',
          highlight: '道教养生 · 符箓文化 · 太极晨练',
          desc: '从黄帝问道广成子的崆峒山，到老子著经的鹿邑太清宫，循着道家先贤的足迹，体验天人合一的东方智慧。',
          spots: ['崆峒山 · 黄帝问道', '老君山 · 道源圣地', '太昊陵 · 伏羲故里', '鹿邑太清宫 · 老子故里'],
        },
        {
          title: '古代书院之旅',
          enTitle: 'Academy Heritage',
          highlight: '国学讲座 · 朱子家礼体验 · 古籍抄写',
          desc: '行走于「四大书院」之中，在千年古柏下聆听圣贤遗音。亲手抄写古籍残页，体验朱子家礼的庄重，让书院精神在当代延续。',
          spots: ['嵩阳书院', '应天书院', '伊川书院', '花洲书院'],
        },
        {
          title: '凭吊 · 名人墓葬之旅',
          enTitle: 'Literary Pilgrimage',
          highlight: '文人精神解读 · 墓祭仪式 · 诗词诵读',
          desc: '在三苏坟前感怀东坡风骨，于韩愈墓旁诵读《师说》。每一次凭吊，都是与先贤灵魂的对话，都是一次精神的洗礼。',
          spots: ['三苏坟 · 郏县', '韩愈墓 · 孟州', '欧阳修墓 · 新郑', '杜甫故里 · 李商隐墓'],
        },
        {
          title: '中原诗词之旅',
          enTitle: 'Poetry Journey',
          highlight: '沉浸式吟诵 · 诗词创作工坊 · 古琴配乐',
          desc: '从「关关雎鸠」的淇水之畔，到「两个黄鹂鸣翠柳」的诗圣故里。循着诗词的足迹行走中原，在吟诵与创作中重燃千年文心。',
          spots: ['《诗经》· 淇水卫国', '唐诗 · 杜甫白居易足迹', '宋词 · 周邦彦李清照曾居地'],
        },
        {
          title: '嵩岳文化深度游',
          enTitle: 'Songyue Depth',
          highlight: '天文历法体验 · 天地之中文化解读',
          desc: '深入「天地之中」世界遗产群，从周公测景台的圭表影子中读懂「中」的奥义。这是一场关于中国宇宙观与文明根脉的深度探索。',
          spots: ['少林寺', '中岳庙', '观星台', '嵩阳书院', '汉三阙'],
        },
      ],
    },

    // Founder
    founder: {
      sectionLabel: '关于我们',
      title: '主理人介绍',
      subtitle: '一位用脚步丈量中原文脉的学者型旅行主理人',
      bio: '长期致力于中原历史文化资源的活化与传播，熟悉河南及晋南、皖北等周边区域的历史遗迹、宗教文化与文学脉络，具备从学术研究到大众体验的产品转化能力。主张「旅行即学习，行走即传承」，致力于为高净值家庭与小型精英团队提供有深度、有温度、有审美的文化定制旅行服务。',
      quote: '「我不是导游，是你的文化同行者。」',
      quoteLabel: '主理人寄语',
      photoAlt: '主理人照片',
      roles: [
        { role: '产品设计师', desc: '主导主题线路研发' },
        { role: '首席文化导师', desc: '亲自带队高端团' },
        { role: '内容主创', desc: '撰写文化解读脚本' },
        { role: '品牌代言人', desc: '学者型旅行IP' },
      ],
      credentials: [
        {
          title: '河南大学历史文化学院',
          detail: '旅游管理硕士',
          desc: '兼具历史学视野与旅游产业思维，擅长将学术资源转化为大众可体验的文化产品',
        },
        {
          title: '中英文双语导游证',
          detail: '双语服务能力',
          desc: '可服务国际高净值客户或中外家庭，拓展高端市场边界，无障碍沟通全球宾客',
        },
        {
          title: '文化部认证资质',
          detail: 'China Travel Specialist',
          desc: '文化和旅游部认证「中国旅游专家」，官方认可的文化旅游专业权威身份',
        },
        {
          title: '河南省少年儿童图书馆',
          detail: '「跟着诗词游河南」撰稿人',
          desc: '擅长将厚重文化以通俗、生动、有温度的方式表达，具备优质内容生产能力',
        },
      ],
    },

    // Services
    services: {
      sectionLabel: '服务特色',
      title: '不止旅行，更是一场文化创作',
      subtitle: '我们带您去别人不去的地方，讲别人讲不清的故事',
      items: [
        {
          title: '高端交通',
          items: ['7座豪华商务车全程接送', '高铁包厢可选', '双语司机兼向导'],
        },
        {
          title: '精选住宿',
          items: ['精品文化主题酒店', '禅修别院', '历史建筑改造民宿'],
        },
        {
          title: '特色餐饮',
          items: ['定制「文人宴」「禅素宴」', '书院膳', '地方非遗美食'],
        },
        {
          title: '沉浸体验',
          items: ['每日1项沉浸活动', '抄经 · 拓片 · 茶道', '古琴 · 汉服礼仪'],
        },
        {
          title: '影像记录',
          items: ['全程专业摄影跟拍', '高清图集精修50+张', '3-5分钟文化Vlog'],
        },
        {
          title: '知识交付',
          items: ['电子《文脉手札》', '路线图 · 人物小传', '可选精装纪念册'],
        },
      ],
      highlights: [
        { num: '¥3,000', unit: '起/人/天', label: '定制行程服务费' },
        { num: '1:3', unit: '服务配比', label: '导师 · 管家 · 司机' },
        { num: '3天', unit: '起订', label: '灵活行程时长' },
      ],
      bottomQuote: '在流量泛滥的时代，真正的奢侈不是奢华酒店，\n而是独享一片无人打扰的古碑林，和一段只属于你的、被镜头温柔记住的文化旅程。',
    },

    // Contact
    contact: {
      sectionLabel: '联系我们',
      title: '开启您的文化之旅',
      subtitle: '填写预约信息，我们将在24小时内与您联系',
      infoTitle: '联系方式',
      phoneLabel: '咨询热线',
      phone: '+86 18638643423',
      emailLabel: '电子邮箱',
      email: 'contact@xunzong.travel',
      addressLabel: '公司地址',
      address: '河南省郑州市\n河南寻踪文化发展有限公司',
      infoQuote: '「我们邀请你，一起走读中原，触摸中华文明的原初心跳。」',
      form: {
        name: '您的姓名',
        namePlaceholder: '请输入姓名',
        phone: '联系电话',
        phonePlaceholder: '请输入手机号',
        type: '出行类型',
        typeFamily: '高净值家庭',
        typeBusiness: '商务团队（5-7人）',
        typeIndividual: '个人定制',
        theme: '意向主题',
        themePlaceholder: '请选择主题',
        date: '预计出行日期',
        people: '出行人数',
        peoplePlaceholder: '请输入人数',
        message: '其他需求',
        messagePlaceholder: '请描述您的特殊需求或偏好...',
        submit: '提交预约',
        required: '*',
        successTitle: '预约提交成功',
        successMessage: '感谢您选择寻踪文旅，我们的旅行顾问将在24小时内与您联系，为您定制专属行程方案。',
      },
    },

    // Footer
    footer: {
      company: '河南寻踪文化发展有限公司',
      slogan: 'XUNZONG CULTURAL TRAVEL',
      desc: '河南寻踪文化发展有限公司，致力于打造中国高端文化定制旅行新范式。活化中原文化遗产，让深度文化旅行成为高知人群的生活方式。',
      brandQuote: '「Walk the Central Plains, Read China\'s Soul.」',
      quickLinks: '快速导航',
      themeLinks: '主题线路',
      copyright: '版权所有',
      tagline: '高端文化定制旅行解决方案提供商',
    },
  },

  en: {
    // Navbar
    nav: {
      home: 'Home',
      themes: 'Themes',
      about: 'About',
      services: 'Services',
      contact: 'Contact',
      book: 'Book Now',
    },
    langSwitch: '中文',

    // Hero
    hero: {
      location: 'China · Henan',
      title: 'Walk the Central Plains',
      subtitle: 'Read China\'s Soul',
      tagline: 'Every journey is a cultural pilgrimage',
      description: 'Premium cultural bespoke travel for high-net-worth families\nand 5-7 person executive teams, exploring the hidden gems of Central China',
      ctaThemes: 'Explore Themes',
      ctaBook: 'Book Your Journey',
      stat1: { num: '200+', label: 'Sites Explored' },
      stat2: { num: '6', label: 'Cultural Themes' },
      stat3: { num: '5-7', label: 'Guests Per Tour' },
      scroll: 'SCROLL',
    },

    // Core Values
    values: {
      sectionLabel: 'Why Us',
      title: 'Why Choose Trace & Trail',
      subtitle: 'In an age of mass tourism, true luxury is understanding',
      quote: '"In an age of information overload, what\'s truly scarce is not the scenery, but the understanding."',
      items: [
        {
          num: '01',
          title: 'Scholar-Led, Academic Rigor',
          desc: 'Led by a Master of Tourism Management from Henan University, certified by the Ministry of Culture as a "China Travel Specialist." Every itinerary is academically vetted.',
        },
        {
          num: '02',
          title: 'Off-the-Beaten-Path',
          desc: '80% of our destinations are outside traditional tourist routes. Discover hidden gems like Fengxue Temple, Sansu Tomb, and Han Sanque — away from commercial crowds.',
        },
        {
          num: '03',
          title: 'Cinematic Storytelling',
          desc: 'Professional photography and videography throughout your journey. Receive a curated photo album and a 3-5 minute cultural vlog — memories that last forever.',
        },
        {
          num: '04',
          title: 'Intimate Groups, Premium Service',
          desc: 'Groups capped at 5-7 guests with a 1:3 staff-to-guest ratio. Private vehicle, cultural mentor, and butler-style service for a truly exclusive experience.',
        },
      ],
    },

    // Themes
    themes: {
      sectionLabel: 'Themes',
      title: 'Menu-Style Cultural Themes',
      subtitle: 'Mix and match from 6 themes for your 3-7 day bespoke itinerary',
      cta: 'Get Your Custom Itinerary',
      note: 'Each theme can be freely combined. Fully customizable in terms of timing, pace, transport, and accommodation.',
      items: [
        {
          title: 'Buddhist Heritage Journey',
          enTitle: 'Buddhist Heritage',
          highlight: 'Meditation · Morning Chant · Dialogue with Monks',
          desc: 'Follow in the footsteps of Bodhidharma and Xuanzang. Experience meditation at dawn, explore ancient temples, and connect with millennia of Buddhist heritage in Central China.',
          spots: ['Shaolin Temple · Zen Origin', 'White Horse Temple · Buddhism\'s Entry', 'Fengxue Temple · Millennium Temple', 'Daxiangguo Temple'],
        },
        {
          title: 'Taoist Immersion Journey',
          enTitle: 'Taoist Immersion',
          highlight: 'Taoist Wellness · Talisman Culture · Tai Chi',
          desc: 'From Kongtong Mountain where the Yellow Emperor sought wisdom, to Laozi\'s hometown in Luyi. Walk the path of Taoist sages and embrace the wisdom of harmony.',
          spots: ['Kongtong Mountain · Yellow Emperor', 'Laojun Mountain · Taoist Source', 'Taihao Mausoleum · Fuxi', 'Luyi Taiqing Palace · Laozi'],
        },
        {
          title: 'Ancient Academy Journey',
          enTitle: 'Academy Heritage',
          highlight: 'Lectures · Rituals · Ancient Book Copying',
          desc: 'Walk among the "Four Great Academies" of ancient China. Copy classical manuscripts by hand, experience Zhu Xi\'s family rituals, and let the spirit of scholarship live on.',
          spots: ['Songyang Academy', 'Yingtian Academy', 'Yichuan Academy', 'Huazhou Academy'],
        },
        {
          title: 'Literary Pilgrimage',
          enTitle: 'Literary Pilgrimage',
          highlight: 'Scholar Spirit · Memorial Rituals · Poetry Recitation',
          desc: 'Pay respects at the tombs of Su Shi, Han Yu, and Ouyang Xiu. Every visit is a dialogue with the souls of ancient literati — a spiritual cleansing through poetry.',
          spots: ['Sansu Tomb · Jiaxian', 'Han Yu Tomb · Mengzhou', 'Ouyangxiu Tomb · Xinzheng', 'Du Fu & Li Shangyin Sites'],
        },
        {
          title: 'Poetry of the Central Plains',
          enTitle: 'Poetry Journey',
          highlight: 'Recitation · Poetry Workshop · Guqin Music',
          desc: 'From the banks of the Qi River where the Book of Songs was born, to Du Fu\'s homeland. Walk in the footsteps of poets and reignite the literary heart of a thousand years.',
          spots: ['Book of Songs · Qi River', 'Tang Poetry · Du Fu & Bai Juyi', 'Song Lyrics · Zhou Bangyan & Li Qingzhao'],
        },
        {
          title: 'Songyue Depth Tour',
          enTitle: 'Songyue Depth',
          highlight: 'Astronomy · World Heritage · Cosmic Order',
          desc: 'Deep dive into the "Center of Heaven and Earth" World Heritage site. Decode the cosmic significance of ancient Chinese astronomy at the Duke of Zhou\'s observatory.',
          spots: ['Shaolin Temple', 'Zhongyue Temple', 'Dengfeng Observatory', 'Songyang Academy', 'Han Sanque'],
        },
      ],
    },

    // Founder
    founder: {
      sectionLabel: 'About',
      title: 'The Founder',
      subtitle: 'A scholar-traveler who measures Central China\'s cultural pulse with every step',
      bio: 'Dedicated to the revitalization and dissemination of Central China\'s historical and cultural heritage. Familiar with historical sites, religious culture, and literary traditions across Henan, southern Shanxi, and northern Anhui. Advocates that "travel is learning, walking is heritage." Committed to providing culturally deep, warm, and aesthetically refined bespoke travel for high-net-worth families and elite small groups.',
      quote: '"I am not a tour guide. I am your cultural companion."',
      quoteLabel: 'Founder\'s Note',
      photoAlt: 'Founder Photo',
      roles: [
        { role: 'Product Designer', desc: 'Curates thematic itineraries' },
        { role: 'Chief Mentor', desc: 'Personally leads premium tours' },
        { role: 'Content Creator', desc: 'Writes cultural narratives' },
        { role: 'Brand Ambassador', desc: 'Scholar-traveler IP' },
      ],
      credentials: [
        {
          title: 'Henan University',
          detail: 'M.A. Tourism Management',
          desc: 'Combines historical perspective with tourism industry expertise, adept at translating academic resources into accessible cultural experiences.',
        },
        {
          title: 'Bilingual Guide License',
          detail: 'Chinese & English',
          desc: 'Serves international high-net-worth clients and mixed families, breaking language barriers to connect with global guests.',
        },
        {
          title: 'Ministry of Culture Certified',
          detail: 'China Travel Specialist',
          desc: 'Officially certified by the Ministry of Culture and Tourism as a cultural travel specialist, a trusted authority in the industry.',
        },
        {
          title: 'Henan Children\'s Library',
          detail: '"Travel Henan Through Poetry" Author',
          desc: 'Excels at expressing profound culture in accessible, vivid, and warm ways, with strong content creation capabilities.',
        },
      ],
    },

    // Services
    services: {
      sectionLabel: 'Services',
      title: 'More Than Travel — A Cultural Creation',
      subtitle: 'We take you where others don\'t go, and tell stories others can\'t tell',
      items: [
        {
          title: 'Premium Transport',
          items: ['Luxury 7-seat vehicle', 'Private train cabin option', 'Bilingual driver-guide'],
        },
        {
          title: 'Curated Stays',
          items: ['Boutique cultural hotels', 'Zen retreat courtyards', 'Heritage building B&Bs'],
        },
        {
          title: 'Signature Dining',
          items: ['Custom "Scholar Banquet" & "Zen Vegetarian"', 'Academy cuisine', 'Local intangible heritage dishes'],
        },
        {
          title: 'Immersive Experiences',
          items: ['One immersive activity daily', 'Sutra copying · Rubbing · Tea ceremony', 'Guqin · Hanfu rituals'],
        },
        {
          title: 'Visual Documentation',
          items: ['Professional photography', '50+ curated photos', '3-5 min cultural vlog'],
        },
        {
          title: 'Knowledge Delivery',
          items: ['Digital "Cultural Journal"', 'Route map · Biographies', 'Optional hardcover album'],
        },
      ],
      highlights: [
        { num: '¥3,000', unit: 'per person/day from', label: 'Custom Itinerary Fee' },
        { num: '1:3', unit: 'Staff-to-Guest Ratio', label: 'Mentor · Butler · Driver' },
        { num: '3 Days', unit: 'Minimum', label: 'Flexible Duration' },
      ],
      bottomQuote: 'In an age of information overload, true luxury is not a five-star hotel,\nbut an undisturbed ancient stele forest, and a cultural journey gently captured on film, uniquely yours.',
    },

    // Contact
    contact: {
      sectionLabel: 'Contact',
      title: 'Begin Your Cultural Journey',
      subtitle: 'Fill in your details and we will contact you within 24 hours',
      infoTitle: 'Contact Info',
      phoneLabel: 'Hotline',
      phone: '+86 18638643423',
      emailLabel: 'Email',
      email: 'contact@xunzong.travel',
      addressLabel: 'Address',
      address: 'Zhengzhou, Henan\nTrace & Trail Co., Ltd.',
      infoQuote: '"We invite you to walk and read Central China together, touching the original heartbeat of Chinese civilization."',
      form: {
        name: 'Your Name',
        namePlaceholder: 'Enter your name',
        phone: 'Phone Number',
        phonePlaceholder: 'Enter your phone number',
        type: 'Travel Type',
        typeFamily: 'High-Net-Worth Family',
        typeBusiness: 'Executive Team (5-7)',
        typeIndividual: 'Individual Custom',
        theme: 'Preferred Theme',
        themePlaceholder: 'Select a theme',
        date: 'Preferred Date',
        people: 'Number of Guests',
        peoplePlaceholder: 'Enter number of guests',
        message: 'Special Requests',
        messagePlaceholder: 'Describe your special needs or preferences...',
        submit: 'Submit Inquiry',
        required: '*',
        successTitle: 'Inquiry Submitted',
        successMessage: 'Thank you for choosing Trace & Trail. Our travel consultant will contact you within 24 hours to customize your exclusive itinerary.',
      },
    },

    // Footer
    footer: {
      company: 'Trace & Trail Co., Ltd.',
      slogan: 'XUNZONG CULTURAL TRAVEL',
      desc: 'Dedicated to creating a new paradigm for premium cultural bespoke travel in China. Revitalizing Central China\'s cultural heritage, making deep cultural travel a lifestyle for the intellectually curious.',
      brandQuote: '"Walk the Central Plains, Read China\'s Soul."',
      quickLinks: 'Quick Links',
      themeLinks: 'Themes',
      copyright: 'All Rights Reserved',
      tagline: 'Premium Cultural Bespoke Travel Solutions',
    },
  },
};

export type Translations = typeof translations.en;
