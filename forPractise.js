// const nums = [
//   10000263, 20000911, 30009286, 40008982, 1202322, 30009284, 30002322, 10000350,
//   20001009, 10000312, 20001006, 30001528, 30000482, 20003957, 30002319,
//   10000573, 30000544, 30009291, 40066486, 40113536, 40025342, 40004344,
//   30005030, 40112523, 40040480, 40128192, 20002555, 40071548, 40019777,
//   30000994, 10000289, 40122446, 40100029, 40319261, 40038667, 40048446,
//   30009305, 10000296, 40122798, 40319260, 40122445, 40120927, 30000998,
//   30009443, 40085590, 40132830, 40276075, 30009442, 40084304,
// ];

// const findingId = () => {
//   return productList.map((products) => {
//     return products.id;
//   });
// };

// const productList = [
//   { id: "10000263" },
//   { id: "20000911" },
//   { id: "30009286" },
//   { id: "40008982" },
//   { id: "1202322" },
//   { id: "30009284" },
//   { id: "30002322" },
//   { id: "10000350" },
// ];

// const findingId2 = productList.map((products) => products.id);

// const setId = findingId2.map((num, i) => ({ [num]: i }));
// console.log(setId);

// const setId = productList.reduce((acc, { id }, i) => {
//   acc[id] = i;
//   return acc;
// }, {});
// console.log(setId);

const arr = [
  { 10000263: 0 },
  { 20000911: 1 },
  { 30009286: 2 },
  { 40008982: 3 },
  { 1202322: 4 },
  { 30009284: 5 },
  { 30002322: 6 },
  { 10000350: 7 },
];
const key = "30009286";
const value = arr.find((obj) => obj.hasOwnProperty(key))[key];
console.log(value);

// Assuming you have an input field with an associated button
const inputField = document.getElementById("myInput"); // Replace 'myInput' with your actual input field ID
const myButton = document.getElementById("myButton"); // Replace 'myButton' with your actual button ID

// Add an event listener to the input field
inputField.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    // Trigger the button click when Enter key is pressed
    myButton.click();
  }
});

// Your button click handler
myButton.addEventListener("click", function () {
  // Your button's functionality here
  console.log("Button clicked!");
});
