---
title: 0817_Yang_Vue心得分享
tags: ["Vue", "前端"]
date: "2025-07-06"
---

<script setup lang="ts">
  import {ref} from 'vue';
  const canvaData = ref({
    // src: '...',
    title: 'Vue心得分享',
    author: 'Yang',
    createdDate: '2025-08-17',
  })
</script>

<CanvaPPT v-bind="canvaData" />
