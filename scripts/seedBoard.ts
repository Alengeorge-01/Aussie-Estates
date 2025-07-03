import fs from 'fs';

const locations = [
  {
    id: 'bondi',
    name: 'Bondi Beach',
    colour: 'teal',
    price: 320,
    rent: [28, 150, 450, 1000, 1200, 1500],
  },
];

fs.writeFileSync('server/data/board.json', JSON.stringify(locations, null, 2));
console.log('Board seeded');
