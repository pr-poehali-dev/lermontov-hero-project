import { Quote } from "@/data/quotes";
import QuoteCard from "./QuoteCard";

interface QuoteGridProps {
  quotes: Quote[];
}

const QuoteGrid = ({ quotes }: QuoteGridProps) => {
  if (quotes.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="font-heading text-xl font-medium text-muted-foreground mb-2">
          Цитаты не найдены
        </h3>
        <p className="text-muted-foreground">
          Попробуйте изменить поисковый запрос
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {quotes.map((quote) => (
        <QuoteCard key={quote.id} quote={quote} />
      ))}
    </div>
  );
};

export default QuoteGrid;
