<template>
  <n-config-provider :theme-overrides="themeOverrides" class="h-full w-full">
    <n-loading-bar-provider>
      <n-message-provider>
        <router-view></router-view>
        <content />
      </n-message-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<script setup>
import { defineComponent } from 'vue'
import { useMessage, useLoadingBar } from 'naive-ui'

/**
 * js 文件下使用这个做类型提示
 * @type import('naive-ui').GlobalThemeOverrides
 */
const themeOverrides = {
  LoadingBar: {
    colorLoading: '#46B7F4FF'
  }
}

const Content = defineComponent({
  name: 'NaiveProviderContent',
  setup() {
    window.$message = useMessage()
    window.$loadingBar = useLoadingBar()
  },
  render() {
    return null
  }
})
</script>

<style>
html,
body,
#app {
  height: 100%;
}
</style>
