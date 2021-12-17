<script setup>
</script>

<template>
  <div class="not-found">
    <p>Page Not Found.</p>
    <router-link to="/">
      返回首页
    </router-link>
  </div>
</template>

<style scoped lang="scss">
.not-found {
  height: 100vh;
  background: #f0f0f0;
  p {
    padding-top: 200px;
    text-align: center;
    font-size: 100px;
    color: #ccc;
  }
  a {
    display: block;
    width: 100px;
    margin: 100px auto 0;
    padding: 10px 30px;
    background: #dfdfdf;
    border: 1px solid #ddd;
    border-radius: 20px;
    text-decoration: none;
    text-align: center;
    color: #666;
  }
}
</style>
