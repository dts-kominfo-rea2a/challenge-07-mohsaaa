const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    const theaterXxi = await promiseTheaterIXX();
    const theaterVgc = await promiseTheaterVGC();

    const concatData = theaterXxi.concat(theaterVgc);

    const result = concatData.filter(
      element => (element.hasil === emosi)
    )

    return result.length;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  promiseOutput,
};
