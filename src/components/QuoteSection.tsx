import { useState, useMemo } from "react";
import { quotes } from "@/data/quotes";
import SearchBar from "@/components/SearchBar";
import QuoteGrid from "@/components/QuoteGrid";

const QuoteSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredQuotes = useMemo(() => {
    if (!searchQuery.trim()) return quotes.slice(0, 6); // Show only 6 quotes on homepage

    const query = searchQuery.toLowerCase();
    return quotes.filter(
      (quote) =>
        quote.text.toLowerCase().includes(query) ||
        quote.author.toLowerCase().includes(query) ||
        (quote.category && quote.category.toLowerCase().includes(query)),
    );
  }, [searchQuery]);

  return (
    <section className="py-16 bg-white/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl font-bold text-gray-900 mb-4">
            Избранные цитаты
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Философские размышления Печорина и яркие характеристики других
            персонажей романа
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <SearchBar onSearch={setSearchQuery} />
        </div>

        <QuoteGrid quotes={filteredQuotes} />

        {!searchQuery && (
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">
              Показано {filteredQuotes.length} из {quotes.length} цитат
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default QuoteSection;
