
import React, { createContext, useContext, useState, useEffect } from 'react';
import { BlogPost, BlogPostInput } from '../lib/types';
import { mockBlogPosts } from '../utils/mockData';
import { toast } from '@/hooks/use-toast';

interface BlogContextType {
  blogs: BlogPost[];
  featuredBlogs: BlogPost[];
  getFilteredBlogs: (filters: { category?: string; search?: string }) => BlogPost[];
  getBlogById: (id: string) => BlogPost | undefined;
  addBlog: (blog: BlogPostInput) => void;
  updateBlog: (id: string, blog: BlogPostInput) => void;
  deleteBlog: (id: string) => void;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [featuredBlogs, setFeaturedBlogs] = useState<BlogPost[]>([]);

  useEffect(() => {
    // On initial load, try to get blogs from localStorage first
    const savedBlogs = localStorage.getItem('blogs');
    if (savedBlogs) {
      try {
        setBlogs(JSON.parse(savedBlogs));
      } catch (error) {
        console.error('Error parsing blogs from localStorage:', error);
        setBlogs(mockBlogPosts);
      }
    } else {
      // If no blogs in localStorage, use mock data
      setBlogs(mockBlogPosts);
    }
  }, []);

  useEffect(() => {
    // Set featured blogs whenever blogs change
    // Here we're just picking the first 3, but you could use other criteria
    setFeaturedBlogs(blogs.slice(0, 3));
    
    // Save to localStorage whenever blogs change
    localStorage.setItem('blogs', JSON.stringify(blogs));
  }, [blogs]);

  const getFilteredBlogs = ({ category, search }: { category?: string; search?: string }) => {
    return blogs.filter(blog => {
      let matchesCategory = true;
      let matchesSearch = true;
      
      if (category && category !== 'all') {
        matchesCategory = blog.category.toLowerCase() === category.toLowerCase();
      }
      
      if (search && search.trim() !== '') {
        const searchLower = search.toLowerCase();
        matchesSearch = 
          blog.title.toLowerCase().includes(searchLower) || 
          blog.excerpt.toLowerCase().includes(searchLower) || 
          blog.content.toLowerCase().includes(searchLower) ||
          blog.tags.some(tag => tag.toLowerCase().includes(searchLower));
      }
      
      return matchesCategory && matchesSearch;
    });
  };

  const getBlogById = (id: string) => {
    return blogs.find(blog => blog.id === id);
  };

  const addBlog = (blogInput: BlogPostInput) => {
    const newBlog: BlogPost = {
      ...blogInput,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      readTime: Math.ceil(blogInput.content.split(' ').length / 200), // Rough estimate: 200 words per minute
    };
    
    setBlogs(prevBlogs => [newBlog, ...prevBlogs]);
    toast({
      title: "Blog post created",
      description: "Your blog post has been published successfully.",
    });
  };

  const updateBlog = (id: string, blogInput: BlogPostInput) => {
    setBlogs(prevBlogs => 
      prevBlogs.map(blog => 
        blog.id === id 
          ? { 
              ...blog, 
              ...blogInput, 
              updatedAt: new Date().toISOString(),
              readTime: Math.ceil(blogInput.content.split(' ').length / 200),
            } 
          : blog
      )
    );
    toast({
      title: "Blog post updated",
      description: "Your changes have been saved successfully.",
    });
  };

  const deleteBlog = (id: string) => {
    setBlogs(prevBlogs => prevBlogs.filter(blog => blog.id !== id));
    toast({
      title: "Blog post deleted",
      description: "The blog post has been removed.",
      variant: "destructive",
    });
  };

  return (
    <BlogContext.Provider value={{
      blogs,
      featuredBlogs,
      getFilteredBlogs,
      getBlogById,
      addBlog,
      updateBlog,
      deleteBlog,
    }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = (): BlogContextType => {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};
