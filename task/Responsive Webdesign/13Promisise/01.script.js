let a = 1+3
let myPromise = new Promise ((resolve,reject)=>{
    if (a==4) {
        resolve('congrates it is  success')
    } else {
        reject('ohh it is  Failed')
    }
})

myPromise.then((message)=>{
    console.log("message from 'than' " + message);
}).catch((message)=>{
    console.log("message from 'cath' " + message);
}) 