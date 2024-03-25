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
        <li v-for="(item, index) in cartItems" :key="`${index}-${item.id}`">
          <div class="close" @click="deleteCartItem(item)"> <img src="/img/close.png" alt=""> </div>
          <div class="info">
            <div class="name"> {{ item.mealName }} </div>
            <div class="optionList">
              <ul>
                <template v-for="item2 in item.selectList" :key="item2.id">
                  <li v-for="item3 in item2.activeOptionList" :key="item3"> {{ item3.title }} </li>
                </template>
              </ul>
            </div>

            <div class="comment"> {{ item.note }} </div>

            <div class="price_update">
              <div class="price">
                <div> ${{ cartItemsUnitPriceList[index] }} x {{ item.count }}  </div>
              
              </div>
              <div class="update"> 
                <nuxt-link :to="`/spec-update/${item.id}`"> 修改訂單 </nuxt-link>
              </div>
            </div>
          </div>
          <div class="img"> 
            <img :src="item.image" alt="">
          </div>
        </li>
      </ul>
    </div>

    <div class="total_price" v-if="birthBonus">
      <div class="text"> 生日優惠:  $ {{ birthBonus }}  </div> 
    </div>

    <div class="total_price">
      <div class="text"> 共計  $ {{ totalPrice }}  </div> 
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
  let { cartItems, cartItemsUnitPriceList, totalPrice, birthBonus } = storeToRefs(useCartStore())

  function deleteCartItem(item) {
    let index = cartItems.value.findIndex(cartItem => cartItem.id === item.id)
    cartItems.value.splice(index, 1)
  }
</script>