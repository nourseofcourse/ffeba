<template>
  <article class="article wrapper">
    <VRow :gutter="30" type="flex">
      <VCol :lg="{ span: 16, offset: 4 }" :md="{ span: 20, offset: 2 }" :sm="{ span: 24, offset: 0 }" :xs="{ span: 24 }">
        <header class="article__header">
          <h1 class="article__title">{{ article.title }}</h1>
          <div class="article__meta meta">
            <div class="meta__item" v-if="article.published_at">
              <time>{{ moment(article.published_at).format("MMM Do YY") }}</time>
            </div>
            <div class="meta__item" v-if="article.author.name">By: {{ article.author.name }}</div>
          </div>
        </header>
      </VCol>
    </VRow>

    <VRow :gutter="30" type="flex">
      <VCol
        :lg="{ span: 13, offset: 1 }"
        :md="{ span: 14 }"
        :sm="{ span: 16 }"
        :xs="{ span: 24 }"
      >
        <figure class="article__image" v-if="article.image.url">
          <img
            :src="getStrapiMedia(article.image.url)"
            :alt="article.title"
          />
        </figure>
        <div
          class="article__content"
          v-if="article.content"
          id="editor"
          v-html="$md.render(article.content)"
        />
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
  </article>
</template>

<script>
import moment from "moment";
import { getStrapiMedia } from "../../utils/medias";
import { getMetaTags } from "../../utils/seo";
import Widgets from '@/components/Widgets/Widgets.vue'

export default {
  components: {
    Widgets
  },
  async asyncData({ $strapi, params }) {
    const matchingArticles = await $strapi.find("articles", {
      slug: params.slug,
    });
    return {
      article: matchingArticles[0],
      global: await $strapi.find("global"),
    };
  },
  data() {
    return {
      apiUrl: process.env.strapiBaseUri,
    };
  },
  methods: {
    moment,
    getStrapiMedia,
  },
  head() {
    const { defaultSeo, favicon, siteName } = this.global;

    // Merge default and article-specific SEO data
    const fullSeo = {
      ...defaultSeo,
      metaTitle: this.article.title,
      metaDescription: this.article.description,
      shareImage: this.article.image,
    };

    return {
      titleTemplate: `%s | ${siteName}`,
      title: fullSeo.metaTitle,
      meta: getMetaTags(fullSeo),
      link: [
        {
          rel: "favicon",
          href: getStrapiMedia(favicon.url),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/components/_components.article.scss";
</style>
