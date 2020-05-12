function aVeryBigSum(ar) {
    let total = 0
    ar.forEach(element => {
        total +=element
    });
    return total
}

console.log(aVeryBigSum([1000000001,1000000002,1000000003,1000000004,1000000005]));