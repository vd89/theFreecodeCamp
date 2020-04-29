const birthdayCakeCandles = (arr) => {
    let max = Math.max(...arr)
    let lengthVal = arr.filter(item => item === max).length
    console.log(lengthVal)
}

let arr1 = [44, 53, 31, 27, 77, 60, 66, 77, 26, 36]
birthdayCakeCandles(arr1)