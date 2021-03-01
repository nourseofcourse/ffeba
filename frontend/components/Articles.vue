<template>
  <section class="articles">
    <VRow :gutter="30" type="flex">
      <VCol
        :lg="{ span: 13, offset: 1 }"
        :md="{ span: 14 }"
        :sm="{ span: 16 }"
        :xs="{ span: 24 }"
      >
        <template v-for="(article, idx) in articles">
          <AdBlock v-if="idx == 3" :width="468" :height="60"></AdBlock>
          <ArticleCard
            :key="article.id"
            :article="article"
            :featured="idx == 0"
            :slim="idx > 5"
          />
        </template>
      </VCol>
      <VCol
        :lg="{ span: 9 }"
        :md="{ span: 10 }"
        :sm="{ span: 8 }"
        :xs="{ span: 24 }"
      >
        <Widgets />
      </VCol>
    </VRow>
  </section>
</template>

<script>
import ArticleCard from "./ArticleCard";
import AdBlock from "./AdBlock";
import Widgets from "./Widgets/Widgets";

export default {
  components: {
    ArticleCard,
    AdBlock,
    Widgets,
  },
  props: {
    articles: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    searchPosts() {
      console.log("search");
    },
  },
  // computed: {
  //   leftArticlesCount() {
  //     return Math.ceil(this.articles.length / 5);
  //   },
  //   leftArticles() {
  //     return this.articles.slice(0, this.leftArticlesCount);
  //   },
  //   rightArticles() {
  //     return this.articles.slice(this.leftArticlesCount, this.articles.length);
  //   },
  // },
};
</script>
