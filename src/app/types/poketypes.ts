const types = [
  {
    selected: false,
    chinese: '普',
    name: 'Normal',
    colorCode: '#9199a1',
    accentCode: '#4b4e51',
    immunes: ['Ghost'],
    weaknesses: ['Rock', 'Steel'],
    strengths: [],
    effectiveBy: ['Fighting'],
    ineffectiveBy: [],
    noEffectBy: ['Ghost']
  },
  {
    selected: false,
    chinese: '火',
    name: 'Fire',
    colorCode: '#fe9c54',
    accentCode: '#5f4f44',
    immunes: [],
    weaknesses: ['Fire', 'Water', 'Rock', 'Dragon'],
    strengths: ['Grass', 'Ice', 'Bug', 'Steel'],
    effectiveBy: ['Ground', 'Water', 'Rock'],
    ineffectiveBy: ['Bug','Fire','Grass','Ice','Steel','Fairy'],
    noEffectBy: []
  },
  {
    selected: false,
    chinese: '水',
    name: 'Water',
    colorCode: '#4f90d5',
    accentCode: '#404d59',
    immunes: [],
    weaknesses: ['Water', 'Grass', 'Dragon'],
    strengths: ['Fire', 'Ground', 'Rock'],
    effectiveBy: ['Electric', 'Grass'],
    ineffectiveBy: ['Fire','Water','Ice','Steel'],
    noEffectBy: []
  },
  {
    selected: false,
    chinese: '電',
    name: 'Electric',
    colorCode: '#f4d23c',
    accentCode: '#5c5940',
    immunes: ['Ground'],
    weaknesses: ['Electric', 'Grass', 'Dragon'],
    strengths: ['Water', 'Flying'],
    effectiveBy: ['Ground'],
    ineffectiveBy: ['Flying','Electric','Steel'],
    noEffectBy: []
  },
  {
    selected: false,
    chinese: '草',
    name: 'Grass',
    colorCode: '#62bb5a',
    accentCode: '#445447',
    immunes: [],
    weaknesses: ['Fire', 'Grass', 'Poison', 'Flying', 'Bug', 'Dragon', 'Steel'],
    strengths: ['Water', 'Ground', 'Rock'],
    effectiveBy: ['Bug','Poison','Flying','Fire','Ice'],
    ineffectiveBy: ['Ground','Water','Electric','Grass'],
    noEffectBy: []
  },
  {
    selected: false,
    chinese: '冰',
    name: 'Ice',
    colorCode: '#73cebf',
    accentCode: '#475757',
    immunes: [],
    weaknesses: ['Fire', 'Water', 'Ice', 'Steel'],
    strengths: ['Grass', 'Ground', 'Flying', 'Dragon'],
    effectiveBy: ['Fighting','Fire','Rock','Steel'],
    ineffectiveBy: ['Ice'],
    noEffectBy: []
  },
  {
    selected: false,
    chinese: '格',
    name: 'Fighting',
    colorCode: '#cd406a',
    accentCode: '#57404a',
    immunes: ['Ghost'],
    weaknesses: ['Poison', 'Flying', 'Psychic', 'Bug', 'Fairy'],
    strengths: ['Normal', 'Ice', 'Rock', 'Dark', 'Steel'],
    effectiveBy: ['Flying','Psychic','Fairy'],
    ineffectiveBy: ['Bug','Rock','Dark'],
    noEffectBy: []
  },
  {
    selected: false,
    chinese: '毒',
    name: 'Poison',
    colorCode: '#a96ac7',
    accentCode: '#524857',
    immunes: ['Steel'],
    weaknesses: ['Poison', 'Ground', 'Rock', 'Ghost'],
    strengths: ['Grass', 'Fairy'],
    effectiveBy: ['Ground','Psychic'],
    ineffectiveBy: ['Bug','Poison','Fighting','Grass','Fairy'],
    noEffectBy: []
  },
  {
    selected: false,
    chinese: '地',
    name: 'Ground',
    colorCode: '#d87844',
    accentCode: '#594940',
    immunes: ['Flying'],
    weaknesses: ['Grass', 'Bug'],
    strengths: ['Fire', 'Electric', 'Poison', 'Rock', 'Steel'],
    effectiveBy: ['Water','Grass','Ice'],
    ineffectiveBy: ['Poison', 'Rock'],
    noEffectBy: ['Electric']
  },
  {
    selected: false,
    chinese: '飛',
    name: 'Flying',
    colorCode: '#8ea8de',
    accentCode: '#4c515a',
    immunes: [],
    weaknesses: ['Electric', 'Rock', 'Steel'],
    strengths: ['Grass', 'Fighting', 'Bug'],
    effectiveBy: ['Electric','Ice','Rock'],
    ineffectiveBy: ['Bug','Fighting','Grass'],
    noEffectBy: ['Ground']
  },
  {
    selected: false,
    chinese: '超',
    name: 'Psychic',
    colorCode: '#f97178',
    accentCode: '#5d4849',
    immunes: ['Dark'],
    weaknesses: ['Psychic', 'Steel'],
    strengths: ['Fighting', 'Poison'],
    effectiveBy: ['Bug','Ghost','Dark'],
    ineffectiveBy: ['Fighting','Psychic'],
    noEffectBy: []
  },
  {
    selected: false,
    chinese: '蟲',
    name: 'Bug',
    colorCode: '#91bf2e',
    accentCode: '#4c543f',
    immunes: [],
    weaknesses: ['Fire', 'Fighting', 'Poison', 'Flying', 'Ghost', 'Steel', 'Fairy'],
    strengths: ['Grass', 'Psychic', 'Dark'],
    effectiveBy: ['Flying','Fire','Rock'],
    ineffectiveBy: ['Ground','Fighting','Grass'],
    noEffectBy: []
  },
  {
    selected: false,
    chinese: '岩',
    name: 'Rock',
    colorCode: '#c5b78b',
    accentCode: '#57544f',
    immunes: [],
    weaknesses: ['Fighting', 'Ground', 'Steel'],
    strengths: ['Fire', 'Ice', 'Flying', 'Bug'],
    effectiveBy: ['Ground','Fighting','Water','Grass','Steel'],
    ineffectiveBy: ['Normal','Poison','Flying','Fire'],
    noEffectBy: []
  },
  {
    selected: false,
    chinese: '幽',
    name: 'Ghost',
    colorCode: '#5269ac',
    accentCode: '#404751',
    immunes: ['Normal'],
    weaknesses: ['Dark'],
    strengths: ['Psychic', 'Ghost'],
    effectiveBy: ['Ghost','Dark'],
    ineffectiveBy: ['Bug','Poison'],
    noEffectBy: ['Normal','Fighting']
  },
  {
    selected: false,
    chinese: '龍',
    name: 'Dragon',
    colorCode: '#0a6dc2',
    accentCode: '#364857',
    immunes: ['Fairy'],
    weaknesses: ['Steel'],
    strengths: ['Dragon'],
    effectiveBy: ['Dragon','Ice','Fairy'],
    ineffectiveBy: ['Fire','Water','Electric','Grass'],
    noEffectBy: []
  },
  {
    selected: false,
    chinese: '惡',
    name: 'Dark',
    colorCode: '#5a5365',
    accentCode: '#434349',
    immunes: [],
    weaknesses: ['Fighting', 'Dark', 'Fairy'],
    strengths: ['Psychic', 'Ghost'],
    effectiveBy: ['Bug','Fighting','Fairy'],
    ineffectiveBy: ['Ghost','Dark'],
    noEffectBy: ['Psychic']
  },
  {
    selected: false,
    chinese: '鋼',
    name: 'Steel',
    colorCode: '#5a8da1',
    accentCode: '#444c51',
    immunes: [],
    weaknesses: ['Fire', 'Water', 'Electric', 'Steel'],
    strengths: ['Ice', 'Rock', 'Fairy'],
    effectiveBy: ['Ground','Fighting','Fire'],
    ineffectiveBy: ['Normal','Bug','Flying','Grass','Ice','Rock','Psychic','Dragon','Steel','Fairy'],
    noEffectBy: ['Poison']
  },
  {
    selected: false,
    chinese: '妖',
    name: 'Fairy',
    colorCode: '#eb8fe6',
    accentCode: '#5d4e5d',
    immunes: [],
    weaknesses: ['Fire', 'Poison', 'Steel'],
    strengths: ['Fighting', 'Dragon', 'Dark'],
    effectiveBy: ['Poison','Steel'],
    ineffectiveBy: ['Bug','Fighting','Dark'],
    noEffectBy: ['Dragon']
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

