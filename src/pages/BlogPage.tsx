
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BlogDetail } from "@/components/blog/BlogDetail";

const BlogPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen pt-16">
      <BlogDetail />
    </div>
  );
};

export default BlogPage;
