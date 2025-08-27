// let id = "licence";

// if (id == "licence") {
//   console.log("you are eligible for driving");
// } else {
//   console.log("you are not eligible for driving");
// }

// let english = 70;
// let hindi = 90;
// let maths = 80;

// let avg = (english + hindi + maths) / 3;

// if (avg >= 80) {
//   console.log("Student got A grade");
// } else if (avg >= 60) {
//   console.log("student got B grade");
// } else {
//   console.log("student got C grade");
// }

// let user="shivani";
// let pass=123;

// if(user=="shivani" && pass==123){
//   console.log("user is login")

// }
// else{
//   console.log("user is not login");
// }

// let n = 5;
// let pattern = "";

// for (let i = 1; i <= n; i++) {
//   // spaces
//   for (let j = 1; j <= n - i; j++) {
//     pattern += "  ";
//   }
//   // stars
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     pattern += "* ";
//   }
//   pattern += "\n";
// }
// console.log(pattern);

// let n = 7;
// let pattern = "";

// for (let i = 1; i <= n; i++) {
//   let center =4
//   for (let j = 1; j <= i; j++) {
//     pattern += "* ";
//   }
//   pattern += "\n";
// }
// console.log(pattern);


//for of loop
let arr = ["hello", "hii", "buyy"];
for (const userinfo of arr) {
  console.log(userinfo);
}



//for in loop
let obj1 = {
  name: "shivani",
  phone: "3409384098",
  email: "shivani@gmail.com",
};

for (let user in obj1) {
  console.log(user, obj1[user]);
}
