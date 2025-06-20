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
    <div className="min-h-screen bg-classical-cream">
      <div className="container mx-auto px-4">
        <Header />

        <div className="mb-12">
          <div className="max-w-2xl mx-auto mb-8">
            <div className="bg-white/50 backdrop-blur rounded-lg p-6 border border-classical-gold/20 shadow-sm">
              <p className="text-center text-classical-navy/70 font-serif mb-4">
                Исследуйте философские размышления Печорина, мудрые слова
                Максима Максимыча и яркие характеристики других персонажей
                романа
              </p>
            </div>
          </div>
          <SearchBar onSearch={setSearchQuery} />
        </div>

        <main className="pb-16">
          <div className="mb-8">
            <div className="text-center">
              <p className="text-classical-navy/70 font-serif">
                Найдено цитат:{" "}
                <span className="font-bold text-classical-gold bg-classical-navy/10 px-3 py-1 rounded-full">
                  {filteredQuotes.length}
                </span>
              </p>
            </div>
          </div>

          <QuoteGrid quotes={filteredQuotes} />
        </main>
      </div>
    </div>
  );
};

export default Index;
