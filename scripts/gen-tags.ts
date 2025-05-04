import fs from 'fs'
import path from 'path'
import glob from 'fast-glob'
import matter from 'gray-matter'

const docsDir = path.resolve(__dirname, '../docs')
const tagsJsonPath = path.resolve(docsDir, '.vitepress/tags.data.json')
const tagsPageDir = path.resolve(docsDir, 'tags')

async function generateTags() {
  const files = await glob('**/*.md', {
    cwd: docsDir,
    ignore: ['**/node_modules/**', 'tags/**'],
  })

  const tagMap: Record<string, { title: string; path: string }[]> = {}

  for (const file of files) {
    const fullPath = path.join(docsDir, file)
    const content = fs.readFileSync(fullPath, 'utf-8')
    const { data } = matter(content)

    if (data?.tags && data?.title) {
      for (const tag of data.tags) {
        if (!tagMap[tag]) tagMap[tag] = []
        tagMap[tag].push({
          title: data.title,
          path: '/' + file.replace(/\\/g, '/').replace(/\.md$/, ''),
        })
      }
    }
  }

  // ✅ 寫入 JSON
  fs.mkdirSync(path.dirname(tagsJsonPath), { recursive: true })
  fs.writeFileSync(tagsJsonPath, JSON.stringify(tagMap, null, 2), 'utf-8')
  console.log('✅ 已產生 tags.data.json')

  // ✅ 建立 Markdown 頁面
  fs.rmSync(tagsPageDir, { recursive: true, force: true })
  fs.mkdirSync(tagsPageDir, { recursive: true })

  for (const tag in tagMap) {
    const posts = tagMap[tag]
    const content =
`---
title: #${tag}
---

# ${tag}

${posts.map(p => `- [${p.title}](${p.path}.md)`).join('\n')}
`
    fs.writeFileSync(path.join(tagsPageDir, `${tag}.md`), content, 'utf-8')
  }

  console.log(`✅ 已產生 ${Object.keys(tagMap).length} 個 tags 頁面`)
}

generateTags()
