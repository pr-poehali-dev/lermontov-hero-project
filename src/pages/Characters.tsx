import Navigation from "@/components/Navigation";
import CharacterCard from "@/components/CharacterCard";

const Characters = () => {
  const characters = [
    {
      name: "Григорий Александрович Печорин",
      role: "Главный герой",
      description:
        "Офицер, «лишний человек» своей эпохи. Умный, образованный, но разочарованный в жизни и не находящий применения своим способностям.",
      traits: ["Противоречивый", "Эгоистичный", "Философичный", "Скептичный"],
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      color: "literary-primary",
    },
    {
      name: "Максим Максимыч",
      role: "Рассказчик",
      description:
        "Штабс-капитан, добродушный и простой человек. Представляет традиционные русские ценности и служит контрастом Печорину.",
      traits: ["Добродушный", "Простой", "Верный", "Традиционный"],
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      color: "literary-sage",
    },
    {
      name: "Княжна Мери",
      role: "Возлюбленная",
      description:
        "Молодая аристократка, красивая и образованная. Становится объектом игры Печорина, но в итоге страдает от его равнодушия.",
      traits: ["Гордая", "Красивая", "Образованная", "Чувствительная"],
      image:
        "https://images.unsplash.com/photo-1494790108755-2616c0763c31?w=400&h=400&fit=crop",
      color: "literary-secondary",
    },
    {
      name: "Бэла",
      role: "Черкесская княжна",
      description:
        "Юная горская красавица, похищенная Печориным. Символизирует естественную, неиспорченную цивилизацией красоту.",
      traits: ["Естественная", "Страстная", "Гордая", "Трагичная"],
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
      color: "literary-accent",
    },
    {
      name: "Грушницкий",
      role: "Антагонист",
      description:
        "Юнкер, соперник Печорина. Представляет романтизм в карикатурном виде, стремится произвести впечатление на окружающих.",
      traits: ["Тщеславный", "Романтичный", "Неискренний", "Завистливый"],
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      color: "destructive",
    },
    {
      name: "Вера",
      role: "Единственная любовь",
      description:
        "Замужняя женщина, единственная, кого по-настоящему любил Печорин. Понимает его лучше других, но их любовь обречена.",
      traits: ["Понимающая", "Страдающая", "Преданная", "Мудрая"],
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      color: "literary-primary",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-literary-light via-white to-classical-cream">
      <Navigation />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="font-heading text-5xl font-bold text-gray-900 mb-6">
            Персонажи романа
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Галерея ярких образов, созданных Лермонтовым для раскрытия характера
            главного героя и отражения духа эпохи
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {characters.map((character) => (
            <CharacterCard key={character.name} character={character} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Characters;
