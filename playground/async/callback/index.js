const { cars } = require("../data");

function getCarsFromApi(callBackFn, hp) {
  setTimeout(() => {
    if (typeof callBackFn !== "function") return;
    if (typeof hp !== "number") return;
    const result = cars.filter((car) => car.Horsepower > hp);
    callBackFn(result);
  }, 3000);
}

console.log("Start of Script");

getCarsFromApi((result) => {
  console.log(result.length);
}, 100);

console.log("End of Script");
