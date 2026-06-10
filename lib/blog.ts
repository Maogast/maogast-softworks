// lib/blog.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
  author?: string;
  image?: string;
}

export function getAllPostSlugs() {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    // Filter only .md files, ignore hidden files
    const mdFiles = fileNames.filter(
      (fileName) => fileName.endsWith('.md') && !fileName.startsWith('.')
    );
    return mdFiles.map((fileName) => ({
      slug: fileName.replace(/\.md$/, ''),
    }));
  } catch (error) {
    console.error('Failed to read blog directory:', error);
    return [];
  }
}

export function getPostBySlug(slug: string): BlogPost {
  if (!slug) {
    throw new Error('Slug is required');
  }
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post not found: ${slug}`);
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    date: data.date,
    description: data.description,
    content,
    author: data.author || 'Maogast Softworks',
    image: data.image || '/og-blog.jpg',
  };
}

export function getAllPosts(): BlogPost[] {
  const slugs = getAllPostSlugs();
  const posts = slugs.map(({ slug }) => getPostBySlug(slug));
  // Sort by date descending (newest first)
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}