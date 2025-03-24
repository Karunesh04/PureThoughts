
import { Link } from "react-router-dom";
import { useBlog } from "@/context/BlogContext";
import { BlogCard } from "@/components/blog/BlogCard";
import { SearchBar } from "@/components/common/SearchBar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { categories } from "@/utils/mockData";

const Index = () => {
  const { featuredBlogs, blogs } = useBlog();
  const navigate = useNavigate();
  
  const recentBlogs = [...blogs].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  ).slice(0, 6);
  
  const handleSearch = (query: string) => {
    navigate(`/blogs?search=${encodeURIComponent(query)}`);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full min-h-[70vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img 
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Minimal Blog"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60"></div>
        </div>
        
        <div className="container mx-auto px-4 pt-16 animate-content">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold mb-6">
              Thoughts, stories and ideas.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              A minimalist blog focusing on design, technology, and productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <SearchBar
                onSearch={handleSearch}
                placeholder="Search for articles..."
                className="max-w-md"
              />
              <Button 
                onClick={() => navigate("/create")}
                className="whitespace-nowrap"
              >
                Write a Post
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Posts */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-medium mb-10">
            Featured Posts
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} featured={blog.id === featuredBlogs[0]?.id} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-medium mb-10">
            Explore Categories
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/blogs?category=${category.slug}`}
                className="glass-card p-6 rounded-xl text-center transition-all duration-300 hover:scale-105 hover:shadow-md"
              >
                <h3 className="text-lg font-medium mb-2">{category.name}</h3>
                <p className="text-sm text-muted-foreground">
                  Explore {category.name.toLowerCase()} articles
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Recent Posts */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-display font-medium">
              Recent Posts
            </h2>
            <Link 
              to="/blogs" 
              className="text-primary flex items-center hover:underline"
            >
              View all posts
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-display font-medium mb-4">
            Subscribe to our newsletter
          </h2>
          <p className="text-muted-foreground mb-6">
            Get the latest posts and updates delivered to your inbox.
          </p>
          <div className="flex max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="input rounded-r-none flex-1"
            />
            <Button className="rounded-l-none">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
