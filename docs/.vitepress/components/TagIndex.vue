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
  list-style: none;
  display: flex;
  grid-gap: 10px;
  flex-wrap: wrap;
  align-items: center;
  padding: 0;
}

.tags_list {
  background: #2b2b2b;
  border-radius: 50vh;
  padding: 5px 12px;
}

.tags_list + .tags_list {
  margin-top: 0;
}
</style>
