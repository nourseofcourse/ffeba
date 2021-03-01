<template>
  <div class="ad-block">
    <img :src="'http://via.placeholder.com/' + width + 'x' + height" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 0,
    },
    height: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped>
.ad-block {
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  margin-bottom: 20px;
}
</style>
