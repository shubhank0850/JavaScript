// Async/Await => Async = makes a function return a promise
//                Await = makes an async function wait for a promise

//                Allows you write asynchronous code in a synchronous manner
//                Async dosen't have resove or reject parameters
//                Everything after Await is placed in an event queue


function walkDog(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogwalked = true;

            if(dogwalked){
                resolve("You walk the dog 🐕‍🦺");
            }
            else{
                reject("You didn't walk the dog");
            }

        }, 1500);
    });
}

function cleanKitchen(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const kitchencleaned = true;

            if(kitchencleaned){
                resolve("You clean the kitchen 🧹");
            }
            else{
                reject("You didn't clean the kitchen");
            }

        }, 2500);
    });
}

function takeOutTrash(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const trashtakenout = true;

            if(trashtakenout){
                resolve("You take out the trash ♻️");
            }
            else{
                reject("You didn't take the trash out");
            }
        }, 500);
    });
}

async function doChores() {
    
    try {
        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);

        console.log("You finished all the chores!");
    } catch (error) {
        console.error(error);
    }
}

doChores();



// // Method Chaining
// walkDog().then(value => {console.log(value); return cleanKitchen()})
//             .then(value => {console.log(value); return takeOutTrash()})
//             .then(value => {console.log(value); console.log("You finished all the chores!");})
//             .catch(error => console.error(error));