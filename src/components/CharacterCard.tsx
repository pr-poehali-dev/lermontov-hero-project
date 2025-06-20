interface Character {
  name: string;
  role: string;
  description: string;
  traits: string[];
  image: string;
  color: string;
}

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  const colorClasses = {
    "literary-primary": "border-literary-primary bg-literary-primary/5",
    "literary-secondary": "border-literary-secondary bg-literary-secondary/5",
    "literary-accent": "border-literary-accent bg-literary-accent/5",
    "literary-sage": "border-literary-sage bg-literary-sage/5",
    destructive: "border-red-500 bg-red-50",
  };

  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200 hover-scale transition-all duration-300 hover:shadow-lg">
      <div className="h-48 overflow-hidden">
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6">
        <div
          className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${colorClasses[character.color as keyof typeof colorClasses] || "bg-gray-100"}`}
        >
          {character.role}
        </div>

        <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
          {character.name}
        </h3>

        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          {character.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {character.traits.map((trait) => (
            <span
              key={trait}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg"
            >
              {trait}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
