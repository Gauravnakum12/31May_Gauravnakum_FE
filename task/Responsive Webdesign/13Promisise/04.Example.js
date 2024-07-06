(function Order() {
  setTimeout(() => {
    console.log("Please Give order  sir ");                       // 1step
    setTimeout(() => {
      console.log("Your order taken");                            //2 step
      console.log("jUST wait we will cook Dhoosa for you ");
      setTimeout(() => {
        console.log("YOur food is ready");                        //3 step
      }, 3000);
    }, 3000);
  }, 1000);
})();

// ---------------------------------Promise .all Example------------------------------------------ 

let p1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Dhosha is ready");
  }, 5000);
});

let p2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    // resolve("Burger is ready");
    reject("I am soory ! Burger is not ready");
  }, 2000);
});

let p3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Thus up  is ready");
  }, 1000);
});

let MyPromisses = [p1, p2, p3];

const p = Promise.all(MyPromisses)
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.log(error);
  });


  //do task on student list with 