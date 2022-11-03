<template>
  <div class="nav-bar">
    <div class="title">顶部标题</div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.nav-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vh;
  border-bottom: 1px solid #f2f2f2;

  .title {
    font-size: 16px;
    font-weight: 600;
    color: var(--primary-color);
  }
}
</style>
