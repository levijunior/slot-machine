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
  if(arrTest.length > 0) {
    let test = arrTest.map(symbol => {
      let count = 0;
      arrTest.forEach(item => {
        if(symbol.name === item.name) count++
      })
      return count;
    })
    return test
  }
}

export const getPrizeValue = (slots) => {
  if(slots.length > 0) {
    let value;
    switch (FinalPrize(slots).toString()) {
      case '2,1,2':
        value = '10.00'
        break;
      case '2,2,1':
      case '1,2,2':
        value = '20.00'
        break;
      case '3,3,3':
        value = '100.00'
        break;
      default:
        value = 'No prize :('
        break;
    }
    console.log(FinalPrize(slots).toString())
    return value
  } else {
    return ' '
  }
}