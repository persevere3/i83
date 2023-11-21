<style lang="scss" scoped>
  @import "@/styles/modal.scss";
</style>

<template>
  <div class="modal_background">
    <div class="modal">
      <div class="logo"> <img src="/img/logo.png" alt=""> </div>
      
      <div class="modal_text"> {{ modalText }} </div>

      <div class="modal_time"> 
        <div class="close" @click.stop="modalText=''"> X </div>
        {{ timer }} 秒後自動消失 
      </div>
    </div>
  </div>
</template>

<script setup>
  let { modalText } = storeToRefs(useCommonStore())

  const timer = ref(null)

  let interval
  onMounted(() => {
    timer.value = 5
    interval = setInterval(() => {
      timer.value --
      if(timer.value < 1) modalText.value = ''
    }, 1000)
  })

  onUnmounted(() => {
    clearInterval(interval)
  })
</script>