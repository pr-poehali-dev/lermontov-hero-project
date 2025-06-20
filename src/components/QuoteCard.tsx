import { Quote } from "@/data/quotes";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface QuoteCardProps {
  quote: Quote;
}

const QuoteCard = ({ quote }: QuoteCardProps) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(`"${quote.text}" — ${quote.author}`);
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <Icon
            name="Quote"
            className="text-primary h-8 w-8 flex-shrink-0 mt-1"
          />
          <button
            onClick={copyToClipboard}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-muted-foreground hover:text-primary"
          >
            <Icon name="Copy" className="h-5 w-5" />
          </button>
        </div>

        <blockquote className="text-lg leading-relaxed mb-4 text-foreground italic">
          "{quote.text}"
        </blockquote>

        <div className="flex items-center justify-between">
          <cite className="font-heading font-medium text-primary not-italic">
            — {quote.author}
          </cite>
          {quote.category && (
            <Badge variant="secondary" className="text-xs">
              {quote.category}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuoteCard;
