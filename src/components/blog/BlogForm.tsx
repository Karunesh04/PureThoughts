
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useBlog } from "@/context/BlogContext";
import { Button } from "@/components/ui/button";
import { BlogPostInput } from "@/lib/types";
import { categories } from "@/utils/mockData";

export function BlogForm() {
  const { addBlog, updateBlog, getBlogById } = useBlog();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  
  const [formData, setFormData] = useState<BlogPostInput>({
    title: "",
    excerpt: "",
    content: "",
    coverImage: "",
    author: {
      name: "Your Name",
      avatar: "https://randomuser.me/api/portraits/lego/1.jpg",
    },
    category: "",
    tags: [],
  });
  
  const [tagInput, setTagInput] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  useEffect(() => {
    if (id) {
      const blog = getBlogById(id);
      if (blog) {
        setFormData({
          title: blog.title,
          excerpt: blog.excerpt,
          content: blog.content,
          coverImage: blog.coverImage,
          author: blog.author,
          category: blog.category,
          tags: blog.tags,
        });
      } else {
        navigate("/create");
      }
    }
  }, [id, getBlogById, navigate]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const handleAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      author: {
        ...prev.author,
        [name]: value,
      },
    }));
  };
  
  const handleTagAdd = () => {
    if (tagInput.trim() !== "" && !formData.tags.includes(tagInput.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()],
      }));
      setTagInput("");
    }
  };
  
  const handleTagRemove = (tag: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(t => t !== tag),
    }));
  };
  
  const handleTagInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleTagAdd();
    }
  };
  
  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }
    
    if (!formData.excerpt.trim()) {
      newErrors.excerpt = "Excerpt is required";
    }
    
    if (!formData.content.trim()) {
      newErrors.content = "Content is required";
    }
    
    if (!formData.coverImage.trim()) {
      newErrors.coverImage = "Cover image URL is required";
    } else if (!isValidUrl(formData.coverImage)) {
      newErrors.coverImage = "Please enter a valid URL";
    }
    
    if (!formData.author.name.trim()) {
      newErrors.authorName = "Author name is required";
    }
    
    if (!formData.author.avatar.trim()) {
      newErrors.authorAvatar = "Author avatar URL is required";
    } else if (!isValidUrl(formData.author.avatar)) {
      newErrors.authorAvatar = "Please enter a valid URL";
    }
    
    if (!formData.category) {
      newErrors.category = "Category is required";
    }
    
    if (formData.tags.length === 0) {
      newErrors.tags = "At least one tag is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const isValidUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch (e) {
      return false;
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }
    
    if (id) {
      updateBlog(id, formData);
    } else {
      addBlog(formData);
    }
    
    navigate("/blogs");
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-8 animate-content">
      <div>
        <label htmlFor="title" className="block font-medium mb-1">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className={`input w-full ${errors.title ? 'border-destructive' : ''}`}
          placeholder="An engaging blog title"
        />
        {errors.title && (
          <p className="text-destructive text-sm mt-1">{errors.title}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="excerpt" className="block font-medium mb-1">
          Excerpt
        </label>
        <input
          type="text"
          id="excerpt"
          name="excerpt"
          value={formData.excerpt}
          onChange={handleChange}
          className={`input w-full ${errors.excerpt ? 'border-destructive' : ''}`}
          placeholder="A brief summary of your blog post"
        />
        {errors.excerpt && (
          <p className="text-destructive text-sm mt-1">{errors.excerpt}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="coverImage" className="block font-medium mb-1">
          Cover Image URL
        </label>
        <input
          type="text"
          id="coverImage"
          name="coverImage"
          value={formData.coverImage}
          onChange={handleChange}
          className={`input w-full ${errors.coverImage ? 'border-destructive' : ''}`}
          placeholder="https://example.com/image.jpg"
        />
        {errors.coverImage && (
          <p className="text-destructive text-sm mt-1">{errors.coverImage}</p>
        )}
        {formData.coverImage && isValidUrl(formData.coverImage) && (
          <div className="mt-2 image-container rounded-md overflow-hidden aspect-video">
            <img
              src={formData.coverImage}
              alt="Cover preview"
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="authorName" className="block font-medium mb-1">
            Author Name
          </label>
          <input
            type="text"
            id="authorName"
            name="name"
            value={formData.author.name}
            onChange={handleAuthorChange}
            className={`input w-full ${errors.authorName ? 'border-destructive' : ''}`}
            placeholder="Your Name"
          />
          {errors.authorName && (
            <p className="text-destructive text-sm mt-1">{errors.authorName}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="authorAvatar" className="block font-medium mb-1">
            Author Avatar URL
          </label>
          <input
            type="text"
            id="authorAvatar"
            name="avatar"
            value={formData.author.avatar}
            onChange={handleAuthorChange}
            className={`input w-full ${errors.authorAvatar ? 'border-destructive' : ''}`}
            placeholder="https://example.com/avatar.jpg"
          />
          {errors.authorAvatar && (
            <p className="text-destructive text-sm mt-1">{errors.authorAvatar}</p>
          )}
        </div>
      </div>
      
      <div>
        <label htmlFor="category" className="block font-medium mb-1">
          Category
        </label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className={`input w-full ${errors.category ? 'border-destructive' : ''}`}
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-destructive text-sm mt-1">{errors.category}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="tags" className="block font-medium mb-1">
          Tags
        </label>
        <div className="flex">
          <input
            type="text"
            id="tags"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleTagInputKeyDown}
            className="input w-full rounded-r-none"
            placeholder="Add a tag"
          />
          <Button
            type="button"
            onClick={handleTagAdd}
            className="rounded-l-none"
          >
            Add
          </Button>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-2">
          {formData.tags.map((tag) => (
            <span
              key={tag}
              className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm flex items-center"
            >
              {tag}
              <button
                type="button"
                onClick={() => handleTagRemove(tag)}
                className="ml-2 text-muted-foreground hover:text-foreground"
              >
                &times;
              </button>
            </span>
          ))}
        </div>
        
        {errors.tags && (
          <p className="text-destructive text-sm mt-1">{errors.tags}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="content" className="block font-medium mb-1">
          Content (HTML)
        </label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          className={`input w-full min-h-[300px] ${errors.content ? 'border-destructive' : ''}`}
          placeholder="<p>Write your blog content here. HTML is supported.</p>"
        />
        {errors.content && (
          <p className="text-destructive text-sm mt-1">{errors.content}</p>
        )}
      </div>
      
      <div className="flex justify-end space-x-4">
        <Button
          type="button"
          variant="outline"
          onClick={() => navigate("/blogs")}
        >
          Cancel
        </Button>
        <Button type="submit">
          {id ? "Update" : "Publish"} Blog Post
        </Button>
      </div>
    </form>
  );
}
