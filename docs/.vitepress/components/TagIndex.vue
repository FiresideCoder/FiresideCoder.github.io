<script setup lang="ts">
import tags from '../tags.data.json'
</script>

<template>
  <div>
    <h1>所有 Tags</h1>
    <ul>
      <li v-for="(posts, tag) in tags" :key="tag">
        <a :href="`/docs/tags/${tag}/`">
          {{ tag }} ({{ posts.length }})
        </a>
      </li>
    </ul>
  </div>
</template>
