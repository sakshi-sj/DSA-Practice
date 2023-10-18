// In other words, the equilibrium index of an array is an index i such that the sum of elements at indices less than i is equal to the sum of elements at indices greater than i. A[0] + A[1] + ….. + A[i - 1] = A[i + 1] + ….. + A[n - 1], where 0 <= i <= n - 1.
// Input: A[] = [-7, 1, 5, 2, -4, 3, 0], Output: 3
// Explanation: 3 is an equilibrium index, i.e., A[0] + A[1] + A[2] = A[4] + A[5] + A[6] = -1.

function findEquilibrium(arr) {
    let total =0 
    for (let i =0; i<arr.length; i++) {
        total += arr[i]
    }
    let leftSum = 0
    let rightSum = 0
    for (i=0;i<arr.length; i++) {
        rightSum = total-leftSum-arr[i]
        if (rightSum == leftSum) {
            return i
        }
        leftSum += arr[i]
    }
}
let arr = [-7, 1, 5, 2, -4, 3, 0]
console.log(findEquilibrium(arr))