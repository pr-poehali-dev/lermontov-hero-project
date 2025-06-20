const Header = () => {
  return (
    <header className="text-center py-16 bg-gradient-to-b from-classical-cream via-classical-gold/5 to-transparent">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-6xl font-bold text-classical-navy mb-6 tracking-tight">
          📖 Герой нашего времени
        </h1>
        <div className="w-24 h-1 bg-classical-gold mx-auto mb-6"></div>
        <p className="text-xl text-classical-navy/80 max-w-3xl mx-auto leading-relaxed font-serif">
          Цитатник по роману М.Ю. Лермонтова (1840). Философские размышления
          Печорина и незабываемые строки других героев бессмертного произведения
          русской литературы.
        </p>
        <p className="text-sm text-classical-navy/60 mt-4 font-serif italic">
          "История души человеческой, хотя бы самой мелкой души, едва ли не
          любопытнее и не полезнее истории целого народа"
        </p>
      </div>
    </header>
  );
};

export default Header;
