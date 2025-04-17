// src/utils/getPosts.js
export default async function getPosts() {
    const files = import.meta.glob('../content/posts/*.md', { eager: true });
  
    return Object.values(files).map((file) => ({
      ...file.frontmatter,
      Content: file.default,
    })).sort((a, b) => new Date(b.date) - new Date(a.date));
  }
  