let userLeft  ;
let UserInWebsite ; 

function wathchTutorialCallback(callback, errorCallback) {
  if (userLeft) {

    errorCallback({
      name: "User Left ",
      message: "User leved",
    })

  } else if (UserInWebsite) {
    errorCallback({
      name: "user Wathing Site",
      message: "Website is good",
    })

  } else {
    callback("Do Hard and Smart Work  ");
  }
}

wathchTutorialCallback((message) => {
  console.log("success:" + message);
},
  (error) => {
    console.log(error.name + " " + error.message);
  });
