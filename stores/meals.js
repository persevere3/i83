export const useMealsStore = defineStore('meals', () => {
  // category
  const categories = reactive([
    {
      name: '人氣精選',
      text: '大家都點這些。金賀呷！手刀點起來'
    },
    {
      name: '單打獨鬥區',
      text: '附義大利麵、蛋、蔬菜'
    },
    {
      name: '咖哩飯',
      text: '附飯、蔬菜、獨家特調醬料'
    },
    {
      name: '分進合擊區',
      text: '附義大利麵、蛋、蔬菜'
    },
    {
      name: '米食區',
      text: '附飯、蛋、黃金泡菜、蔬菜、獨家特調醬料'
    },
    {
      name: '游擊區',
      text: '附飯、蛋、黃金泡菜、蔬菜'
    },
  ])
  const activeCategory = ref(categories[0])


  const options_obj = reactive({
    'sauce': {
      name: '醬料',
      optionList: ['黑胡椒醬', '蘑菇醬', '綜合醬', '不加醬'],
      number: 1,
      required: true
    },
    'doneness': {
      name: '熟度',
      optionList: ['牛-三分熟', '牛-五分熟', '牛-七分熟', '牛-全熟'],
      number: 1,
      required: true 
    },
    'meat1': {
      name: '肉類',
      optionList: ['豬', '雞', '羊', '鱈魚'],
      number: 1,
      required: true
    },
    'meat2': {
      name: '肉類',
      optionList: ['沙朗牛', '豬', '雞', '羊', '鱈魚'],
      number: 2,
      required: true
    },
    'customization': {
      name: '客製化',
      optionList: ['麵換蛋', '麵換菜'],
      number: 1,
      required: false
    }
  })

  const meals = reactive([
    // 單打獨鬥
    {
      categories: ['單打獨鬥區'],
      popularity: false,
      name: '沙朗牛排5oz',
      origin: '巴拉圭',
      options: [
        {
          category: 'sauce',
          activeOption: '', 
        },
        {
          category: 'doneness',
          activeOption: '' 
        },
        {
          category: 'customization',
          activeOption: ''
        }
      ],
      content: [
        '醬料擇一',
        '含義大利麵、蛋、蔬菜'
      ],
      price: 200,
    },
    {
      categories: ['單打獨鬥區'],
      popularity: true,
      name: '厚切里肌豬排',
      origin: '台灣豬',
      options: [
        {
          category: 'sauce',
          activeOption: '', 
        },
        {
          category: 'customization',
          activeOption: ''
        }
      ],
      content: [
        '醬料擇一',
        '含義大利麵、蛋、蔬菜'
      ],
      price: 220,
    },
    {
      categories: ['單打獨鬥區', '分進合擊區'],
      popularity: true,
      name: '海陸雙拼',
      origin: '',
      options: [
        {
          category: 'sauce',
          activeOption: '', 
        },
        {
          // 擇二，activeOption 是 []
          category: 'meat2',
          activeOption: [],
        },
        // 肉類選牛
        // {
        //   category: 'doneness',
        //   activeOption: '',
        // },
        {
          category: 'customization',
          activeOption: ''
        }
      ],
      content: [
        '【沙朗牛/豬/雞/羊/鱈魚】擇二',
        '醬料擇一',
        '含義大利麵、蛋、蔬菜'
      ],
      price: 300,
    },
    {
      categories: ['單打獨鬥區'],
      popularity: true,
      name: '黃金雞腿排',
      origin: '美國',
      options: [
        {
          category: 'sauce',
          activeOption: '', 
        },
        {
          category: 'customization',
          activeOption: ''
        }
      ],
      content: [
        '醬料擇一',
        '含義大利麵、蛋、蔬菜'
      ],
      price: 220,
    },
    {
      categories: ['單打獨鬥區'],
      popularity: false,
      name: '大比目魚排',
      origin: '冰島',
      options: [
        {
          category: 'sauce',
          activeOption: '', 
        },
        {
          category: 'customization',
          activeOption: ''
        }
      ],
      content: [
        '醬料擇一',
        '含義大利麵、蛋、蔬菜'
      ],
      price: 220,
    },
    {
      categories: ['單打獨鬥區'],
      popularity: true,
      name: '厚切沙朗6oz',
      origin: '巴拉圭',
      options: [
        {
          category: 'sauce',
          activeOption: '', 
        },
        {
          category: 'doneness',
          activeOption: '', 
        },
        {
          category: 'customization',
          activeOption: ''
        }
      ],
      content: [
        '醬料擇一',
        '含義大利麵、蛋、蔬菜'
      ],
      price: 240,
    },
    {
      categories: ['單打獨鬥區'],
      popularity: false,
      name: '鮭魚排',
      origin: '智利',
      options: [
        {
          category: 'sauce',
          activeOption: '', 
        },
        {
          category: 'customization',
          activeOption: ''
        }
      ],
      content: [
        '醬料擇一',
        '含義大利麵、蛋、蔬菜'
      ],
      price: 280,
    },
    {
      categories: ['單打獨鬥區'],
      popularity: true,
      name: '雪花沙朗8oz',
      origin: '紐西蘭',
      options: [
        {
          category: 'sauce',
          activeOption: '', 
        },
        {
          category: 'doneness',
          activeOption: '', 
        },
        {
          category: 'customization',
          activeOption: ''
        }
      ],
      content: [
        '醬料擇一',
        '含義大利麵、蛋、蔬菜'
      ],
      price: 280,
    },
    {
      categories: ['單打獨鬥區'],
      popularity: true,
      name: '安格斯牛排10oz',
      origin: '紐西蘭',
      options: [
        {
          category: 'sauce',
          activeOption: '', 
        },
        {
          category: 'doneness',
          activeOption: '', 
        },
        {
          category: 'customization',
          activeOption: ''
        }
      ],
      content: [
        '醬料擇一',
        '含義大利麵、蛋、蔬菜'
      ],
      price: 350,
    },
    {
      categories: ['單打獨鬥區'],
      popularity: false,
      name: '菲力牛排8oz',
      origin: '紐西蘭',
      options: [
        {
          category: 'sauce',
          activeOption: '', 
        },
        {
          category: 'doneness',
          activeOption: '', 
        },
        {
          category: 'customization',
          activeOption: ''
        }
      ],
      content: [
        '醬料擇一',
        '含義大利麵、蛋、蔬菜'
      ],
      price: 380,
    },
    {
      categories: ['單打獨鬥區'],
      popularity: false,
      name: '帶骨牛小排8oz',
      origin: '紐西蘭',
      options: [
        {
          category: 'sauce',
          activeOption: '', 
        },
        {
          category: 'doneness',
          activeOption: '', 
        },
        {
          category: 'customization',
          activeOption: ''
        }
      ],
      content: [
        '醬料擇一',
        '含義大利麵、蛋、蔬菜'
      ],
      price: 480,
    },
    {
      categories: ['單打獨鬥區'],
      popularity: false,
      name: '法式羊排',
      origin: '',
      options: [
        {
          category: 'sauce',
          activeOption: '', 
        },
        {
          category: 'customization',
          activeOption: ''
        }
      ],
      content: [
        '醬料擇一',
        '含義大利麵、蛋、蔬菜'
      ],
      price: 260,
    },
    {
      categories: ['單打獨鬥區'],
      popularity: false,
      name: '歡樂自助吧',
      origin: '',
      options: [],
      content: [
        '濃湯、飲料、麵包、冰淇淋等'
      ],
      price: 100,
    },

    // 咖哩飯
    {
      categories: ['咖哩飯'],
      popularity: false,
      name: '炸豬排咖哩飯',
      origin: '',
      options: [

      ],
      content: [
        '淋上咖哩醬汁的豬排飯，彼此交織著美味的饗宴。(此描述僅供參考)',
        '含飯、蔬菜、小菜'
      ],
      price: 240,
    },
    {
      categories: ['咖哩飯'],
      popularity: false,
      name: '炸雞排咖哩飯',
      origin: '',
      options: [

      ],
      content: [
        '外酥內嫩的雞排，搭配香氣十足的咖哩醬，美味無比！(此描述僅供參考)',
        '含飯、蔬菜、小菜'
      ],
      price: 240,
    },
    {
      categories: ['咖哩飯'],
      popularity: false,
      name: '唐揚雞咖哩飯',
      origin: '',
      options: [

      ],
      content: [
        '濃郁的咖哩醬汁，搭配香酥脆的雞肉，必吃的美味料理。(此描述僅供參考)',
        '含飯、蔬菜、小菜'
      ],
      price: 250,
    },
    {
      categories: ['咖哩飯'],
      popularity: false,
      name: '起司可樂餅咖哩飯',
      origin: '',
      options: [

      ],
      content: [
        '含飯、蔬菜、小菜'
      ],
      price: 260,
    },
    {
      categories: ['咖哩飯'],
      popularity: false,
      name: '鮮蝦可樂餅咖哩飯',
      origin: '',
      options: [

      ],
      content: [
        '含飯、蔬菜、小菜'
      ],
      price: 260,
    },

    // 分進合擊
    {
      categories: ['分進合擊區'],
      popularity: false,
      name: '厚切沙朗雙拼',
      origin: '',
      options: [
        {
          category: 'sauce',
          activeOption: '', 
        },
        {
          category: 'meat1',
          activeOption: '',
        },
        {
          category: 'doneness',
          activeOption: '', 
        },
        {
          category: 'customization',
          activeOption: ''
        }
      ],
      content: [
        '厚切沙朗、【豬/雞/羊/鱈魚】擇一',
        '醬料擇一',
        '含義大利麵、蛋、蔬菜'
      ],
      price: 340,
    },
    {
      categories: ['分進合擊區'],
      popularity: false,
      name: '帶骨牛小排雙拼',
      origin: '',
      options: [
        {
          category: 'sauce',
          activeOption: '', 
        },
        {
          category: 'meat1',
          activeOption: '',
        },
        {
          category: 'doneness',
          activeOption: '', 
        },
        {
          category: 'customization',
          activeOption: ''
        }
      ],
      content: [
        '帶骨牛小排(4盎司，1片，建議全熟)、【豬/雞/羊/鱈魚】擇一',
        '醬料擇一',
        '含義大利麵、蛋、蔬菜'
      ],
      price: 420,
    },
    {
      categories: ['分進合擊區'],
      popularity: false,
      name: '頂級沙朗16oz',
      origin: '紐西蘭',
      options: [

      ],
      content: [
        '醬料擇一',
        '含義大利麵、蛋、蔬菜'
      ],
      price: 500,
    },

    // 米食
    {
      categories: ['米食區'],
      popularity: false,
      name: '照燒牛肉飯',
      origin: '美國',
      options: [

      ],
      content: [
        '含溏心蛋、蔬菜、小菜'
      ],
      price: 220,
    },
    {
      categories: ['米食區'],
      popularity: false,
      name: '照燒豬肉飯',
      origin: '台灣-豬五花，西班牙-梅花豬',
      options: [

      ],
      content: [
        '含溏心蛋、蔬菜、小菜'
      ],
      price: 200,
    },
    {
      categories: ['米食區'],
      popularity: false,
      name: '照燒牛排飯',
      origin: '巴拉圭',
      options: [

      ],
      content: [
        '含溏心蛋、蔬菜、小菜'
      ],
      price: 200,
    },
    {
      categories: ['米食區'],
      popularity: false,
      name: '照燒豬排飯',
      origin: '台灣',
      options: [

      ],
      content: [
        '含溏心蛋、蔬菜、小菜'
      ],
      price: 220,
    },
    {
      categories: ['米食區'],
      popularity: false,
      name: '照燒雞腿飯',
      origin: '美國',
      options: [

      ],
      content: [
        '含溏心蛋、蔬菜、小菜'
      ],
      price: 220,
    },

    // 游擊
    {
      categories: ['游擊區'],
      popularity: false,
      name: '酥炸脆薯',
      origin: '',
      options: [

      ],
      content: [
        '外皮黃金酥脆、內裡紮實綿密，令人無法抗拒的美妙小點。(此描述僅供參考)'
      ],
      price: 90,
    },
    {
      categories: ['游擊區'],
      popularity: false,
      name: '檸檬雞柳條',
      origin: '',
      options: [

      ],
      content: [
        '口感柔軟，肉質細嫩，每一口都能感受到食材的細膩。(此描述僅供參考)'
      ],
      price: 90,
    },
    {
      categories: ['游擊區'],
      popularity: false,
      name: '洋蔥圈',
      origin: '',
      options: [

      ],
      content: [
        '外皮酥脆、內裡洋蔥的香甜多汁，絕對滿足您的味蕾！(此描述僅供參考)'
      ],
      price: 90,
    },
    {
      categories: ['游擊區'],
      popularity: false,
      name: '炸雞塊',
      origin: '',
      options: [

      ],
      content: [
        '穿上黃金外衣就知道大事不妙了，香酥口感直接征服您。(此描述僅供參考)'
      ],
      price: 90,
    },
    {
      categories: ['游擊區'],
      popularity: false,
      name: '魷魚圈',
      origin: '',
      options: [

      ],
      content: [
        '魷魚的嚼勁十足，搭配著微鹹的風味，十分開胃。(此描述僅供參考)'
      ],
      price: 90,
    },
    {
      categories: ['游擊區'],
      popularity: false,
      name: '小拼盤',
      origin: '',
      options: [

      ],
      content: [
        
      ],
      price: 150,
    },
    {
      categories: ['游擊區'],
      popularity: false,
      name: '大拼盤',
      origin: '',
      options: [

      ],
      content: [
        
      ],
      price: 250,
    },
  ])
  meals.forEach(meal => {
    meal.popularity ? meal.categories.push('人氣精選') : ''
  })

  return {
    categories,
    activeCategory,
    options_obj,
    meals,
  }
})
