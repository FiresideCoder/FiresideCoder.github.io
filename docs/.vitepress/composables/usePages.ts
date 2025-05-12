export const usePages = async () => {
  const pages = import.meta.glob('/pages/**/*.md', { eager: true });

  const result = Object.entries(pages).map(([path, mod]: any) => {
    console.log(path, mod)
    return {
      url: path,
      ...mod.__pageData.frontmatter, // 包含 title、date 等
    };
  });

  return result;
};