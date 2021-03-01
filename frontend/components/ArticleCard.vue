<template>
  <article
    v-match-heights="{ el: ['.article-card--slim'] }"
    class="article-card"
    :class="{ 'article-card--featured': featured, 'article-card--slim': slim }"
  >
    <div v-if="!slim" class="article-card__image">
      <nuxt-link
        :key="article.id"
        :to="{ name: 'articles-slug', params: { slug: article.slug } }"
        class="article__link"
      >
        <figure>
          <img
            v-if="featured"
            :src="getStrapiMedia(article.image.url)"
            height="400"
          />
          <img
            v-else
            :src="getStrapiMedia(article.image.url)"
            height="160"
            width="210"
          />
        </figure>
      </nuxt-link>
    </div>
    <div class="article-card__content">
      <h2 class="article-card__title">
        <nuxt-link
          :key="article.id"
          :to="{ name: 'articles-slug', params: { slug: article.slug } }"
          class="article__link"
        >
          {{ article.title }}
        </nuxt-link>
      </h2>
      <div class="article-card__meta meta">
        <div class="meta__item">
          <div v-if="featured || article.category" class="badge-group">
            <nuxt-link
              v-if="article.category && featured"
              class="badge"
              :to="{
                name: 'categories-slug',
                params: { slug: article.category.slug },
              }"
              tag="a"
            >
              featured
            </nuxt-link>
            <nuxt-link
              v-if="article.category"
              class="badge"
              :to="{
                name: 'categories-slug',
                params: { slug: article.category.slug },
              }"
              tag="a"
            >
              {{ article.category.name }}
            </nuxt-link>
          </div>
        </div>
        <div class="meta__item">
          <time datetime="2021-01-01">January 1st, 2021</time>
        </div>
      </div>
      <p v-if="!slim" class="article-card__body">
        {{ article.description | truncate(featured, slim) }}
      </p>
    </div>
  </article>
</template>

<script>
import { getStrapiMedia } from "../utils/medias";
export default {
  filters: {
    truncate(str, featured, slim) {
      let length = 170;
      if (featured) length = 420;
      if (slim) length = 55;
      return str.length > length ? str.substr(0, length - 1) + "..." : str;
    },
  },
  props: {
    article: {
      type: Object,
      required: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    slim: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      maxLength: 175,
    };
  },
  methods: {
    getStrapiMedia,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/components/_components.article-card.scss";
@import "../assets/scss/components/_components.badge.scss";
@import "../assets/scss/components/_components.meta.scss";
</style>
