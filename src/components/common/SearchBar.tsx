
import { useState } from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
  onSearch: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function SearchBar({ onSearch, placeholder = "Search...", className = "" }: SearchBarProps) {
  const [value, setValue] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(value);
  };

  return (
    <form
      className={`relative flex items-center ${className}`}
      onSubmit={handleSearch}
    >
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="input pr-10 w-full bg-secondary/50"
        placeholder={placeholder}
      />
      <button
        type="submit"
        className="absolute right-0 top-0 h-full px-3 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Search"
      >
        <Search className="h-4 w-4" />
      </button>
    </form>
  );
}
