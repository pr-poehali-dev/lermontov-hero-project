import { useState } from "react";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const SearchBar = ({
  onSearch,
  placeholder = "Поиск цитат...",
}: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSearch = (value: string) => {
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <Icon
          name="Search"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5"
        />
        <Input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-12 pr-4 py-3 text-lg rounded-xl border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
        />
      </div>
    </div>
  );
};

export default SearchBar;
