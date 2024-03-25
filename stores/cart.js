export const useCartStore = defineStore('cart', () => {
  const { tableInfo } = storeToRefs(useCommonStore())

  const cartItems = ref([])

  const cartItemsUnitPriceList = ref([])
  const totalPrice = computed(() => {
    let res = 0
    cartItemsUnitPriceList.value = [] 
    cartItems.value.forEach((cartItem, index) => {
      cartItemsUnitPriceList.value[index] = 0
      cartItem.selectList.forEach(select => {
        select.activeOptionList.forEach(option => {
          if(option.price > 0) {
            res += option.price * cartItem.count
            cartItemsUnitPriceList.value[index] += option.price
          }
        })
      })
      res += cartItem.price * cartItem.count
      cartItemsUnitPriceList.value[index] += cartItem.price
    })
    return res - birthBonus.value
  })

  const mealCount = ref(0)
  const birthBonus = computed(() => {  
    mealCount.value = cartItems.value.filter(item => item.mainMeal).reduce((accumulator, current) => accumulator += current.count, 0);
    let bonusCount = 0

    if (mealCount.value >= 4 && tableInfo.value.birthdayBonus > 0) { 
      bonusCount = mealCount.value / 4;
      bonusCount = tableInfo.value.birthdayBonus >= bonusCount ? bonusCount : tableInfo.value.birthdayBonus; 

      let priceList = []
      cartItems.value.forEach(item => {
        for(let i = 0; i < item.count; i++) {
          priceList.push(item.price)
        }
      })
      priceList.sort((a, b) => a.price - b.price)
      priceList = priceList.map(item => {
        return item > 240 ? 240 : item
      })

      let res = 0
      for(let i = 0; i < bonusCount; i++) {
        res += priceList[i]
      }

      return res 
    }

    return 0
  })

  return {
    cartItems,
    cartItemsUnitPriceList,
    totalPrice,
    mealCount,
    birthBonus
  }  
})
