export const useCommonStore = defineStore('common', () => {
  const modalText = ref('')

  return {
    modalText,
  }
})
