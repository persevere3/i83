import * as Category from "@/apis/category"

export const useMealsStore = defineStore('meals', () => {
  const categoryMeals = ref([])
  const activeCategory = ref({})

  const getCategoryMealData = () => {
    Category.getDataApi().then((res) => {
      res.data.forEach(item => {
        item.products.forEach(item2 => {
          item2.image = 'http://192.168.6.239' + item2.image
          item2.mealTextList = JSON.parse(item2.mealTextList)
          item2.selectList = JSON.parse(item2.selectList).map(item3 => {
            return {
              id: item3.Id,
              selectName: item3.SelectName,
              showOptionList: item3.ShowOptionList,
              activeOptionList: [],
              max: item3.Max,
              min: item3.Min,
            }
          })
        })
      })
      categoryMeals.value = res.data
      activeCategory.value = categoryMeals.value[1]
    })
  }

  return {
    categoryMeals,
    activeCategory,
    getCategoryMealData
  }
})
