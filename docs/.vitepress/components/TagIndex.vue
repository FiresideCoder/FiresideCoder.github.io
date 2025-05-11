<script setup lang="ts">
import tags from '../tags.data.json'
</script>

<template>
  <ul class="allTagsUl">
    <li class="tags_list" v-for="(posts, tag) in tags" :key="tag">
      <a class="tags_list_link" :href="`/tags/${tag}`">
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
  @apply p-[5px_0];
  + .tags_list {
    @apply mt-[0];
  }
}

.tags_list_link {
  @apply bg-[var(--vp-c-gray-3)] rounded-[50vh] p-[5px_12px];
}
</style>
