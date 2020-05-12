function changeRowColumn(a) {
    let arr = []
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < a[i].length; j++) {
            arr.push(a[j][i])
        }
    }
    console.log(arr)
}

let a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]


changeRowColumn(a)