<script setup lang="ts">
import tags from '../tags.data.json'
</script>

<template>
  <ul class="allTagsUl">
    <li class="tags_list" v-for="(posts, tag) in tags" :key="tag">
      <a :href="`/tags/${tag}`">
        {{ tag }} ({{ posts.length }})
      </a>
    </li>
  </ul>
</template>

<style scoped>
.allTagsUl {
  @apply !list-none flex flex-wrap items-center p-[0] gap-[10px];
}

.tags_list {
  @apply bg-[var(--vp-c-gray-3)] rounded-[50vh] p-[5px_12px];
  + .tags_list {
    @apply mt-[0];
  }
}
</style>
