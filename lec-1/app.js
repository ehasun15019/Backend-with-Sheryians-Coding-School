// object
var obj = {
  name: "Ehasun",
  age: 12,
};

Object.freeze(obj);

obj.name = "Ehasun Ul Islam";

// console.log(obj.name);

// function length
function my_function(num1, num2) {}

// console.log(my_function.length);

// async js within main stack & side stack

// console.log("hi");

// setTimeout(function(){
//   console.log("hello");
// }, 2000);

// console.log("how are u?")

// promise
// const myPromise = new Promise((resolve, reject) => {
//   let success = true;

//   setTimeout(() => {
//     if (success) {
//       resolve("ডেটা লোড সফল হয়েছে!");
//     } else {
//       reject("ডেটা লোড ব্যর্থ হয়েছে!");
//     }
//   }, 2000);
// });

// myPromise
//   .then((message) => {
//     console.log("✅ Success:", message);
//   })
//   .catch((error) => {
//     console.error("❌ Error:", error);
//   })
//   .finally(() => {
//     console.log("Promise শেষ হয়েছে।");
//   });

// const ans = new Promise(function(resolve, reject){
//   let number = Math.floor(Math.random() * 10)

//   if(number < 5) {
//     return resolve("5 ar niche");
//   } else {
//     reject("5 ar opore");
//   }
// })

// ans
//  .then(function(condition) {
//   console.log("success", condition);
//  })
//  .catch(function(error) {
//   console.log("error", error);
//  })

/*
 q2.
   First of come in home after work.
   Then cook for you
   and the eat and scrolling facebook
   and go to sleep
 */

// const p1 = new Promise((res, rej) => {
//   return res("First of come in home after work.");
// });

// const p2 = p1.then(function (data) {
//   console.log(data);

//   return new Promise((res, rej) => {
//     return res("Then cook for you");
//   });
// });

// const p3 = p2.then(function (p2Data) {
//   console.log(p2Data);

//   return new Promise((res, rej) => {
//     return res("eat and scrolling facebook");
//   });
// });

// const p4 = p3.then(function (p3Data) {
//   console.log(p3Data);

//   return new Promise((res, rej) => {
//     return res("go to sleep");
//   });
// });

// p4.then(function (p4Data) {
//   console.log(p4Data);
// });

// async

// function randomUser() {
//   fetch("https://randomuser.me/api/")
//   .then(function (code) {
//     return code.json();
//   })
//   .then(function(data) {
//     console.log(data);
//   })
// }

// randomUser();

async function randomUser() {
 let ans =  await fetch(`https://randomuser.me/api/`)
 
 let ans2 = await ans.json()

 console.log(ans2);

}


randomUser()