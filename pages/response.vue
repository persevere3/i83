<template>
  
</template>

<script setup>
  let { modalText } = storeToRefs(useCommonStore())

  let message = location.search.split("?message=")[1]

  if(message === 'Success') {
    modalText.value = "支付成功";
  }

</script>
