import { useState, useMemo } from "react";
import { quotes } from "@/data/quotes";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import QuoteGrid from "@/components/QuoteGrid";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredQuotes = useMemo(() => {
    if (!searchQuery.trim()) return quotes;

    const query = searchQuery.toLowerCase();
    return quotes.filter(
      (quote) =>
        quote.text.toLowerCase().includes(query) ||
        quote.author.toLowerCase().includes(query) ||
        (quote.category && quote.category.toLowerCase().includes(query)),
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4">
        <Header />

        <div className="mb-12">
          <SearchBar onSearch={setSearchQuery} />
        </div>

        <main className="pb-12">
          <div className="mb-6">
            <p className="text-center text-muted-foreground">
              Найдено цитат:{" "}
              <span className="font-semibold text-primary">
                {filteredQuotes.length}
              </span>
            </p>
          </div>

          <QuoteGrid quotes={filteredQuotes} />
        </main>
      </div>
    </div>
  );
};

export default Index;
