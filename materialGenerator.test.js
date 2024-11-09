const { generateMaterialName, generateMaterial } = require('./materialGenerator.js');

describe('generateMaterialName', () => {
  test('should return an object with value, rank, and name properties', () => {
    const material = generateMaterialName();
    expect(material).toHaveProperty('value');
    expect(material).toHaveProperty('rank');
    expect(material).toHaveProperty('name');
  });

  test('should return a rank within the expected range', () => {
    const material = generateMaterialName();
    const validRanks = ['D', 'D+', 'C', 'C+', 'B', 'B+', 'A', 'A+', 'S', 'S+', 'S++'];
    expect(validRanks).toContain(material.rank);
  });

  test('should return a value between 0 and 99', () => {
    const material = generateMaterialName();
    expect(material.value).toBeGreaterThanOrEqual(0);
    expect(material.value).toBeLessThan(100);
  });

  test('should return a non-empty name', () => {
    const material = generateMaterialName();
    expect(material.name).toBeTruthy();
  });
});

describe('generateMaterial', () => {
  test('should return an object with name and manaValues properties', () => {
    const material = { name: 'Test Material', value: 100 };
    const generatedMaterial = generateMaterial(material);
    expect(generatedMaterial).toHaveProperty('name');
    expect(generatedMaterial).toHaveProperty('manaValues');
  });

  test('should return the correct name', () => {
    const material = { name: 'Test Material', value: 100 };
    const generatedMaterial = generateMaterial(material);
    expect(generatedMaterial.name).toBe(material.name);
  });

  test('should return manaValues with properties fire, water, earth, air, light, and dark', () => {
    const material = { name: 'Test Material', value: 100 };
    const generatedMaterial = generateMaterial(material);
    const manaValues = generatedMaterial.manaValues;
    expect(manaValues).toHaveProperty('fire');
    expect(manaValues).toHaveProperty('water');
    expect(manaValues).toHaveProperty('earth');
    expect(manaValues).toHaveProperty('air');
    expect(manaValues).toHaveProperty('light');
    expect(manaValues).toHaveProperty('dark');
  });

  test('should return manaValues within the expected range', () => {
    const material = { name: 'Test Material', value: 100 };
    const generatedMaterial = generateMaterial(material);
    const manaValues = generatedMaterial.manaValues;
    const maxValue = material.value / 100;
    const minValue = maxValue / 200;
    Object.values(manaValues).forEach(value => {
      expect(value).toBeGreaterThanOrEqual(minValue);
      expect(value).toBeLessThanOrEqual(maxValue);
    });
  });
});