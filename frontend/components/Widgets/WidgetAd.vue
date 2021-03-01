<template>
  <aside class="widget widget--ad">
    <AdBlock :width="width" :height="height"></AdBlock>
  </aside>
</template>

<script>
import AdBlock from '@/components/AdBlock.vue';
export default {
  components: {
    AdBlock
  },
  props: {
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/components/_components.widget.scss";
</style>
