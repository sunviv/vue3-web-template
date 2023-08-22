<template>
  <div class="flex flex-col justify-center items-center h-full bg-blue-100">
    <n-button type="primary" @click="handleTest">测试</n-button>
  </div>
</template>

<script setup>
function handleTest() {
  window.$message.success('测试')
}
</script>

<style lang="scss" scoped></style>
