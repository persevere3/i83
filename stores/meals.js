import * as Category from "@/apis/category"
import * as Meals from "@/apis/meals"

export const useMealsStore = defineStore('meals', () => {
  const { tableInfo } = storeToRefs(useCommonStore())
  
  const categoryList = ref([])
  const activeCategory = ref({})

  const mealList = ref([])

  const getCategoryData = () => {
    Category.getDataApi(tableInfo.value.storeId).then((res) => {
      categoryList.value = res.data
      categoryList.value.unshift({
        id: 0,
        name: "全部餐點"
      })
      if(!activeCategory.value.id) activeCategory.value = JSON.parse(JSON.stringify(categoryList.value[0]))
    })
  }

  const getMealData = () => {
    Meals.getDataApi(tableInfo.value.storeId).then((res) => {
      let data = res.data
      data = data.filter(item => item.enable)
      data.forEach(item => {
        item.image = 'https://preview.uniqcarttest.com' + item.image
        item.selectList.forEach(item2 => {
          item2.activeOptionList = []
        })
      })
      mealList.value = data
    })
  }

  const getCategoryMealData = () => {
    getCategoryData()
    getMealData()
  }

  return {
    categoryList,
    activeCategory,
    mealList,
    getCategoryMealData
  }
})
