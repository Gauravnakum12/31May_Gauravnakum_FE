// Promise.all is a iterable 


const TaskOne = new Promise((resolve,reject)=>{
    resolve(" task 1 Completed ")
})

const TaskTwo = new Promise((resolve,reject)=>{
    resolve(" task 2 Completed ")
})

const TaskThree = new Promise((resolve,reject)=>{
    resolve(" task 3 Completed ")
})

Promise.all([
    TaskOne,
    TaskTwo,
    TaskThree
]).then((messages)=>{
    console.log(messages);
})

// Promise.race([
//     TaskOne,
//     TaskTwo,
//     TaskThree
// ]).then((messages)=>{
//     console.log(messages);
// })
