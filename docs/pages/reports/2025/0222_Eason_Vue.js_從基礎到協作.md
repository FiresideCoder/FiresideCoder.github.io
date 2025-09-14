---
title: Vue.js_從基礎到協作
tags: ['vue', '前端']
author: 'Eason'
date: "2025-02-22"
---

<script setup lang="ts">
  import { ref } from 'vue';
  import { useData } from 'vitepress'
  const { site, theme, page } = useData()

  const canvaDataSrc = ref('https://www.canva.com/design/DAGl2NrfFaA/9wCZnsNiydIZCSjxYVIEUw/view?embed')
</script>

<CanvaPPT :src="canvaDataSrc" />
