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