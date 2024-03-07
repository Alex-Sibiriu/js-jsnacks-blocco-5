/**********************
   Jsnacks Blocco 5 
***********************/
/**************
   ELEMENTS 
***************/
const zuchinis = [
  {
    variety: 'Zucchina nera',
    weight: 450,
    length: 23
  },
  {
    variety: 'Zucchino romanesco',
    weight: 500,
    length: 18
  },
  {
    variety: 'Zucchino fiorentino',
    weight: 400,
    length: 14
  },
  {
    variety: 'Zucchina napoletana',
    weight: 300,
    length: 12
  },
  {
    variety: 'Zucchine tonde',
    weight: 250,
    length: 16
  },
  {
    variety: 'Zucchine trombetta',
    weight: 450,
    length: 10
  },
  {
    variety: 'Zucchino giallo',
    weight: 350,
    length: 20
  },
  {
    variety: 'Zucchina pâtisson',
    weight: 250,
    length: 13
  },
  {
    variety: 'Zucchino rugoso friulano',
    weight: 420,
    length: 19
  },
  {
    variety: 'Zucchina Crookneck',
    weight: 250,
    length: 14
  }
]

/**************
   SNACK 1 
***************/
let totalWeight = 0;

zuchinis.forEach( zuchini => {
  const {weight} = zuchini;
  totalWeight = totalWeight + weight;
})

console.log(totalWeight);

/**************
   SNACK 2 
***************/
const shortZuchinis = [];
const longZuchinis = [];
let totWeightShort = 0;
let totWeightLong = 0;

zuchinis.forEach( zuchini => {
  const {length} = zuchini;
  if (length < 15) {
    shortZuchinis.push(zuchini);
  } else {
    longZuchinis.push(zuchini);
  }
})

shortZuchinis.forEach( zuchini => {
  const {weight} = zuchini;
  totWeightShort = totWeightShort + weight;
})

longZuchinis.forEach( zuchini => {
  const {weight} = zuchini;
  totWeightLong = totWeightLong + weight;
})

console.log(totWeightShort);
console.log(totWeightLong);