const { getCarsFromApi } = require("../promise/index");
console.log(typeof getCarsFromApi);

async function init() {
  try {
    console.log("Starting async operation");
    const result = await getCarsFromApi("100");
    console.log("End of async operation", result);
  } catch (error) {
    console.log(error);
  }
}

init();
init();
init();
