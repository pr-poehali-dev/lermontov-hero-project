import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const Analysis = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-literary-light via-white to-classical-cream">
      <Navigation />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-heading text-5xl font-bold text-gray-900 mb-6">
              Литературный анализ
            </h1>
            <p className="text-xl text-gray-600">
              Глубокое исследование художественных особенностей и философского
              содержания романа
            </p>
          </div>

          <div className="space-y-12">
            <section className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <Icon
                  name="User"
                  size={28}
                  className="text-literary-primary mr-4"
                />
                <h2 className="font-heading text-3xl font-bold text-gray-900">
                  Образ Печорина
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Григорий Печорин — центральная фигура романа, воплощающая тип
                  "лишнего человека" в русской литературе. Лермонтов создал
                  психологически сложный образ, полный противоречий.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-literary-primary/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-literary-primary mb-2">
                      Положительные черты
                    </h4>
                    <ul className="text-sm space-y-1">
                      <li>• Незаурядный ум и образованность</li>
                      <li>• Способность к самоанализу</li>
                      <li>• Смелость и решительность</li>
                      <li>• Критическое мышление</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-600 mb-2">
                      Отрицательные черты
                    </h4>
                    <ul className="text-sm space-y-1">
                      <li>• Эгоизм и равнодушие</li>
                      <li>• Неспособность к настоящей любви</li>
                      <li>• Разрушительное воздействие на других</li>
                      <li>• Скука и разочарованность</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <Icon
                  name="BookOpen"
                  size={28}
                  className="text-literary-secondary mr-4"
                />
                <h2 className="font-heading text-3xl font-bold text-gray-900">
                  Композиция и структура
                </h2>
              </div>
              <div className="text-gray-700">
                <p className="mb-4">
                  Роман состоит из пяти повестей, расположенных не в
                  хронологическом порядке, что создает особый художественный
                  эффект:
                </p>
                <div className="space-y-4">
                  {[
                    {
                      title: "Бэла",
                      description: "Печорин глазами Максима Максимыча",
                    },
                    {
                      title: "Максим Максимыч",
                      description: "Встреча через годы, отчуждение",
                    },
                    {
                      title: "Тамань",
                      description: "Из дневника Печорина, ранние годы",
                    },
                    {
                      title: "Княжна Мери",
                      description: "Подробный самоанализ героя",
                    },
                    {
                      title: "Фаталист",
                      description: "Философские размышления о судьбе",
                    },
                  ].map((chapter, index) => (
                    <div
                      key={chapter.title}
                      className="flex items-center space-x-4"
                    >
                      <div className="w-8 h-8 bg-literary-secondary text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold">{chapter.title}</h4>
                        <p className="text-sm text-gray-600">
                          {chapter.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <Icon
                  name="Lightbulb"
                  size={28}
                  className="text-literary-accent mr-4"
                />
                <h2 className="font-heading text-3xl font-bold text-gray-900">
                  Философские проблемы
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-literary-accent">
                    Проблема судьбы
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Центральная тема романа — вопрос о предопределенности
                    человеческой судьбы. Печорин постоянно размышляет о том,
                    есть ли у человека свобода воли.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-literary-primary">
                    Смысл жизни
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Печорин мучается вопросом о цели своего существования, не
                    находя достойного применения своим незаурядным способностям.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-literary-secondary">
                    Любовь и эгоизм
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Герой неспособен к самоотверженной любви, его чувства всегда
                    окрашены эгоизмом и желанием господствовать.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-literary-sage">
                    Общество и личность
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Конфликт между яркой личностью и пошлым обществом,
                    неспособным оценить и принять незаурядного человека.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
