// Given an array X[] of n integers where n > 1, write a program to return an array product[] such that product[i] is equal to the product of all the elements of X except X[i].
// Input: X[] = [2, 1, 3, 4], Output: product[] = [12, 24, 8, 6]

function findProduct(arr) {
    let totalProduct = 1
    let result = []
    for (let ele of arr) {
        totalProduct = totalProduct*ele
    }
    for (let ele of arr) {
        result.push(totalProduct/ele)
    }
    return result
}

let arr = [2, 1, 3, 4]
console.log(findProduct(arr))