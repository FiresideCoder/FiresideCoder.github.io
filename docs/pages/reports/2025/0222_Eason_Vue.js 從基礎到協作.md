---
title: 0222_Eason_Vue.js 從基礎到協作
tags: ['vue', '前端']
date: "2025-02-22"
---

<script setup lang="ts">
  import { ref } from 'vue';
  import { useData } from 'vitepress'
  const { site, theme, page } = useData()

  const canvaData = ref({
    src: 'https://www.canva.com/design/DAGl2NrfFaA/9wCZnsNiydIZCSjxYVIEUw/view?embed',
    title: 'Vue.js 從基礎到協作',
    author: 'Eason',
    createdDate: '2025-02-22',
  })
</script>

{{ $frontmatter }}
<CanvaPPT v-bind="canvaData" />
