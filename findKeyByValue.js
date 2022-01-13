// Copied from assertEqual.js
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑 Assertion failed: ${actual} !==  ${expected}`);
  }
};

const findKeyByValue = function(objectInput, value) {
  for (let key in objectInput) {
    if (objectInput[key] === value) {
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const favoriteMoviesByGenre = {
  sci_fi: "Bladerunner 2049",
  space_opera: "Dune",
  romance: "Call Me by Your Name",
  anime: "Mobile Suit Gundam SEED C.E. 73: STARGAZER"
};

assertEqual(findKeyByValue(favoriteMoviesByGenre, "Bladerunner 2049"), "sci_fi");
assertEqual(findKeyByValue(favoriteMoviesByGenre, "Dune"), "space_opera");
assertEqual(findKeyByValue(favoriteMoviesByGenre, "Mobile Suit Gundam SEED C.E. 73: STARGAZER"), "anime");
assertEqual(findKeyByValue(favoriteMoviesByGenre, "Pacific Rim: Uprising"), undefined);