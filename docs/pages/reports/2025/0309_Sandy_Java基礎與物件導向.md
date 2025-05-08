---
title: 0309_Sandy_Java基礎與物件導向
tags: ['Java', '物件導向', '後端']
date: "2025-03-09"
---

<script setup lang="ts">
  import {ref} from 'vue';
  const canvaData = ref({
    src: 'https://www.canva.com/design/DAGgjlS4iSU/RXC2qGwi-KPqFHwKNu3bvA/view?embed',
    title: 'Java基礎與物件導向',
    author: 'Sandy',
    createdDate: '2025-03-09',
  })
</script>

<CanvaPPT v-bind="canvaData" />
