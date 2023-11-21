<style lang="scss">
  *, *:before, *:after {
    margin: 0;
    padding :0;
    list-style: none;
    vertical-align: middle;
    font-family: Microsoft JhengHei;
    box-sizing: border-box;
  }

  img {
    width: 100%;
  }

  a {
    text-decoration: none;
  }
  
</style>

<template>
  <div>
    <NuxtLayout name="default">
      <NuxtPage />
      <modal v-if="modalText" />
    </NuxtLayout>
  </div>
</template>

<script setup>
  let { modalText } = storeToRefs(useCommonStore())
</script>
