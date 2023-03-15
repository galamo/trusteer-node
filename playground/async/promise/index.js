// Promise = object which describe completion or rejection of async operation

const { cars } = require("../data");

function getCarsFromApi(hp) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof hp !== "number") return reject("Wrong param!");
      const result = cars.filter((car) => car.Horsepower > hp);
      console.log("Operation success");
      resolve(result.length);
    }, 1000 * Math.ceil(Math.random() * 5));
  });
}

// console.log("Start of Script");

// console.log(getCarsFromApi("100").then(console.log).catch(console.log));

// console.log("End of Script");

module.exports = { getCarsFromApi };
