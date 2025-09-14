<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useData } from 'vitepress';

import { usePages } from '../composables/usePages';

// 拿到 VitePress 的 site data
const { site, theme, page } = useData()

const pages = ref<any[]>([]);

// 把文章內容取前100字
function getExcerpt(content: string) {
  const plain = content.replace(/[#>*`~\[\]()\-!\n]/g, '') // 把 Markdown 符號清掉
  return plain.substring(0, 100)
}

function $formatDate(date: Date) {
  return date.toISOString().split('T')[0];
}

onMounted(async () => {
  pages.value = (await usePages()).filter(page => page.date).map(page => ({
    title: page.title.split('_').pop(),
    date: new Date(page.date),
    url: page.url.replace('.md', ''),
  }));
});
</script>

<template>
  <div class="cardWrap">
    <a :href="page.url" class="card bg-white" v-for="page in pages" :key="page.path">
      
      {{$formatDate(page.date)}}<br/>{{ page.title }}
    </a>
  </div>
</template>



<style scoped lang="css">
.cardWrap {
  @apply grid grid-cols-3 gap-[10px];
}
.card {
  @apply text-[var(--vp-c-warning-2)] bg-[var(--vp-c-gray-2)] hover:bg-[var(--vp-c-gray-1)] hover:text-[var(--vp-c-warning-1)] min-h-[100px] flex items-center justify-center p-[10px] wrap-anywhere rounded-[10px] no-underline;
}
</style>