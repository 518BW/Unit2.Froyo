const userInputString = prompt(
    "Please enter some froyo flavors separated by commas.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee")

  const stringArray = userInputString.split(",");


//Calls forEach on stringArray with a callback that puts the array item x as a property of count.
//Updates counts[x] as the itme x is being found from iteration. counts[x] set at 0
let counts = [];

stringArray.forEach(x=>counts[x]=(counts[x] || 0)+1 );
console.table(counts)


