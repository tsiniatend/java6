//EASY: Write a function that takes in an array of numbers and outputs the average of all the numbers. 
function Average(arr) {
    var sum = 0;
    for (var num of arr) {
        sum += num;
    }
    avg = sum / arr.length
    console.log(avg)
}
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Average(numbers)

//MEDIUM: Suppose an array sorted in ascending order is rotated at some pivot unknown to you
function findElement(nums, target) {
    // indexOf method returns a -1 if wrong just as intended

    // ( No need to use loops )
    return nums.indexOf(target)
}
//console the array of numbers and then the target
console.log(findElement([4, 5, 6, 7, 0, 1, 2], 0));
console.log(findElement([4, 5, 6, 7, 0, 1, 2], 3));


//VERY HARD: You are given coins of different denominations and a total amount of money amount. 
//Write a function to compute the fewest number of coins that you need to make up that amount. If that 
//amount of money cannot be made up by any combination of the coins, return -1.


var coinChange = function (coins, amount) {
    const table = new Array(amount + 1).fill(Infinity);
    table[0] = 0;
    for (let coin of coins) {
        for (let i = 0; i < table.length; i++) {
            if (coin <= i) {
                let idx = i - coin;
                let potentialAmt = table[idx] + 1;
                table[i] = Math.min(potentialAmt, table[i]);
            }
            return table[table.length - 1] === Infinity ? - 1 : table[table.length - 1];
        }
    }
}
console.log(coinChange([1, 2, 5], 11));