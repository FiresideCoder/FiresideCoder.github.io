<script setup lang="ts">
const $props = defineProps<{
  src: string
  title: string
  author: string
  createdDate: string
}>()
</script>

<template>
  <h1>{{ $props.title }}</h1>
  <h5>{{ `${$props.author} - ${$props.createdDate}` }}</h5>
  <div class="canvaWrap">
    <iframe loading="lazy" class="canvaIframe"
    :src="$props.src"
    allow="fullscreen">
  </iframe>
  </div>
</template>



<style scoped>
.canvaWrap {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 56.2500%;
  padding-bottom: 0;
  box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16);
  margin-top: 1.6em;
  margin-bottom: 0.9em;
  overflow: hidden;
  border-radius: 8px;
  will-change: transform;
}
.canvaIframe {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: none;
  padding: 0;
  margin: 0;
}
</style>