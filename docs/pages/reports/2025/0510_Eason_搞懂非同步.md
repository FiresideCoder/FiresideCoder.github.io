---
title: 0510_Eason_搞懂非同步
tags: ["JavaScript", '前端']
date: "2025-05-10"
---

<script setup lang="ts">
  import {ref} from 'vue';
  const canvaData = ref({
    src: 'https://www.canva.com/design/DAGmd8tGX44/V4fmAhfeDfh7jFLrVELaOw/view?embed',
    title: '搞懂非同步',
    author: 'Eason',
    createdDate: '2025-05-10',
  })
</script>

<CanvaPPT v-bind="canvaData" />
