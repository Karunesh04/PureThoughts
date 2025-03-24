
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  readTime: number; // in minutes
}

export type BlogPostInput = Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt' | 'readTime'>;

export type Category = {
  id: string;
  name: string;
  slug: string;
};
