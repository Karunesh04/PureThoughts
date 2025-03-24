
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";
import { Clock, User } from "lucide-react";
import { BlogPost } from "@/lib/types";

interface BlogCardProps {
  blog: BlogPost;
  featured?: boolean;
}

export function BlogCard({ blog, featured = false }: BlogCardProps) {
  const formattedDate = formatDistanceToNow(new Date(blog.createdAt), {
    addSuffix: true,
  });

  return (
    <article 
      className={`blog-card group glass-card overflow-hidden rounded-xl transition-all duration-300 ${
        featured ? "md:col-span-2 lg:col-span-3" : ""
      }`}
    >
      <Link to={`/blog/${blog.id}`} className="flex flex-col h-full">
        <div className="image-container aspect-video">
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="w-full h-full object-cover transition-transform duration-500"
            loading="lazy"
          />
        </div>
        
        <div className="flex flex-col p-6 flex-grow">
          <div className="flex items-center space-x-2 mb-3">
            <span className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-0.5 rounded-full">
              {blog.category}
            </span>
            <span className="text-xs text-muted-foreground flex items-center">
              <Clock className="w-3 h-3 mr-1" /> {blog.readTime} min read
            </span>
          </div>
          
          <h3 className={`font-display font-medium text-foreground mb-2 transition-colors group-hover:text-primary ${
            featured ? "text-2xl" : "text-xl"
          }`}>
            {blog.title}
          </h3>
          
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {blog.excerpt}
          </p>
          
          <div className="mt-auto flex items-center justify-between pt-4 border-t border-border">
            <div className="flex items-center space-x-2">
              {blog.author.avatar ? (
                <img
                  src={blog.author.avatar}
                  alt={blog.author.name}
                  className="w-6 h-6 rounded-full"
                />
              ) : (
                <User className="w-6 h-6 rounded-full bg-secondary p-1" />
              )}
              <span className="text-xs text-muted-foreground">
                {blog.author.name}
              </span>
            </div>
            <span className="text-xs text-muted-foreground">{formattedDate}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
