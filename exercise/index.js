const section = document.querySelector("section");

let para1 = document.createElement("p");
let para2 = document.createElement("p");
let motherInfo = "The mother cats are called ";
let kittenInfo;
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json";

fetch(requestURL)
  .then((response) => response.text())
  .then((text) => displayCatInfo(text));

function displayCatInfo(catString) {
  let total = 0;
  let male = 0;

  // Add your code here
  let catObj = JSON.parse(catString);

  // Adds the names of the mother cats
  motherInfo += `${catObj[0].name}, ${catObj[1].name} and ${catObj[2].name}.`;

  // Adds the total amount of kittens

  // Outer loop goes over each mother cat within the catObj
  for (let key in catObj) {
    // Inner loop goes over the properties of each mother cat
    for (let innerkey in catObj[key]) {
      // Isolates the kitten array
      if (Array.isArray(catObj[key][innerkey]) == true) {
        for (let kitten in catObj[key][innerkey]) {
          console.log(catObj[key][innerkey][kitten]);
          total += 1;
          if (catObj[key][innerkey][kitten].gender == "m") {
            male += 1;
          }
        }
      }
    }
  }

  console.log(total);
  console.log(male);
  // Don't edit the code below here!

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);
