<script setup>
import { Expand, Fold, Avatar } from '@element-plus/icons-vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
const route = useRoute()
const store = useStore()
const breadcrumb = store.state.breadcrumb?.[route.fullPath]

const props = defineProps({
  collapse: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits({
  emits: {
    collapse_changes: (value) => {
      return true
    }
  }
})

const handleExpandFold = () => {
  emit('collapse_change')
}
</script>

<template>
  <div class="header">
    <!-- 折叠/展开左侧菜单 -->
    <el-icon
      @click="handleExpandFold"
      class="expand-fold-icon"
    >
      <expand v-if="props.collapse" />
      <fold v-else />
    </el-icon>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
      <template
        v-for="item in breadcrumb"
      >
        <el-breadcrumb-item :to="{ path: item.path }">{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
    <!-- 当前登录用户 -->
    <div class="user">
      <el-dropdown>
        <el-icon class="avatar-icon">
          <avatar />
        </el-icon>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>用户信息</el-dropdown-item>
            <el-dropdown-item divided>
              退出
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  height: 100%;
  .expand-fold-icon {
    width: 24px;
    height: 24px;
    margin-right: 10px;
    color: #999;
    cursor: pointer;
    svg {
      width: 100%;
      height: 100%;
    }
  }
  .el-breadcrumb {
    flex: 1;
  }
  .user {
    .avatar-icon {
      width: 24px;
      height: 24px;
      color: #999;
      cursor: pointer;
      svg {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
