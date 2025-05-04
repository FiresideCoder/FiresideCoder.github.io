---
title: 0419_Jessie_17搞個微_服務
tags: ["java", 'Exception', '後端']
date: "2025-04-19"
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
