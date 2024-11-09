//export 
const generateMaterialName = () =>{
  const timeAdjectives = [
    'Young',
    'Thousand Year',
    'Ancient',
    'Eternal',
    'Fleeting',
    'Timeless',
    'Transient',
    'Ephemeral',
    'Perpetual',
    'Momentary',
    'Endless',
    'Temporal',
  ];
  const colors = [
    'Red',
    'Blue',
    'Green',
    'Yellow',
    'Purple',
    'Orange',
    'Pink',
    'Brown',
    'Black',
    'White',
    'Golden',
  ];
  const elements = [
    'Fire',
    'Water',
    'Metal',
    'Wood',
    'Earth',
    'Air',
    'Light',
    'Dark',
    'Yin',
    'Yang',
    'Ice',
    'Thunder',
    'Lightning',
    'Shadow',
    'Misty',
    'Stormy',
    'Sun',
    'Moon',
    'Star',
    'Cloud',
    'Rain',
    'Snowy',
    'Sandy',
    'Dusted',
    'Salted',
    'Smoked',
    'Steamed'
  ];
  const zodiacAnimals = [
    'Rat',
    'Ox',
    'Tiger',
    'Rabbit',
    'Dragon',
    'Snake',
    'Horse',
    'Goat',
    'Monkey',
    'Rooster',
  ];
  const nouns = [
    'Grass',
    'Leaf',
    'Herb',
    'Flower',
    'Root',
    'Fruit',
    'Seed',
    'Bark',
    'Branch',
    'Petal',
    'Stem',
    'Vine',
    'Nut',
    'Berry',
    'Mushroom',
    'Fungus',
    'Moss',
    'Bamboo',
    'Reed',
    'Grain',
    'Bean',
    'Ash',
    'Ember',
    'Flame',
    'Frost',
    'Vapor',
    'Pill',
    'Powder',
    'Crystal',
    'Stone',
    'Gem',
    'Ore',
    'Elixir'
  ];
  const timeAdjective =
    timeAdjectives[Math.floor(Math.random() * timeAdjectives.length)];
  const color = colors[Math.floor(Math.random() * colors.length)];
  const zodiacAnimal =
    zodiacAnimals[Math.floor(Math.random() * zodiacAnimals.length)];
  const element = elements[Math.floor(Math.random() * elements.length)];
  const random = [timeAdjective, color, zodiacAnimal,element][
    Math.floor(Math.random() * 4)
  ];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const rand = Math.floor(Math.random() * 100);

  switch (true) {
    case rand < 30:
      return {value: rand, rank: "D", name:`${random} ${noun}`};
    case rand < 60:
      return {value: rand, rank: "D+", name:`${noun} of ${random}`};
    case rand < 65:
      return {value: rand, rank: "C", name:`${timeAdjective} ${noun}`};
    case rand < 70:
      return {value: rand, rank: "C+", name:`${color} ${noun}`};
    case rand < 75:
      return {value: rand, rank: "B", name:`${zodiacAnimal} ${noun}`};
    case rand < 80:
      return {value: rand, rank: "B+", name:`${color} ${zodiacAnimal} ${noun}`};
    case rand < 90:
      return {value: rand, rank: "A", name:`${timeAdjective} ${color} ${noun}`};
    case rand < 95:
      return {value: rand, rank: "A+", name:`${timeAdjective} ${zodiacAnimal} ${noun}`};
    case rand < 97:
      return {value: rand, rank: "S", name:`${noun} of the ${color} ${zodiacAnimal}`};
    case rand < 99:
      return {value: rand, rank: "S+", name:`${timeAdjective} ${color} ${zodiacAnimal} ${noun}`};
    case rand < 100:
      return {value: rand, rank: "S++", name:`${timeAdjective} ${noun} of the ${color} ${zodiacAnimal}`};
  }
}

//export 
const generateMaterial = (material) =>{
  const materialName = material.name;
  const maxValue = material.value / 100;
  const minValue = maxValue / 200;
  const manaValue = () => Math.random() * (maxValue - minValue) + minValue;
  const manaValues = {
    fire: manaValue(),
    water: manaValue(),
    earth: manaValue(),
    air: manaValue(),
    light: manaValue(),
    dark: manaValue(),
  };

  return {
    name: materialName,
    manaValues: manaValues,
  };
};

module.exports = {generateMaterialName, generateMaterial};