---
title: 0525_Yang_vue心得分享
tags: ["vue", '前端','OptionAPI','CompositionAPI','Setup']
date: "2025-05-25"
---

<script setup lang="ts">
  import {ref} from 'vue';
  const canvaData = ref({
    src: 'https://www.canva.com/design/DAGnuQGsfPo/ujVXHopZEe9qHt4WcB7JFw/view?embed',
    title: 'vue心得分享',
    author: 'Yang',
    createdDate: '2025-05-25',
  })
</script>

<CanvaPPT v-bind="canvaData" />
