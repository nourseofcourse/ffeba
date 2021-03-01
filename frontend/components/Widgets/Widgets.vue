<template>
  <div class="sidebar">
    <template v-for="(widget, idx) in widgets">
      <component
        :is="'Widget' + widget.type"
        :key="idx"
        :width="widget.width"
        :height="widget.height"
        :title="widget.title"
      ></component>
    </template>
  </div>
</template>

<script>
import WidgetAd from "@/components/Widgets/WidgetAd.vue";
import WidgetPosts from "@/components/Widgets/WidgetPosts.vue";
import WidgetSearch from "@/components/Widgets/WidgetSearch.vue";

export default {
  components: {
    WidgetAd,
    WidgetPosts,
    WidgetSearch,
  },
  data() {
    return {
      widgets: [
        {
          type: "Search",
          title: "",
          height: 0,
          width: 0,
        },
        {
          type: "Posts",
          title: "Popular Posts",
          height: 0,
          width: 0,
        },
        {
          type: "Ad",
          title: "",
          width: 300,
          height: 280,
        },
        {
          type: "Posts",
          title: "Recent Posts",
          height: 0,
          width: 0,
        },
        {
          type: "Ad",
          title: "",
          width: 300,
          height: 600,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
