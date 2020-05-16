const conversion = { "M": 1000, "D": 500, "C": 100, "L": 50, "X": 10, "V": 5, "I": 1 }

const romanToInt = (s) => {
    const arr = s.split("")
    let convertedValue, current, next, nextValue;
    let total = 0
    for (let i = 0; i < arr.length; i++){
        current = arr[i]
        convertedValue = conversion[current]
        next = arr[i + 1]
        nextValue = conversion[next]
        if (convertedValue < nextValue) {
           total -= convertedValue 
        } else {
            total += convertedValue
        }
    }
    return total
}


console.log(romanToInt('MCMXCIV'));



var convertToRoman = function (num) {
  var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNumeral = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I',
  ];

  var romanized = '';

  for (var index = 0; index < decimalValue.length; index++) {
    while (decimalValue[index] <= num) {
      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }
  }

  console.log(romanized); 
};

// test here
convertToRoman(36); 