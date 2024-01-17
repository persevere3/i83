<style lang="scss" scoped>
  @import "@/styles/spec.scss";
</style>

<template>
  <div class="spec">
    <div class="back" v-if="isAddSpec"> <nuxt-link to="/list"> <span> &lt; </span> 返回菜單 </nuxt-link> </div>
    <div class="back" v-else> <nuxt-link to="/cart"> <span> &lt; </span> 返回訂單 </nuxt-link> </div>

    <div class="logo"> <img src="/img/logo.png" alt=""> </div>
    <div class="img"> 
      <img :src="meal.image" alt="">
    </div>
    <div class="info" v-if="meal.id">
      <div class="name"> {{ meal.mealName }} </div>
      <div class="origin" v-if="meal.origin"> 肉品原產地 : {{ meal.origin }} </div>
      <div class="content">
        {{ meal.mealTextList.join(' | ') }}
      </div>
      <div class="price"> $ {{ meal.price }} </div>
    </div>
    <div class="options">
      <ul>
        <li v-for="item in meal.selectList" :key="item.id"
          :class="{cancelBorder : item.min == 0}"
        >
          <div class="name_notice"> 
            <div class="name"> {{ item.selectName }}選擇 </div>
            <div class="notice">
              <div v-if="item.min === item.max"> 請選擇 {{ item.max }} 個 </div>
              <div v-else> 請選擇 <span> {{ item.min }} ~ {{ item.max }} </span> 個 </div>
            </div>
          </div>
          
          <div class="optionList">
            <ul>
              <li v-for="item2 in item.showOptionList" :key="item2" @click="select(item, item2)"> 
                <div class="icon" :class="{active : item.activeOptionList.indexOf(item2) > -1}"> </div>
                {{ item2 }}
              </li>
            </ul>
          </div>
        </li>

        <li class="note">
          <div class="name"> 餐點備註 </div>
          <div class="notice"> 請體諒店家製餐恐有其限制，未符合期待還請多包容哦！ </div>
          <textarea v-model="note" rows="3" placeholder="例：蛋全熟"></textarea>
        </li>
      </ul>
    </div>
    <div class="number_confirm">
      <div class="number">
        <div class="icon" @click="count > 0 ? count-- : ''"> - </div>
        {{ count }}
        <div class="icon" @click="count++"> + </div>
      </div>
      <div v-if="isAddSpec" class="confirm" @click="add" :class="{ active : isValid }">
        確定加入訂單
      </div>
      <div v-else class="confirm" @click="update" :class="{ active : isValid }">
        確定修改訂單
      </div>
    </div>
  </div>
</template>

<script setup>
  let { categoryMeals } = storeToRefs(useMealsStore())
  let { getCategoryMealData } = useMealsStore()
  getCategoryMealData()

  let { id } = useRoute().params
  const isAddSpec = useRoute().fullPath.indexOf('spec-add') > -1 ? true : false 

  let { modalText } = storeToRefs(useCommonStore())
  
  let { cartItems } = storeToRefs(useCartStore())
  const note = ref('')
  const count = ref(1)

  // isAddSpec: true => add(categoryMeal取資訊)，false => update(cartItems取資訊)
  let meal = ref({})
  watch(categoryMeals, () => {
    if(categoryMeals.value.length) {
      if(isAddSpec) {
        categoryMeals.value.forEach(item => {
          item.products.forEach(item2 => {
            if(item2.id == id) {
              meal.value = JSON.parse(JSON.stringify(item2))
            }
          })
        })
      } else {
        meal.value = cartItems.value.find((item) => item.id == id)
        note.value = meal.value.note
        count.value = meal.value.count
      }
    }
  })

  function select(select, item) {
    const index = select.activeOptionList.indexOf(item)
    // +
    if(index < 0) {
      select.activeOptionList.push(item)
      while(select.activeOptionList.length > select.max) {
        select.activeOptionList.shift()
      }
    }
    // -
    else select.activeOptionList.splice(index, 1)
  }

  // 
  const isValid = computed(() => {
    let isValid = true
    if(!meal.value.id) return false
    meal.value.selectList.forEach(item => {
      const activeOptionLength = item.activeOptionList.length
      if(activeOptionLength > item.max || activeOptionLength < item.min) isValid = false
    })

    if(count.value < 1) return false
    
    return isValid
  })

  //
  function add() {
    if(!isValid.value) return
    
    let addCartMeal = JSON.parse(JSON.stringify(meal.value))
    addCartMeal.note = note.value
    addCartMeal.count = count.value

    cartItems.value.push(addCartMeal)
    modalText.value = '已為您添加餐點'
    useRouter().push('/list')
  }

  function update() {
    if(!isValid.value) return

    meal.value.note = note.value
    meal.value.count = count.value

    let index = cartItems.value.findIndex((cartItem) => cartItem.id === id)
    index > -1 ? cartItems.value[index] = meal.value : null
    modalText.value = '已為您修改餐點'
    useRouter().push('/cart')
  }
</script>