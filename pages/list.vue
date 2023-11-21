<style lang="scss" scoped>
  @import "@/styles/list.scss";
</style>

<template>
  <div class="list">
    <div class="top">
      <div class="categories">
        <ul>
          <li v-for="item in categories" :key="item" @click="selectCategory(item)">
            <img class="active_img" src="/img/logo.png" v-if="item === activeCategory" alt=""> 
            {{ item.name }} 
          </li>
        </ul>
      </div>

      <div class="text_order">
        <div class="active_category_text"> {{ activeCategory.text }} </div>
        <div class="check_order">
          <nuxt-link to="/cart">
            <div class="icon"> 
              <img src="/img/cart.png" alt=""> 
              <div class="number"> {{ cartItems.length }} </div>
            </div>
            查看訂單
          </nuxt-link> 
        </div> 
      </div>
    </div>

    <div class="meals">
      <ul>
        <li v-for="item in filterMeals" :key="item">
          <nuxt-link :to="`/spec-add/${item.name}`">  
            <div class="info">
              <div class="name_origin">
                <div class="name"> {{ item.name }}  </div>
                <div class="origin" v-if="item.origin"> 肉品原產地 : {{ item.origin }} </div>
              </div>
              
              <div class="content">
                <ul>
                  <li v-for="item2 in item.content" :key="item2">
                    {{ item2 }} 
                  </li>
                </ul> 
              </div>
              <div class="price"> $ {{ item.price }} </div>
            </div>
            <div class="img" :style="{'background-image' : `url(/img/meals/${item.name}.jpg)`}"> 
              <div class="icon"> + </div>
            </div>
          </nuxt-link>
        </li>
      </ul> 
    </div>
  </div>
</template>

<script setup>
  let { categories, activeCategory, meals } = storeToRefs(useMealsStore())
  let { cartItems } = storeToRefs(useCartStore())
  
  function selectCategory (item) {
    activeCategory.value = item;
  }

  // 
  const filterMeals = computed(() => {
    return meals.value.filter(meal => {
      return meal.categories.indexOf(activeCategory.value.name) > -1
    })
  })
</script>