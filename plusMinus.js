function plusMinus(arr) {
    let pos = 0
    let neg = 0
    let zero = 0

    let n = arr.length
    for (let i = 0; i < n; i++) {
        if (arr[i] > 0) {
            pos++
        } else if (arr[i] < 0) {
            neg++
        } else {
            zero++
        }
    }
    console.log((pos / n).toPrecision(6))
    console.log((neg / n).toPrecision(6))
    console.log((zero / n).toPrecision(6))

}
