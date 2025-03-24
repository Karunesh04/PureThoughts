
import { useState, useEffect } from "react";
import { useBlog } from "@/context/BlogContext";
import { BlogCard } from "./BlogCard";
import { SearchBar } from "@/components/common/SearchBar";
import { categories } from "@/utils/mockData";

export function BlogList() {
  const { getFilteredBlogs } = useBlog();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredBlogs, setFilteredBlogs] = useState(
    getFilteredBlogs({ category: selectedCategory, search: searchQuery })
  );

  useEffect(() => {
    setFilteredBlogs(
      getFilteredBlogs({ category: selectedCategory, search: searchQuery })
    );
  }, [selectedCategory, searchQuery, getFilteredBlogs]);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <SearchBar
            onSearch={setSearchQuery}
            placeholder="Search blogs by title, content, or tags..."
            className="w-full"
          />
        </div>
        <div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="input w-full bg-secondary/50"
          >
            <option value="all">All Categories</option>
            {categories.map((category) => (
              <option key={category.id} value={category.slug}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {filteredBlogs.length === 0 ? (
        <div className="text-center py-16">
          <h3 className="text-2xl font-display mb-2">No blogs found</h3>
          <p className="text-muted-foreground">
            Try adjusting your search or filter to find what you're looking for.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      )}
    </div>
  );
}
