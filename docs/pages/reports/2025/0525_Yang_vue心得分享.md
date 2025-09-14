---
title: vue心得分享I
tags: ["vue", '前端','OptionAPI','CompositionAPI','Setup']
author: 'Yang'
date: "2025-05-25"
---

<script setup lang="ts">
  import {ref} from 'vue';
  const canvaDataSrc = ref('https://www.canva.com/design/DAGnuQGsfPo/ujVXHopZEe9qHt4WcB7JFw/view?embed')
</script>

<CanvaPPT :src="canvaDataSrc" />
