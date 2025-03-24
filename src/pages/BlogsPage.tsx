
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BlogList } from "@/components/blog/BlogList";

const BlogsPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h1 className="text-4xl font-display font-semibold mb-4">Blog Posts</h1>
          <p className="text-lg text-muted-foreground">
            Explore our collection of articles on technology, design, and more.
          </p>
        </div>

        <BlogList />
      </div>
    </div>
  );
};

export default BlogsPage;
