function buildingFacingSun(arr) {
    let currMax = arr[0]
    let count = 1;
    for (let i =1; i<arr.length; i++) {
        if (arr[i]>currMax) {
            count +=1
            currMax = arr[i]
        }
    }
    return count
}

let arr = [2,3,4,5]
console.log(buildingFacingSun(arr))