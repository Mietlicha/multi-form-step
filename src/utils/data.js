export const baseInput = [
  {
    htmlFor: 'base_front',
    label: 'Z przodu',
    id: 'base_front',
    value: 'front',
  },
  {
    htmlFor: 'base_back',
    label: 'Z tyłu',
    id: 'base_back',
    value: 'back',
  },
];

const arrey = [1, 2, 3, 4];

export const graphicInput = arrey.map((item, index) => {
  const random = Math.floor(Math.random() * 100);
  return { id: `graphic_${random}`, value: random };
});
