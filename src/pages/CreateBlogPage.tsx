
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BlogForm } from "@/components/blog/BlogForm";

const CreateBlogPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-display font-semibold mb-6">
          {pathname.includes("/edit/") ? "Edit Blog Post" : "Create a New Blog Post"}
        </h1>
        <p className="text-muted-foreground mb-8">
          Share your thoughts with the world. Add images, format your content, and publish when you're ready.
        </p>
        
        <BlogForm />
      </div>
    </div>
  );
};

export default CreateBlogPage;
