<style lang="scss" scoped>
  @import "@/styles/cart.scss";
</style>

<template>
  <div class="cart">
    <div class="header">
      <div class="logo"> <img src="/img/logo.png" alt=""> </div>
      <div class="title"> 已點餐點 </div>
      <div class="img"> <img src="/img/cart_1.png" alt=""> </div>
    </div>

    <div class="cartItems">
      <ul>
        <li v-for="item in cartItems" :key="item">
          <div class="close" @click="deleteCartItem(item)"> <img src="/img/close.png" alt=""> </div>
          <div class="info">
            <div class="name"> {{ item.name }} </div>
            <div class="optionList">
              <ul>
                <li v-for="option in item.options" :key="option" v-show="option.activeOption">
                  <template v-if="options_obj[option.category].number < 2"> {{ option.activeOption }} </template>
                  <template v-else> {{ option.activeOption.join(' ') }} </template>
                </li>
              </ul>
            </div>

            <div class="comment"> {{ item.comment }} </div>

            <div class="price_update">
              <div class="price"> ${{ item.price }} x {{ item.number }} </div>
              <div class="update"> 
                <nuxt-link :to="`/spec-update/${item.id}`"> 修改訂單 </nuxt-link>
              </div>
            </div>
          </div>
          <div class="img" :style="{'background-image' : `url(/img/meals/${item.name}.jpg)`}"> </div>
        </li>
      </ul>
    </div>

    <div class="total_price">
      <div class="text"> 共計  $  {{ totalPrice }}  </div> 
    </div>

    <div class="button_group">
      <div class="button_confirm" v-if="cartItems.length">
        <nuxt-link to="/pay"> 送出訂單 </nuxt-link>
      </div>
      <div class="button_continue"> 
        <nuxt-link to="/list"> 繼續點餐 </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
  let { options_obj } = storeToRefs(useMealsStore())
  let { cartItems } = storeToRefs(useCartStore())

  const totalPrice = computed(() => {
    return cartItems.value.reduce((accumulator, currentValue) => accumulator + currentValue.price * currentValue.number, 0);
  })

  function deleteCartItem(item) {
    let index = cartItems.value.findIndex(cartItem => cartItem.id === item.id)
    cartItems.value.splice(index, 1)
  }
</script>