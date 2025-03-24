
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useBlog } from "@/context/BlogContext";
import { formatDistanceToNow, format } from "date-fns";
import { 
  Clock, 
  Calendar, 
  Share2, 
  Bookmark, 
  MessageSquare, 
  Heart, 
  Edit, 
  Trash2,
  ChevronLeft 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export function BlogDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getBlogById, deleteBlog } = useBlog();
  const [blog, setBlog] = useState(id ? getBlogById(id) : undefined);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    if (id) {
      const foundBlog = getBlogById(id);
      setBlog(foundBlog);
      
      if (!foundBlog) {
        navigate('/blogs');
      }
    }
  }, [id, getBlogById, navigate]);

  if (!blog) {
    return (
      <div className="container max-w-3xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-display mb-4">Blog not found</h2>
        <p className="text-muted-foreground mb-6">
          The blog post you're looking for doesn't exist or has been removed.
        </p>
        <Button onClick={() => navigate('/blogs')}>
          Back to Blogs
        </Button>
      </div>
    );
  }

  const formattedDate = format(new Date(blog.createdAt), 'MMMM dd, yyyy');
  const timeAgo = formatDistanceToNow(new Date(blog.createdAt), { addSuffix: true });

  const handleDelete = () => {
    if (id) {
      deleteBlog(id);
      navigate('/blogs');
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: blog.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <article className="animate-content">
      {/* Header with Back Button */}
      <div className="container max-w-7xl mx-auto py-8 px-4">
        <Link 
          to="/blogs" 
          className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Blogs
        </Link>
      </div>
      
      {/* Cover Image */}
      <div className="w-full h-[40vh] md:h-[50vh] relative overflow-hidden">
        <img 
          src={blog.coverImage} 
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>
      </div>
      
      {/* Blog Content */}
      <div className="container max-w-3xl mx-auto px-4 -mt-20 relative z-10">
        <div className="glass-card rounded-xl p-8 md:p-10 shadow-xl">
          {/* Category & Meta Info */}
          <div className="flex flex-wrap items-center gap-3 mb-6 text-sm">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
              {blog.category}
            </span>
            <span className="flex items-center text-muted-foreground">
              <Clock className="h-4 w-4 mr-1" /> {blog.readTime} min read
            </span>
            <span className="flex items-center text-muted-foreground">
              <Calendar className="h-4 w-4 mr-1" /> {formattedDate}
            </span>
          </div>
          
          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold mb-6">
            {blog.title}
          </h1>
          
          {/* Author */}
          <div className="flex items-center mb-8">
            <img
              src={blog.author.avatar}
              alt={blog.author.name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="font-medium">{blog.author.name}</p>
              <p className="text-sm text-muted-foreground">Published {timeAgo}</p>
            </div>
          </div>
          
          {/* Content */}
          <div 
            className="blog-content prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
          
          {/* Tags */}
          <div className="mt-10 pt-6 border-t border-border">
            <h3 className="text-sm font-medium mb-3">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map(tag => (
                <span 
                  key={tag} 
                  className="bg-secondary hover:bg-secondary/80 px-3 py-1 rounded-full text-xs transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* Actions */}
          <div className="mt-8 pt-6 border-t border-border flex flex-wrap justify-between items-center">
            <div className="flex space-x-4">
              <Button 
                variant="ghost" 
                size="sm" 
                className="flex items-center" 
                onClick={() => setIsLiked(!isLiked)}
              >
                <Heart 
                  className={`h-4 w-4 mr-1 ${isLiked ? 'fill-destructive text-destructive' : ''}`} 
                />
                Like
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="flex items-center"
              >
                <MessageSquare className="h-4 w-4 mr-1" />
                Comment
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="flex items-center" 
                onClick={handleShare}
              >
                <Share2 className="h-4 w-4 mr-1" />
                Share
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="flex items-center" 
                onClick={() => setIsBookmarked(!isBookmarked)}
              >
                <Bookmark 
                  className={`h-4 w-4 mr-1 ${isBookmarked ? 'fill-primary text-primary' : ''}`} 
                />
                Save
              </Button>
            </div>
            
            <div className="flex space-x-2 mt-4 sm:mt-0">
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center"
                onClick={() => navigate(`/edit/${blog.id}`)}
              >
                <Edit className="h-4 w-4 mr-1" />
                Edit
              </Button>
              
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button 
                    variant="destructive" 
                    size="sm" 
                    className="flex items-center"
                  >
                    <Trash2 className="h-4 w-4 mr-1" />
                    Delete
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete the
                      blog post and remove its data.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDelete}>
                      Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
