var random = Math.floor(Math.random() * 10) + 1;
var userNumber = parseInt(prompt("Enter a number between 1 and 10"));

if (random === userNumber){
  console.log("Good Work");
} else {
while (userNumber !== random)
userNumber = parseInt(prompt("Not a match. Try again, 1 - 10"));

console.log("Good Work");
}