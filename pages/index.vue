<style lang="scss" scoped>
  @import "@/styles/index.scss";
</style>

<template>
  <div class="index">
    <div class="top_img">
      <img src="/img/index_1.png" alt="">
      <img src="/img/index_2.png" alt="">
      <img src="/img/index_3.png" alt="">
    </div>

    <div class="logo"> <img src="/img/logo.png" alt=""> </div>
    <div class="welcome_text"> WELCOME TO i83 </div>
    <div class="confirm_text"> 請確認桌號是否正確 </div>
    <div class="table_number"> 03 </div>
    <div class="confirm"> <nuxt-link to="/list"> 開始點餐 </nuxt-link> </div>

    <div class="notice">
      <ul>
        <li>
          <div class="title"> 【注意事項】 </div>
          <ul>
            <li> 所有套餐皆包含自助吧,每人最低消費90元,不可合併算,未上小學的小朋友免低消! </li>
            <li> 單點炸物不包含自助吧,若要使用自助吧,需另外加點。 </li>
            <li> 所有餐點皆現點現做,點餐順序不代表出餐順序,為維護品質,假日及用餐尖峰時段請耐心等候!! </li>
            <li> 用餐限時90分鐘,造成不便敬請見諒! </li>
            <li> 優惠活動以現場為主,優惠不得合併使用,本公司保有修改或取消活動的權利。 </li>
            <li> 為您服務是我們的榮幸,忙碌餘忘了微笑,敬請見諒、所有餐點不再加收服務費i83感謝您的支持! </li>
          </ul>
        </li>
        <li>
          <div class="divider_img">
            <img src="/img/index_4.png" alt=""> 
          </div> 
        </li>
        <li>
          <div class="title"> 【當月壽星優惠】 </div>
          <ul>
            <li>
              <div> 當月壽星(含)四人同行 </div>
              <div> (一位壽星+三位非壽星,多人則以此類推) </div>
              <div> 壽星即可免費享用240元以内餐點乙份 </div>
            </li>
            <li>
              <div> 需出示本人有照片證件 </div>
              <div> 
                並在google地圖上提供一則五星評論
                <span class="icon">
                  <img src="/img/icon_2.png" alt="">
                </span>
              </div>
            </li>
            <li class="right">
              i83祝您生日快樂
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
  
</script>