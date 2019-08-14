export const Symbols = [
  { name: 'banana', image: './images/banana.svg' },
  { name: 'monkey', image: './images/monkey.svg' },
  { name: 'orange', image: './images/orange.svg' },
  { name: 'strawberry', image: './images/strawberry.svg' },
]

export const RandomSlots = () => {
  let RandomArray = []
  for (let i = 0; i < 3; i++) { 
    RandomArray.push(Math.floor(Math.random() * 4))
  }
  return RandomArray;
};

export const FinalPrize = (arrTest) => {
  let test = arrTest.map(symbol => {
    let count = 0;
    arrTest.forEach(item => {
      if(symbol.name === item.name) count++
    })
    return count;
  })
  return test
}