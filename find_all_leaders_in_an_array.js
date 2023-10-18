// Given an integer array X[] of size n, write a program to find all the leaders in the array X[]. An element is a leader if it is strictly greater than all the elements to its right side.
// The last element of an array is a leader by default.
// The largest element of an array is also a leader by default.
// Suppose all the array elements are unique.
// Ordering in the output doesn’t matter.
// Input= [6, 5, 4, 3, 2, 1], Output: [6, 5, 4, 3, 2, 1]

function findLeaders(arr) {
    let res = []
    let currMax = arr[arr.length-1]
    res.push(currMax)
    for (let i= arr.length-1; i>=0; i--) {
        if (arr[i] > currMax ) {
            currMax = arr[i]
            res.push(arr[i])
        }
    }
    return res
}
let arr = [16,17,4,3,5,2]
console.log(findLeaders(arr))

