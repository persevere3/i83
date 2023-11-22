<style lang="scss" scoped>
  @import "@/styles/spec.scss";
</style>

<template>
  <div class="spec">
    <div class="back" v-if="name"> <nuxt-link to="/list"> <span> &lt; </span> 返回菜單 </nuxt-link> </div>
    <div class="back" v-else> <nuxt-link to="/cart"> <span> &lt; </span> 返回訂單 </nuxt-link> </div>

    <div class="logo"> <img src="/img/logo.png" alt=""> </div>
    <div class="img" :style="{'background-image' : `url(/img/meals/${meal.name}.jpg)`}"> </div>
    <div class="info">
      <div class="name"> {{ meal.name }} </div>
      <div class="origin" v-if="meal.origin"> 肉品原產地 : {{ meal.origin }} </div>
      <div class="content">
        {{ meal.content.join(' | ') }}
      </div>
      <div class="price"> $ {{ meal.price }} </div>
    </div>
    <div class="options">
      <ul>
        <li v-for="option in meal.options" :key="option"
          :class="{cancelBorder : option.category === 'customization'}"
        >
          <div class="name_notice"> 
            <div class="name"> {{ options_obj[option.category].name }}選擇 </div>
            <div class="notice">
              <div> 請選擇 <span> {{ options_obj[option.category].number }} </span> 個 </div>
              <div> {{ options_obj[option.category].required ? '(必選)' : '(可不選擇)' }} </div>
            </div>
          </div>
          
          <div class="optionList">
            <ul>
              <li v-for="item in options_obj[option.category].optionList" :key="item" @click="select(option, item)"> 
                <div v-if="options_obj[option.category].number < 2" class="icon" :class="{active : item === option.activeOption}"> </div>
                <div v-else class="icon" :class="{active : option.activeOption.indexOf(item) > -1}"> </div>
                {{ item }}
              </li>
            </ul>
          </div>
        </li>

        <li class="comment">
          <div class="name"> 餐點備註 </div>
          <div class="notice"> 請體諒店家製餐恐有其限制，未符合期待還請多包容哦！ </div>
          <textarea v-model="comment" rows="3" placeholder="例：蛋全熟"></textarea>
        </li>
      </ul>
    </div>
    <div class="number_confirm">
      <div class="number">
        <div class="icon" @click="mealNumber > 0 ? mealNumber-- : ''"> - </div>
        {{ mealNumber }}
        <div class="icon" @click="mealNumber++"> + </div>
      </div>
      <div v-if="name" class="confirm" @click="add" :class="{ active : isValid }">
        確定加入訂單
      </div>
      <div v-else class="confirm" @click="update" :class="{ active : isValid }">
        確定修改訂單
      </div>
    </div>
  </div>
</template>

<script setup>
  let { name, id } = useRoute().params
  let { modalText } = storeToRefs(useCommonStore())
  let { options_obj, meals } = storeToRefs(useMealsStore())
  let { cartItems } = storeToRefs(useCartStore())

  // 有 name => add(meals取資訊)，沒有 name => update(cartItems取資訊)
  const meal = name ? meals.value.find((meal) => meal.name === name)
                    : reactive(JSON.parse(JSON.stringify(cartItems.value.find((cartItem) => cartItem.id == id))))

  function select(option, item) {
    // option擇1以下
    if(options_obj.value[option.category].number < 2) {
      item !== option.activeOption ? option.activeOption = item : option.activeOption = null 
    }
    // option擇2以上
    else {
      let index = option.activeOption.indexOf(item)
      // 已選 => 取消選擇
      if(index > -1) option.activeOption.splice(index, 1)
      else {
        // 已選擇的數目達上限 => return
        if(option.activeOption.length === options_obj.value[option.category].number) return
        else option.activeOption.push(item)
      }
    }
  }

  // meat2: 肉類選擇牛，增加熟度選項
  let meat2Option = meal.options.find((option) => option.category === 'meat2')
  meat2Option ? watch(meat2Option, (option) => {
    let isAddDoneness = false
    // option擇1以下
    if(options_obj.value[option.category].number < 2) {
      if(option.activeOption.indexOf('牛') > -1) isAddDoneness = true
    }
    // option擇2以上
    else {
      option.activeOption.forEach(item => {
        if(item.indexOf('牛') > -1) isAddDoneness = true
      })
    }

    // 增加或刪除 熟度選擇
    if(isAddDoneness) {
      let donenessOption = meal.options.find((option) => option.category === 'doneness')
      // 沒有熟度選擇，插入熟度選擇
      if(!donenessOption) {
        let index = meal.options.indexOf(meat2Option)
        meal.options.splice(index + 1, 0, {category: 'doneness', activeOption: ''})
      }
    }
    else {
      meal.options = meal.options.filter((option) => option.category !== 'doneness')
    }
  }) : null

  // 
  const comment = ref('')
  const mealNumber = ref(1)

  // 有 id => update(cartItems取資訊)
  if(id) {
    comment.value = meal.comment
    mealNumber.value = meal.number
  }

  // 
  const isValid = computed(() => {
    let isValid = true
    meal.options.forEach(item => {
      if(options_obj.value[item.category].required) {
        if(options_obj.value[item.category].number < 2) !item.activeOption ? isValid = false : ''
        else {
          item.activeOption.length !== options_obj.value[item.category].number ? isValid = false : ''
        }
      }
    });

    if(mealNumber.value < 1) isValid = false
    
    return isValid
  })

  //
  function add() {
    if(!isValid.value) return
    
    let addCartMeal = JSON.parse(JSON.stringify(meal))
    addCartMeal.id = new Date().getTime();
    addCartMeal.comment = comment.value
    addCartMeal.number = mealNumber.value

    // 疊加訂單???
    cartItems.value.push(addCartMeal)
    modalText.value = '已為您添加餐點'
    useRouter().push('/list')
  }

  function update() {
    if(!isValid.value) return

    meal.comment = comment.value
    meal.number = mealNumber.value

    let index = cartItems.value.findIndex((cartItem) => cartItem.id === meal.id)
    index > -1 ? cartItems.value[index] = meal : null
    modalText.value = '已為您修改餐點'
    useRouter().push('/cart')
  }
</script>