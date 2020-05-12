
function minMaxSum(arr) {
    let maxArr = [...arr].sort((a, b) => a - b)
    let minArr = [...arr].sort((a, b) => b - a)

    const max = maxArr.slice(arr.length - (arr.length - 1)).reduce((acc, no) => acc += no, 0)
    const min = minArr.slice(arr.length - (arr.length - 1)).reduce((acc, no) => acc += no, 0)

    console.log(min + " " + max)
}

let arr2 = [1, 3, 5, 7, 9, 18, 2]
minMaxSum(arr2)