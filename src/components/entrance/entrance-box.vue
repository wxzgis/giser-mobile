<template>
  <div class="entrance-box">
    <div class="tab">登录</div>
    <div class="tab">注册</div>
    <div class="content">

    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
export default {
  name: 'EntranceBox',
  setup(prop, { attrs, slots, emit }) {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
.entrance-box {
  padding: 10px;
  background-color: #ffffff;
  border-radius: 12px;

  .tab {
    float: left;
  }
}
</style>
