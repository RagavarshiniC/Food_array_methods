const data = require("./food.json");

function allfooditems(){
  return data;
}

function vegetables(){
  const vegetables = data.filter(food => food.category === "Vegetable");
return vegetables;
}

function Fruits(){
const fruits = data.filter(food => food.category === "Fruit");
return fruits; 
}

function Protein(){
const protein = data.filter(food => food.category === "Protein");
return protein;
}

function Nuts(){
  const Nut = data.filter(food => food.category === "Nuts");
  return Nut;
}

function Grains(){
  const grains = data.filter(food => food.category === "Grain");
  return grains;
}

function Dairy(){
  const dairy = data.filter(food => food.category === "Dairy");
  return dairy;
}

function Caloriesabove100(){
  const caloriesabove100 = data.filter(food => food.calorie > 100 );
  return caloriesabove100;
}

function Caloriesbelow100(){
  const caloriesbelow100 = data.filter(food => food.calorie < 100 );
  return caloriesbelow100;
}

function highestolowestprotein(){
  const hightolowsortedProtein = data.filter(food => food.category).sort((a, b) => b.protiens - a.protiens);
  return hightolowsortedProtein;
}

function lowestohighestprotein(){
  const lowestohighestprotein = data.filter(food => food.category).sort((a, b) => a.protiens - b.protiens);
  return lowestohighestprotein;
}



console.log("All food items");
console.log(allfooditems());

console.log("All food items with category vegetables");
console.log(vegetables());

console.log("All food items with category Fruits");
console.log(Fruits());

console.log("All food items with category Protein");
console.log(Protein());


console.log("All food items with category Nuts");
console.log(Nuts());

console.log("All food items with category Grains");
console.log(Grains());

console.log("All food items with category Diary");
console.log(Dairy());

console.log("All food items with calorie above 100");
console.log(Caloriesabove100());

console.log("All food items with calorie below 100");
console.log(Caloriesbelow100());

console.log("All food items with highest protien content to lowest");
console.log(highestolowestprotein());

console.log("All food items with lowest cab content to highest");
console.log(lowestohighestprotein());