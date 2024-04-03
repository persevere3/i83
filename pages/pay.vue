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
        <li @click="pay('1')" v-if="lineMethod.enabled">
          <img src="/img/line.png" alt="">
        </li>
        <li @click="pay('2')" v-if="jkoMethod.enabled">
          <img src="/img/jko.png" alt="">
        </li>
        <li @click="pay('0')" v-if="cashMethod.enabled">
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
  import * as Order from "@/apis/order"

  let { tableInfo, modalText } = storeToRefs(useCommonStore())
  let { cartItems, totalPrice, mealCount } = storeToRefs(useCartStore())

  const channels = ref(tableInfo.value.payChannel)

  const cashMethod = ref(JSON.parse(JSON.stringify(channels.value.find((item) => item.channel === 0))))
  const lineMethod = ref(JSON.parse(JSON.stringify(channels.value.find((item) => item.channel === 1))))
  const jkoMethod = ref(JSON.parse(JSON.stringify(channels.value.find((item) => item.channel === 2))))
  
  let isPaying = false 

  function pay (payMethod) {
    if(isPaying) return
    isPaying = true

    if(!tableInfo.value.tableId || !tableInfo.value.orderToken ) {
      modalText.value = '請先掃描 QR-code'
      return
    }

    if(tableInfo.value.birthdayBonus > 0) {
      if(mealCount.value < 4) {
        modalText.value = `目前已經點了${mealCount.value}份主餐，4份主餐以上才能使用生日優惠`;
        return
      }
    }

    const data = {
      tableId: tableInfo.value.tableId,
      token: tableInfo.value.orderToken,

      storeName: tableInfo.value.storeName,
      tableNumber: tableInfo.value.tableNumber,
      payMethod,
      birthdayBonus: tableInfo.value.birthdayBonus,
      total: totalPrice.value,
      mealList: cartItems.value.map(item => {
        return {
          id: item.id,
          mealName: item.mealName,
          price: item.price,
          originPrice: item.price,
          count: item.count,
          selectList: item.selectList,
          mainMeal: item.mainMeal,
          note: item.note
        }
      })
    }
    Order.postDataApi(data).then((res) => {
      isPaying = false

      cartItems.value = []
      if(payMethod === "0") {
        modalText.value = '您選擇現金支付 請至櫃台結帳';
        useRouter().push(`/?tableId=${tableInfo.value.tableId}`)
      }
      else if(payMethod === "1") {
        location.href = res.data.info.paymentUrl.web
      } else if(payMethod === "2") {
        location.href = res.data.result_object.payment_url
      }
    }).catch((error) => {
      modalText.value = error.response.data.detail;
    })
  }
</script>