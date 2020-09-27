<template>
  <div class="views-entrance">
    <entrance-box></entrance-box>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import ExtranceBox from '../../components/entrance/entrance-box'
export default {
  name: 'Entrance',
  components: {
    'entrance-box': ExtranceBox
  },
  setup(prop, { attrs, slots, emit }) {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
$tabs-base-color: #8e44ad;
.views-entrance {
  height: inherit;
  background-image: linear-gradient(25deg, #001c80, #4a1ea7, #7c19d0, #ae00fa);

  display: flex;
  align-items: center;
  justify-content: center;

}
</style>
