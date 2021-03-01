<template>
  <div class="wrapper">
    <Articles :articles="articles" />
  </div>
</template>

<script>
import Articles from "@/components/Articles.vue";
export default {
  components: {
    Articles,
  },
  async asyncData({ $strapi }) {
    return {
      articles: await $strapi.find("articles", {
        _limit: 10,
        _start: 0,
      }),
    };
  },
  data() {
    return {
      page: 1,
      per_page: 10,
    };
  },
};
</script>

<style lang="scss" scoped></style>
