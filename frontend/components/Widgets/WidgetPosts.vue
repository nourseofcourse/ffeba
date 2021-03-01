<template>
  <aside class="widget widget--popular-articles">
    <div v-if="title" class="widget__title">{{ title }}</div>
    <ul class="article-list">
      <li class="article-list__item">
        <a href="" class="article-list__title"
          >VA contractor health care program needs tighter controls</a
        >
        <time class="article-list__date">January 1st, 2021</time>
      </li>
      <li class="article-list__item">
        <a href="" class="article-list__title"
          >VA contractor health care program needs tighter controls</a
        >
        <time class="article-list__date">January 1st, 2021</time>
      </li>
      <li class="article-list__item">
        <a href="" class="article-list__title"
          >VA contractor health care program needs tighter controls</a
        >
        <time class="article-list__date">January 1st, 2021</time>
      </li>
      <li class="article-list__item">
        <a href="" class="article-list__title"
          >VA contractor health care program needs tighter controls</a
        >
        <time class="article-list__date">January 1st, 2021</time>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/components/_components.widget.scss";
@import "../../assets/scss/components/_components.article-list.scss";
</style>
