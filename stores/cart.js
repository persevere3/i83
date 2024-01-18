export const useCartStore = defineStore('cart', () => {
  const cartItems = ref([])

  const totalPrice = computed(() => {
    return cartItems.value.reduce((accumulator, currentValue) => accumulator + currentValue.price * currentValue.count, 0);
  })

  return {
    cartItems,
    totalPrice
  }  
})
