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

// Con Reduce
const pesotot = zuchinis.reduce((totale, zucchina) => {
  return totale + zucchina.weight
}, 0)

console.log(totalWeight);
console.log(pesotot);

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

// Con Filter
const zucchineCorte = zuchinis.filter((element) => {
  return element.length < 15
})

const zucchineLunghe = zuchinis.filter((element) => {
  return element.length >= 15
})

console.log(zucchineCorte);
console.log(zucchineLunghe);

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

/**************
   SNACK 3
***************/
function reverseStr(str) {
  return str.split('').reverse().join('')
}

console.log(reverseStr('stefano'));

/**************
   SNACK 4
***************/
const lettersArray = ['a', 'b', 'c'];
const numbersArray = [1, 2, 3];
const combinedArray = [];

function combineArrays(array1, array2, arrayTot) {
  for (let index = 0; index < array1.length; index++) {
    arrayTot.push(array1[index], array2[index]);
  }
  return arrayTot  
}

console.log(combineArrays(lettersArray, numbersArray, combinedArray));

/**************
   SNACK 5
***************/
const myArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t"];
const min = Math.floor(Math.random() * 5);
const max = Math.floor(Math.random() * (myArray.length - min + 1) + min);

function rangeArray(minimum, maximum, array) {
  let newArray = [];

  newArray = array.filter((element, index) => {
    return index >= minimum && index <= maximum
  })

  return newArray
}


console.log(min);
console.log(max);
console.log(rangeArray(min, max, myArray));