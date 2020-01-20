const types = [
  {
    selected: false,
    chinese: '普',
    name: 'Normal',
    colorCode: '#9199a1',
    accentCode: '#4b4e51',
    immunes: ['Ghost'],
    weaknesses: ['Rock', 'Steel'],
    strengths: []
  },
  {
    selected: false,
    chinese: '火',
    name: 'Fire',
    colorCode: '#fe9c54',
    accentCode: '#5f4f44',
    immunes: [],
    weaknesses: ['Fire', 'Water', 'Rock', 'Dragon'],
    strengths: ['Grass', 'Ice', 'Bug', 'Steel']
  },
  {
    selected: false,
    chinese: '水',
    name: 'Water',
    colorCode: '#4f90d5',
    accentCode: '#404d59',
    immunes: [],
    weaknesses: ['Water', 'Grass', 'Dragon'],
    strengths: ['Fire', 'Ground', 'Rock']
  },
  {
    selected: false,
    chinese: '電',
    name: 'Electric',
    colorCode: '#f4d23c',
    accentCode: '#5c5940',
    immunes: ['Ground'],
    weaknesses: ['Electric', 'Grass', 'Dragon'],
    strengths: ['Water', 'Flying']
  },
  {
    selected: false,
    chinese: '草',
    name: 'Grass',
    colorCode: '#62bb5a',
    accentCode: '#445447',
    immunes: [],
    weaknesses: ['Fire', 'Grass', 'Poison', 'Flying', 'Bug', 'Dragon', 'Steel'],
    strengths: ['Water', 'Ground', 'Rock']
  },
  {
    selected: false,
    chinese: '冰',
    name: 'Ice',
    colorCode: '#73cebf',
    accentCode: '#475757',
    immunes: [],
    weaknesses: ['Fire', 'Water', 'Ice', 'Steel'],
    strengths: ['Grass', 'Ground', 'Flying', 'Dragon']
  },
  {
    selected: false,
    chinese: '格',
    name: 'Fighting',
    colorCode: '#cd406a',
    accentCode: '#57404a',
    immunes: ['Ghost'],
    weaknesses: ['Poison', 'Flying', 'Psychic', 'Bug', 'Fairy'],
    strengths: ['Normal', 'Ice', 'Rock', 'Dark', 'Steel']
  },
  {
    selected: false,
    chinese: '毒',
    name: 'Poison',
    colorCode: '#a96ac7',
    accentCode: '#524857',
    immunes: ['Steel'],
    weaknesses: ['Poison', 'Ground', 'Rock', 'Ghost'],
    strengths: ['Grass', 'Fairy']
  },
  {
    selected: false,
    chinese: '地',
    name: 'Ground',
    colorCode: '#d87844',
    accentCode: '#594940',
    immunes: ['Flying'],
    weaknesses: ['Grass', 'Bug'],
    strengths: ['Fire', 'Electric', 'Poison', 'Rock', 'Steel']
  },
  {
    selected: false,
    chinese: '飛',
    name: 'Flying',
    colorCode: '#8ea8de',
    accentCode: '#4c515a',
    immunes: [],
    weaknesses: ['Electric', 'Rock', 'Steel'],
    strengths: ['Grass', 'Fighting', 'Bug']
  },
  {
    selected: false,
    chinese: '超',
    name: 'Psychic',
    colorCode: '#f97178',
    accentCode: '#5d4849',
    immunes: ['Dark'],
    weaknesses: ['Psychic', 'Steel'],
    strengths: ['Fighting', 'Poison']
  },
  {
    selected: false,
    chinese: '蟲',
    name: 'Bug',
    colorCode: '#91bf2e',
    accentCode: '#4c543f',
    immunes: [],
    weaknesses: ['Fire', 'Fighting', 'Poison', 'Flying', 'Ghost', 'Steel', 'Fairy'],
    strengths: ['Grass', 'Psychic', 'Dark']
  },
  {
    selected: false,
    chinese: '岩',
    name: 'Rock',
    colorCode: '#c5b78b',
    accentCode: '#57544f',
    immunes: [],
    weaknesses: ['Fighting', 'Ground', 'Steel'],
    strengths: ['Fire', 'Ice', 'Flying', 'Bug']
  },
  {
    selected: false,
    chinese: '幽',
    name: 'Ghost',
    colorCode: '#5269ac',
    accentCode: '#404751',
    immunes: ['Normal'],
    weaknesses: ['Dark'],
    strengths: ['Psychic', 'Ghost']
  },
  {
    selected: false,
    chinese: '龍',
    name: 'Dragon',
    colorCode: '#0a6dc2',
    accentCode: '#364857',
    immunes: ['Fairy'],
    weaknesses: ['Steel'],
    strengths: ['Dragon']
  },
  {
    selected: false,
    chinese: '惡',
    name: 'Dark',
    colorCode: '#5a5365',
    accentCode: '#434349',
    immunes: [],
    weaknesses: ['Fighting', 'Dark', 'Fairy'],
    strengths: ['Psychic', 'Ghost']
  },
  {
    selected: false,
    chinese: '鋼',
    name: 'Steel',
    colorCode: '#5a8da1',
    accentCode: '#444c51',
    immunes: [],
    weaknesses: ['Fire', 'Water', 'Electric', 'Steel'],
    strengths: ['Ice', 'Rock', 'Fairy']
  },
  {
    selected: false,
    chinese: '妖',
    name: 'Fairy',
    colorCode: '#eb8fe6',
    accentCode: '#5d4e5d',
    immunes: [],
    weaknesses: ['Fire', 'Poison', 'Steel'],
    strengths: ['Fighting', 'Dragon', 'Dark']
  }
];
(window as any).poketypes = types;

interface PokeType {
  selected: boolean;
  chinese: string;
  name: string;
  colorCode: string;
  accentCode: string;
  immunes: string[];
  weaknesses: string[];
  strengths: string[];
}
export { types, PokeType};

