<style lang="scss" scoped>
  @import "@/styles/list.scss";
</style>

<template>
  <div class="list">
    <div class="top">
      <div class="categories">
        <ul>
          <li v-for="item in categoryMeals" :key="item.id" @click="selectCategory(item)">
            <img class="active_img" src="/img/logo.png" v-if="item.id === activeCategory.id" alt=""> 
            {{ item.name }} 
          </li>
        </ul>
      </div>

      <div class="text_order" v-if="activeCategory.id">
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

    <div class="meals" v-if="activeCategory.id">
      <ul>
        <li v-for="item in activeCategory.products" :key="item.id">
          <nuxt-link :to="`/spec-add/${item.id}`">  
            <div class="info">
              <div class="name_origin">
                <div class="name"> {{ item.mealName }}  </div>
                <div class="origin" v-if="item.origin"> 肉品原產地 : {{ item.origin }} </div>
              </div>
              
              <div class="content">
                <ul>
                  <li v-for="item2 in item.mealTextList" :key="item2">
                    - {{ item2 }} 
                  </li>
                </ul> 
              </div>
              <div class="price"> $ {{ item.price }} </div>
            </div>
            <div class="img"> 
              <img :src="item.image" alt="" srcset="" />
              <div class="icon"> + </div>
            </div>
          </nuxt-link>
        </li>
      </ul> 
    </div>
  </div>
</template>

<script setup>
  let { categoryMeals, activeCategory } = storeToRefs(useMealsStore())
  let { getCategoryMealData } = useMealsStore()
  getCategoryMealData()

  let { cartItems } = storeToRefs(useCartStore())
  
  const selectCategory = (item) => {
    activeCategory.value = item
  }
</script>