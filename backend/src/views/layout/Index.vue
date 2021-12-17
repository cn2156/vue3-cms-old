<script setup>
import { ref } from 'vue'
import LayoutAside from './components/LayoutAside.vue'
import LayoutHeader from './components/LayoutHeader.vue'

const collapse = ref(false)

const handleCollapseChange = () => {
  collapse.value = !collapse.value
}
</script>

<template>
  <el-container class="layout">
    <el-aside :width="collapse? '64px' : '200px'">
      <layout-aside :collapse="collapse" />
    </el-aside>
    <el-container>
      <el-header>
        <layout-header
          :collapse="collapse"
          @collapse_change="handleCollapseChange"
        />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped lang="scss">
.el-container {
  height: 100vh;
  .el-aside {
    background-color: #545c64;
  }
  .el-header {
    background-color: #ddd;
  }
  .el-main {
    background-color: #f3f3f3;
  }
}
</style>
