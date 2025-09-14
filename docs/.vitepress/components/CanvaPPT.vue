<script setup lang="ts">
const $props = defineProps<{
  src: string
  title: string
  author: string
  createdDate: string
}>()

import { useData } from 'vitepress'
const { frontmatter } = useData();
</script>

<template>
  <h1>{{ $props.title }}</h1>
  <div class="info">
    <h5>{{ `${$props.author} - ${$props.createdDate}` }}</h5>
  </div>
  <ul class="tags_wrap">
    <li class="tag_list" v-for="(tag, index) in frontmatter.tags">
      <template v-if="index !== 0">、</template>
      <a class="tag_list_link" :href="`/tags/${tag}`">
        # {{ tag }}
      </a>
    </li>
  </ul>
  <div class="canvaWrap">
    <iframe loading="lazy" class="canvaIframe"
    :src="$props.src"
    allow="fullscreen" />
  </div>
</template>



<style scoped>
.canvaWrap {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 56.2500%;
  padding-bottom: 0;
  box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16);
  margin-top: 1.6em;
  margin-bottom: 0.9em;
  overflow: hidden;
  border-radius: 8px;
  will-change: transform;
}
.canvaIframe {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: none;
  padding: 0;
  margin: 0;
}

.info {
  display: flex;
  align-items: center;
  grid-gap: 10px;
}

.tags_wrap {
  list-style: none;
  padding-left: 0;
  display: flex;
  margin: 5px 0;
}
.tag_list {
  font-size: 12px;
}
.tag_list + .tag_list {
  margin-top: 0;
}
.tag_list_link {
  color: var(--vp-c-brand-1);
  /* background: var(--vp-c-brand-1); */
  /* border-radius: 50vh;
  padding: 2px 6px; */
}
</style>