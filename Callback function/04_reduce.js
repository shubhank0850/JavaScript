// .reduce() = reduce the element of an array
//             to a single value

const prices = [5, 30, 10, 25, 15, 20];

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);

        //  (previous), (next)
function sum(accumulator, element){    // 0 + 5 -> 5
    return accumulator + element;      // 5 + 30 -> 35
}                                      // 35 + 10 -> 45
                                       // 45 + 25 -> 70
                                       // 70 + 15 -> 85
                                       // 85 + 20 -> (105)

// Example 2
const grades = [75, 50, 90, 80, 65, 95];

const maximumScore = grades.reduce(getMax);
const minimumScore = grades.reduce(getMin);

console.log(maximumScore);
console.log(minimumScore);

function getMax(accumulator, element){
    return Math.max(accumulator, element);
}

function getMin(accumulator, element){
    return Math.min(accumulator, element);
}