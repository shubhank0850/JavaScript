// Fisher-Yates algorithm


const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

// Way to shuffle cards using sort method.
// cards.sort(() => Math.random() - 0.5);

// Using Fisher-Yates algorithm
shuffle(cards);

console.log(cards);

// Dedicated shuffle function
function shuffle(array){
    // looping throught the array in reverse and extracting 
    // element from any random index
    for(let i = array.length - 1; i > 0; i--){
        const random = Math.floor(Math.random() * (i + 1));

        // Using array destructuring to shuffel the element of array
        // at i with the element at random index. 
        [array[i], array[random]] = [array[random], array[i]];
    }
}