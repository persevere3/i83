<style lang="scss" scoped>
  @import "@/styles/pay.scss";
</style>

<template>
  <div class="pay">
    <div class="header">
      <div class="logo"> <img src="/img/logo.png" alt=""> </div>
      <div class="title"> 請選擇結帳方式 </div>
    </div>
    <div class="methods">
      <ul>
        <li>
          <img src="/img/line.png" alt="">
        </li>
        <li>
          <img src="/img/jko.png" alt="">
        </li>
        <li @click="pay">
          <img src="/img/cash.png" alt="">
          <div class="text"> 現金支付 </div>
        </li>
        <li>
          <div class="back"> <nuxt-link to="/list"> 繼續點餐 </nuxt-link> </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
  let { modalText } = storeToRefs(useCommonStore())
  let { cartItems } = storeToRefs(useCartStore())

  function pay () {
    modalText.value = '您選擇現金支付 請至櫃台結帳';
    cartItems.value.splice(0, cartItems.value.length)
    useRouter().push('/')
  }
</script>