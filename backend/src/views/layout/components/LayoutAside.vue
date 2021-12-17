<script setup>
import { Menu as IconMenu, DocumentCopy, Document, ChatLineSquare, User, View } from '@element-plus/icons-vue'

defineProps({
  collapse: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="logo">
    VEP CMS
  </div>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    default-active="content"
    text-color="#fff"
    router
    unique-opened
    :collapse="collapse"
    :collapse-transition="false"
  >
    <el-sub-menu index="content">
      <template #title>
        <el-icon><DocumentCopy /></el-icon>
        <span>内容管理</span>
      </template>
      <el-menu-item index="1-3">
        <el-icon><Document /></el-icon>
        <span>新闻</span>
      </el-menu-item>
      <el-menu-item index="1-3">
        <el-icon><Document /></el-icon>
        <span>公告</span>
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon><ChatLineSquare /></el-icon>
      <span>评论管理</span>
    </el-menu-item>
    <el-menu-item index="/category">
      <el-icon><icon-menu /></el-icon>
      <span>栏目管理</span>
    </el-menu-item>
    <el-menu-item index="/user">
      <el-icon><User /></el-icon>
      <span>用户管理</span>
    </el-menu-item>
    <el-menu-item index="/role">
      <el-icon><View /></el-icon>
      <span>角色管理</span>
    </el-menu-item>
  </el-menu>
</template>

<style scoped lang="scss">
.logo {
  height: 60px;
  background: #495057;
  line-height: 60px;
  font-size: 28px;
  text-align: center;
  color: #f0f0f0;
}
.el-menu {
  border-right: none;
}
</style>
