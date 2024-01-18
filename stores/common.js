export const useCommonStore = defineStore('common', () => {
  const tableInfo = ref({})
  const modalText = ref('')

  return {
    tableInfo,
    modalText,
  }
})
