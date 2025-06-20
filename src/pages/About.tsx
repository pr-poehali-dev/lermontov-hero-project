import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-literary-light via-white to-classical-cream">
      <Navigation />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-heading text-5xl font-bold text-gray-900 mb-6">
              О произведении
            </h1>
            <p className="text-xl text-gray-600">
              "Герой нашего времени" — первый психологический роман в русской
              литературе
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center mb-4">
                <Icon
                  name="Calendar"
                  size={24}
                  className="text-literary-primary mr-3"
                />
                <h3 className="font-heading text-2xl font-bold text-gray-900">
                  История создания
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Роман был написан в 1838-1840 годах и впервые опубликован в 1840
                году. Лермонтов создал это произведение после возвращения с
                Кавказа, где служил в качестве офицера.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center mb-4">
                <Icon
                  name="BookOpen"
                  size={24}
                  className="text-literary-secondary mr-3"
                />
                <h3 className="font-heading text-2xl font-bold text-gray-900">
                  Структура
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Роман состоит из пяти повестей: "Бэла", "Максим Максимыч",
                "Тамань", "Княжна Мери" и "Фаталист", объединенных образом
                главного героя Григория Печорина.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-literary-primary/10 to-literary-secondary/10 rounded-2xl p-8 mb-12">
            <h3 className="font-heading text-3xl font-bold text-gray-900 mb-6 text-center">
              Основные темы
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-literary-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name="Heart"
                    size={24}
                    className="text-literary-primary"
                  />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Любовь и страсть
                </h4>
                <p className="text-gray-600 text-sm">
                  Сложные отношения Печорина с женщинами
                </p>
              </div>

              <div className="text-center">
                <div className="bg-literary-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name="Users"
                    size={24}
                    className="text-literary-secondary"
                  />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Дружба и предательство
                </h4>
                <p className="text-gray-600 text-sm">
                  Противоречивые отношения с окружающими
                </p>
              </div>

              <div className="text-center">
                <div className="bg-literary-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name="Search"
                    size={24}
                    className="text-literary-accent"
                  />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Поиск смысла
                </h4>
                <p className="text-gray-600 text-sm">
                  Философские размышления о судьбе
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200">
            <h3 className="font-heading text-3xl font-bold text-gray-900 mb-6">
              Значение в литературе
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              "Герой нашего времени" стал первым психологическим романом в
              русской литературе, открыв новые пути для изображения внутреннего
              мира человека. Лермонтов создал тип "лишнего человека", который
              стал архетипическим для русской литературы XIX века. Роман оказал
              огромное влияние на творчество Тургенева, Достоевского и других
              классиков.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
