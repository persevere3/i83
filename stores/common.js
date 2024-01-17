export const useCommonStore = defineStore('common', () => {
  const tableNumber = ref('')
  const token = ref('')
  const modalText = ref('')

  return {
    tableNumber,
    token,
    modalText,
  }
})
