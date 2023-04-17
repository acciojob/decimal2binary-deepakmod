function threeSum(arr, decimal) {
let binary="";
    while (decimal>0){
        let reminder=decimal%2;
        arr.push(reminder);
        decimal=Math.floor(decimal/2);
    }
    return arr;
}

module.exports = threeSum;
