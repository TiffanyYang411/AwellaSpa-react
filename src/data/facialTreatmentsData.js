const facialTreatmentsData = [
  {
    category: "深層清潔系列",
    treatments: [
      {
        name: "有機淨膚療程",
        time: "75 mins",
        price: "NT$ 2,800",
        steps: ["深層清潔", "磨砂", "面膜", "冷敷收斂"],
        content: ["{ 有機臉部深層清潔 }", "{ 有機臉部磨砂膏 }", "{ 白泥面膜 }", "{ 玫瑰露收斂液 }"],
        description: "深入毛孔，徹底淨化油脂與雜質，適合油性與混合性肌膚。",
        benefits: ["清除粉刺", "毛孔緊緻"],
        image: `${import.meta.env.BASE_URL}images/facial1-1.jpg`
      },
      {
        name: "抗痘煥膚療程",
        time: "70 mins",
        price: "NT$ 2,600",
        steps: ["酵素淨化", "蘆薈敷臉", "草本控油"],
        content: ["{ 天然酵素面膜 }", "{ 蘆薈精華導入 }", "{ 控油草本液 }"],
        description: "專為痘痘肌設計，抑制油脂分泌與舒緩紅腫肌膚。",
        benefits: ["鎮靜抗痘", "平衡油脂"],
        image: `${import.meta.env.BASE_URL}images/facial1-2.jpg`
      },
      {
        name: "溫和去角質療程",
        time: "60 mins",
        price: "NT$ 2,400",
        steps: ["清潔", "去角質", "精華保濕"],
        content: ["{ 米胚芽溫和磨砂 }", "{ 小黃瓜精華 }", "{ 洋甘菊舒緩水 }"],
        description: "適合敏感肌使用，溫和代謝老廢角質，提升後續吸收力。",
        benefits: ["改善粗糙", "提升光澤"],
        image: `${import.meta.env.BASE_URL}images/facial1-3.jpg`
      }
    ]
  },
  {
    category: "保濕修護系列",
    treatments: [
      {
        name: "水光補水護理",
        time: "75 mins",
        price: "NT$ 2,800",
        steps: ["深層補水", "精華導入", "水膜敷臉"],
        content: ["{ 玻尿酸精華液 }", "{ 超音波導入儀 }", "{ 保濕凝膠面膜 }"],
        description: "集中補充肌膚水分與保濕屏障，提升肌膚含水量與柔嫩度。",
        benefits: ["補水保濕", "肌膚透亮"],
        image: `${import.meta.env.BASE_URL}images/facial2-1.jpg`
      },
      {
        name: "舒敏修復護理",
        time: "70 mins",
        price: "NT$ 2,900",
        steps: ["舒緩潔膚", "鎮靜面膜", "修復導入"],
        content: ["{ 洋甘菊潔面乳 }", "{ 蘆薈修護面膜 }", "{ 甘草萃取精華 }"],
        description: "專為敏感或醫美術後肌膚設計，迅速舒緩與修復。",
        benefits: ["鎮定泛紅", "強化肌膚屏障"],
        image: `${import.meta.env.BASE_URL}images/facial2-2.jpg`
      },
      {
        name: "玻尿酸精華導入",
        time: "60 mins",
        price: "NT$ 2,500",
        steps: ["去角質", "精華導入", "面膜收斂"],
        content: ["{ 玻尿酸小分子 }", "{ 冷噴舒緩儀 }", "{ 補水凍膜 }"],
        description: "利用微電流技術將高濃度精華導入肌底，立即提升保濕感。",
        benefits: ["強效補水", "修護肌底"],
        image: `${import.meta.env.BASE_URL}images/facial2-3.jpg`
      }
    ]
  },
  {
    category: "緊緻提拉系列",
    treatments: [
      {
        name: "膠原彈潤拉提",
        time: "75 mins",
        price: "NT$ 3,200",
        steps: ["潔膚", "提拉按摩", "精華面膜"],
        content: ["{ 膠原蛋白按摩霜 }", "{ 臉部雕塑手技 }", "{ 緊緻面膜 }"],
        description: "運用特製提拉技術搭配膠原導入，改善鬆弛與法令紋。",
        benefits: ["緊緻肌膚", "增加彈性"],
        image: `${import.meta.env.BASE_URL}images/facial3-1.jpg`
      },
      {
        name: "金箔賦活療程",
        time: "80 mins",
        price: "NT$ 3,600",
        steps: ["金箔塗抹", "熱能導入", "舒緩敷臉"],
        content: ["{ 24K金箔精華 }", "{ 熱能緊緻儀 }", "{ 金箔精華面膜 }"],
        description: "奢華金箔能量提升細胞活性與新生循環，打造光采輪廓。",
        benefits: ["活化膚質", "提亮膚色"],
        image: `${import.meta.env.BASE_URL}images/facial3-2.jpg`
      },
      {
        name: "音波肌能拉提",
        time: "90 mins",
        price: "NT$ 4,000",
        steps: ["清潔", "音波探頭", "緊緻導入"],
        content: ["{ 音波拉提機 }", "{ 胜肽精華 }", "{ 冷敷面膜 }"],
        description: "無創拉提技術強化肌膚結構，改善鬆弛與下垂。",
        benefits: ["臉部輪廓提升", "即效年輕化"],
        image: `${import.meta.env.BASE_URL}images/facial3-3.jpg`
      }
    ]
  },
  {
    category: "亮白煥膚系列",
    treatments: [
      {
        name: "花植亮白療程",
        time: "70 mins",
        price: "NT$ 2,800",
        steps: ["溫和去角質", "花萃精華導入", "鮮花面膜敷臉"],
        content: ["{ 玫瑰果精華液 }", "{ 洋甘菊導入 }", "{ 小蒼蘭面膜 }"],
        description: "採用天然花萃成分提亮膚色，重現自然透亮感，適合暗沉肌膚使用。",
        benefits: ["提亮", "改善暗沉"],
        image: `${import.meta.env.BASE_URL}images/facial4-1.jpg`
      },
      {
        name: "珍珠淨白光感護理",
        time: "75 mins",
        price: "NT$ 3,000",
        steps: ["清潔", "珍珠微粒按摩", "面膜收斂"],
        content: ["{ 珍珠粉煥膚霜 }", "{ 海洋白藻精華 }", "{ 淨白膠原面膜 }"],
        description: "利用珍珠與海洋植萃提升皮膚光澤與透亮度，打造無瑕光感肌。",
        benefits: ["均勻膚色", "白皙透亮"],
        image: `${import.meta.env.BASE_URL}images/facial4-2.jpg`
      },
      {
        name: "酵素光亮療程",
        time: "60 mins",
        price: "NT$ 2,600",
        steps: ["酵素軟化", "光透導入", "冷敷修復"],
        content: ["{ 天然果酵軟化液 }", "{ 亮白胜肽精華 }", "{ 小黃瓜凝膠 }"],
        description: "果酸酵素能溫和代謝老廢角質，改善膚色暗黃與膚質粗糙。",
        benefits: ["平滑膚質", "提亮膚色"],
        image: `${import.meta.env.BASE_URL}images/facial4-3.jpg`
      }
    ]
  },
  {
    category: "抗老修護系列",
    treatments: [
      {
        name: "彈力賦活護理",
        time: "80 mins",
        price: "NT$ 3,200",
        steps: ["深層清潔", "精華導入", "緊緻面膜"],
        content: ["{ 多肽胜肽精華 }", "{ 電波微循導入 }", "{ 抗老緊緻泥膜 }"],
        description: "結合胜肽與微循電流，有效刺激膠原增生，提升彈性與細緻度。",
        benefits: ["抗老", "緊緻毛孔"],
        image: `${import.meta.env.BASE_URL}images/facial5-1.jpg`
      },
      {
        name: "晚香御齡護理",
        time: "85 mins",
        price: "NT$ 3,600",
        steps: ["洗顏", "蠶絲蛋白導入", "夜間修護面膜"],
        content: ["{ 蠶絲蛋白精華 }", "{ 安瓶精華導入 }", "{ 晚香精油舒緩敷臉 }"],
        description: "特調夜間抗老修護療程，適合熟齡肌進行肌底重建與保養。",
        benefits: ["修護老化", "延緩細紋生成"],
        image: `${import.meta.env.BASE_URL}images/facial5-2.jpg`
      },
      {
        name: "紫晶能量抗老儀式",
        time: "90 mins",
        price: "NT$ 3,800",
        steps: ["靜心香氛", "紫晶刮痧按摩", "冰晶修復面膜"],
        content: ["{ 能量紫晶刮痧棒 }", "{ 修復植萃精華 }", "{ 冰感膠原面膜 }"],
        description: "將天然紫晶能量與臉部儀式結合，達到身心放鬆與肌膚年輕化雙重功效。",
        benefits: ["活化肌膚", "舒緩壓力"],
        image: `${import.meta.env.BASE_URL}images/facial5-3.jpg`
      }
    ]
  }
];

export default facialTreatmentsData;

