// Given an array X of n integers, write a program to check if the array is a valid mountain array or not.
// The array X is a mountain array if and only if n >= 3 and there exists some i (0 < i < n -1) such that: X[0] < X[1] <...< X[i-1] < X[i] and X[i] > X[i+1] > ...> X[n-1]. In other words, the array is a valid mountain when it is first strictly increasing and then strictly decreasing.
// Input: X[] = [5, 2, 1, 4], Output: false
// Input: X[] = [5, 8, 8], Output: false

function validMountain(arr) {
    let currMax = arr [0]
    for (let i=0 ; i<arr.length; i++ ) {
        if (arr[i] > currMax) {
            currMax = arr[i]
        }
    }
    let currMax2 = arr[arr.length-1]
    for (let i=arr.length-1 ; i>=0; i-- ) {
        if (arr[i] > currMax2) {
            currMax2 = arr[i]
        }
    }
    // to check if both are not first and last element
    if (currMax == currMax2 && currMax != arr[0] && currMax != arr[arr.length-1] ) { 
        return true
    } else {
        return false
    }
}

let arr = [2,3,5,4,2];
console.log(validMountain(arr))