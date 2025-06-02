const spaTreatmentsData = [
  {
    category: "神聖花植儀式SPA",
    treatments: [
      {
        name: "神聖花植精油SPA",
        time: "90 mins",
        price: "NT$ 3,200",
        steps: ["香氛儀式", "芳療精油背部按摩", "頭部穴位釋壓"],
        content: ["{有機臉部深層清潔}", "{有機臉部磨砂膏}", "{有機面膜}", "{膠原蛋白臉部按摩}", "{超音波臉部按摩}"],
        description: "奢華的保濕、提拉臉部護理，結合氧氣療法、膠原蛋白與超音波技術，對抗壓力與疲憊膚質。",
        benefits: ["鬆解壓力", "提升氣場"],
        image:`${import.meta.env.BASE_URL}images/spa1.jpg`
      },
      {
        name: "花植能量淨化SPA",
        time: "80 mins",
        price: "NT$ 2,800",
        steps: ["花草沐足", "背部經絡舒壓", "精油熱敷平衡"],
        content: ["{草本精華調理油}", "{有機去角質霜}", "{玫瑰石英按摩棒}"],
        description: "將天然花植能量導入身體經絡，平衡情緒與氣血循環。",
        benefits: ["舒緩自律神經", "活絡氣血"],
        image:`${import.meta.env.BASE_URL}images/spa2.jpg`
      },
      {
        name: "靜心花園冥想SPA",
        time: "100 mins",
        price: "NT$ 3,600",
        steps: ["淨香進場", "冥想呼吸", "淡雅花草熱石按摩"],
        content: ["{薰衣草精油}", "{洋甘菊暖石}", "{心輪音頻療癒}"],
        description: "融合芳療與音療，打造內外合一的靜心療癒空間。",
        benefits: ["深度放鬆", "舒緩焦慮"],
        image:`${import.meta.env.BASE_URL}images/spa3.jpg`
      }
    ]
  },
  {
    category: "礦石能量療癒SPA",
    treatments: [
      {
        name: "水晶能量平衡SPA",
        time: "90 mins",
        price: "NT$ 3,400",
        steps: ["香氛入浴", "礦石熱石背部按摩", "能量場淨化"],
        content: ["{紫水晶按摩棒}", "{黑曜石導引油}", "{岩鹽燈照療}"],
        description: "運用天然水晶與熱石技法，導引負能量並平衡脈輪能場。",
        benefits: ["提升正能量", "清理疲勞"],
        image:`${import.meta.env.BASE_URL}images/spa4.jpg`
      },
      {
        name: "金礦豐盈祝福SPA",
        time: "80 mins",
        price: "NT$ 3,800",
        steps: ["靜心洗禮", "黃金按摩油身體按摩", "肌膚金膜敷體"],
        content: ["{24K黃金油}", "{金箔鎖水精華}", "{微金膜包裹療法}"],
        description: "金元素象徵豐盛與修護，打造肌膚與能量雙重豐盈。",
        benefits: ["滋養皮膚", "提升自信磁場"],
        image:`${import.meta.env.BASE_URL}images/spa5.jpg`
      },
      {
        name: "靈石脈輪平衡SPA",
        time: "100 mins",
        price: "NT$ 3,500",
        steps: ["彩虹石擺放", "靜心呼吸", "脈輪油引導按摩"],
        content: ["{七彩脈輪精油}", "{能量石引導棒}", "{聲頻療癒碗}"],
        description: "藉由脈輪系統清理與調整，重塑內在與外在的平衡。",
        benefits: ["能量整合", "舒壓釋放"],
        image:`${import.meta.env.BASE_URL}images/spa6.jpg`
      }
    ]
  },
  {
    category: "草本芳香調理SPA",
    treatments: [
      {
        name: "東方草本經絡SPA",
        time: "90 mins",
        price: "NT$ 3,000",
        steps: ["草本沐足", "背部刮痧", "全身經絡按摩"],
        content: ["{艾草熱敷包}", "{迷迭香舒壓油}", "{草本精油拔罐}"],
        description: "透過傳統東方手技與草本熱敷，疏通氣血、排寒祛濕。",
        benefits: ["經絡疏通", "強化體質"],
        image:`${import.meta.env.BASE_URL}images/spa7.jpg`
      },
      {
        name: "雨林植物療癒SPA",
        time: "85 mins",
        price: "NT$ 2,900",
        steps: ["淨化噴霧", "深林香氣塗敷", "綠植熱布包敷身"],
        content: ["{尤加利精油}", "{綠茶酵素精華}", "{雨林植萃熱膜}"],
        description: "融合熱帶植物能量與濕熱療癒，修復都市疲憊肌。",
        benefits: ["消腫排毒", "補氣回春"],
        image:`${import.meta.env.BASE_URL}images/spa8.jpg`
      },
      {
        name: "植香脊椎調理SPA",
        time: "80 mins",
        price: "NT$ 2,800",
        steps: ["脊柱精油畫線", "滾珠深層按摩", "熱布熱敷"],
        content: ["{百里香肌肉舒緩油}", "{香蜂草滾珠棒}", "{草本蒸氣毯}"],
        description: "針對脊椎與肩頸疲勞設計，專注於肌肉修復與神經放鬆。",
        benefits: ["舒緩緊繃", "重啟體力"],
        image:`${import.meta.env.BASE_URL}images/spa9.jpg`
      }
    ]
  },
  {
    category: "靜境身心療癒SPA",
    treatments: [
      {
        name: "森林深層靜心SPA",
        time: "90 mins",
        price: "NT$ 3,200",
        steps: ["森林香氛入場", "深層冥想引導", "草本背部療癒按摩"],
        content: ["{杉木精油塗抹}", "{身心同步呼吸療法}", "{森林音頻包圍}"],
        description: "結合沉靜森林音景與植物香氛，創造如走入森林般的心靈淨化儀式。",
        benefits: ["深層放鬆", "釋放焦慮"],
        image:`${import.meta.env.BASE_URL}images/spa10.jpg`
      },
      {
        name: "五行漢方養生SPA",
        time: "85 mins",
        price: "NT$ 3,000",
        steps: ["中草藥沐足", "五行精油穴位按摩", "暖宮艾灸調理"],
        content: ["{艾草暖敷}", "{五行能量油}", "{拔罐調理}"],
        description: "融合中醫五行理論，透過不同草本與經絡調節達到身體能量平衡。",
        benefits: ["經絡疏通", "改善體質"],
        image:`${import.meta.env.BASE_URL}images/spa11.jpg`
      },
      {
        name: "溫感泥灸療程",
        time: "80 mins",
        price: "NT$ 2,800",
        steps: ["草本塗抹", "溫泥敷背", "熱石包敷脊椎"],
        content: ["{礦泥熱敷}", "{艾草身體膜}", "{熱石脊椎鎮靜療法}"],
        description: "運用溫熱礦泥釋放深層壓力，有效舒緩寒濕與肩頸緊繃。",
        benefits: ["排寒祛濕", "促進循環"],
        image:`${import.meta.env.BASE_URL}images/spa12.jpg`
      }
    ]
  },
  {
    category: "沉浸式水境療癒SPA",
    treatments: [
      {
        name: "花浴淨化儀式",
        time: "75 mins",
        price: "NT$ 2,600",
        steps: ["流水音場冥想", "手工花瓣浴", "香氛頭肩按摩"],
        content: ["{玫瑰花瓣浴}", "{依蘭香氣淨化}", "{水晶香氛油}"],
        description: "運用玫瑰、茉莉與香氣結合，從頭至腳釋放情緒與壓力，為靈魂洗滌。",
        benefits: ["情緒釋放", "提升女性能量"],
        image:`${import.meta.env.BASE_URL}images/spa13.jpg`
      },
      {
        name: "水氧光感SPA",
        time: "60 mins",
        price: "NT$ 2,500",
        steps: ["淨化噴霧", "深林香氣塗敷", "綠植熱布包敷身"],
        content: ["{尤加利精油}", "{綠茶酵素精華}", "{雨林植萃熱膜}"],
        description: "融合熱帶植物能量與濕熱療癒，修復都市疲憊肌。",
        benefits: ["消腫排毒", "補氣回春"],
        image:`${import.meta.env.BASE_URL}images/spa14.jpg`
      },
      {
        name: "香氛泡浴+身體滋養",
        time: "85 mins",
        price: "NT$ 2,800",
        steps: ["水療精油泡浴", "磨砂去角質", "深層潤膚敷體"],
        content: ["{洋甘菊泡浴}", "{海鹽磨砂}", "{乳木果體膜}"],
        description: "全身水療與滋養同步，泡浴過後進行深層潤膚，肌膚即刻柔嫩光滑。",
        benefits: ["去角質", "美體滋養"],
        image:`${import.meta.env.BASE_URL}images/spa15.jpg`
      }
    ]
  }
];

export default spaTreatmentsData;
