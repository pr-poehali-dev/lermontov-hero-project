import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-literary-primary/10 via-literary-secondary/5 to-literary-accent/10"></div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-literary-primary/10 text-literary-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            ✨ Классика русской литературы
          </div>

          <h1 className="font-heading text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Герой нашего
            <span className="bg-gradient-to-r from-literary-primary to-literary-secondary bg-clip-text text-transparent">
              {" "}
              времени
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Роман М.Ю. Лермонтова (1840) — глубокое исследование души "лишнего
            человека" эпохи и вечных вопросов человеческого существования
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            <Link
              to="/characters"
              className="bg-literary-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-literary-primary/90 transition-all duration-200 flex items-center space-x-2 hover-scale"
            >
              <Icon name="Users" size={20} />
              <span>Изучить персонажей</span>
            </Link>

            <Link
              to="/gallery"
              className="border-2 border-literary-secondary text-literary-secondary px-8 py-4 rounded-xl font-semibold hover:bg-literary-secondary hover:text-white transition-all duration-200 flex items-center space-x-2"
            >
              <Icon name="Image" size={20} />
              <span>Посмотреть галерею</span>
            </Link>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 max-w-2xl mx-auto">
            <blockquote className="text-lg italic text-gray-700 font-serif">
              "История души человеческой, хотя бы самой мелкой души, едва ли не
              любопытнее и не полезнее истории целого народа"
            </blockquote>
            <cite className="text-literary-primary font-semibold mt-3 block">
              — М.Ю. Лермонтов
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
