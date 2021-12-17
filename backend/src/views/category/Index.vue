<script setup>
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
const route = useRoute()
const store = useStore()

store.commit('addBreadcrumb', {
  key: route.fullPath,
  item: {
    name: '栏目管理',
    path: '/category'
  }
})
</script>

<template>
  <router-view />
</template>

<style scoped lang="scss"></style>
