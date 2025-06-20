import Navigation from "@/components/Navigation";
import { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      id: 1,
      title: "Печорин на балконе",
      description: "Размышления о судьбе",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      category: "Персонажи",
    },
    {
      id: 2,
      title: "Кавказские горы",
      description: "Пейзажи романа",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      category: "Пейзажи",
    },
    {
      id: 3,
      title: "Княжна Мери",
      description: "На водах в Пятигорске",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616c0763c31?w=600&h=400&fit=crop",
      category: "Персонажи",
    },
    {
      id: 4,
      title: "Дуэль с Грушницким",
      description: "Роковая встреча",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      category: "Сюжет",
    },
    {
      id: 5,
      title: "Бэла",
      description: "Черкесская княжна",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=400&fit=crop",
      category: "Персонажи",
    },
    {
      id: 6,
      title: "Крепость на Кавказе",
      description: "Место службы Печорина",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      category: "Локации",
    },
    {
      id: 7,
      title: "Максим Максимыч",
      description: "Добрый штабс-капитан",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=400&fit=crop",
      category: "Персонажи",
    },
    {
      id: 8,
      title: "Тамань у моря",
      description: "Загадочная история",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop",
      category: "Локации",
    },
  ];

  const categories = ["Все", "Персонажи", "Пейзажи", "Сюжет", "Локации"];
  const [activeCategory, setActiveCategory] = useState("Все");

  const filteredItems =
    activeCategory === "Все"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-literary-light via-white to-classical-cream">
      <Navigation />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="font-heading text-5xl font-bold text-gray-900 mb-6">
            Галерея иллюстраций
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Визуальное воплощение образов и сцен из романа "Герой нашего
            времени"
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category
                  ? "bg-literary-primary text-white"
                  : "bg-white/70 text-gray-700 hover:bg-literary-primary/10 hover:text-literary-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200 hover-scale transition-all duration-300 hover:shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(item.image)}
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-literary-primary/10 text-literary-primary rounded-full text-sm font-medium mb-3">
                  {item.category}
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl max-h-full">
              <img
                src={selectedImage}
                alt="Увеличенное изображение"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
