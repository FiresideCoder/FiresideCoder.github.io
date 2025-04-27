---
title: Vue.js 從基礎到協作_Eason_2025-02-22
tag: ['vue']
---

<script setup lang="ts">
  import {ref} from 'vue';
  const canvaData = ref({
    src: 'https://www.canva.com/design/DAGl2NrfFaA/9wCZnsNiydIZCSjxYVIEUw/view?embed',
    title: 'Vue.js 從基礎到協作',
    author: 'Eason',
    createdDate: '2025-02-22',
  })
</script>

<CanvaPPT v-bind="canvaData" />
