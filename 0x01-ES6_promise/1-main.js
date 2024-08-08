import getFullResponseFromAPI from './1-promise';

console.log(getFullResponseFromAPI(true));  // Should log a resolved promise
console.log(getFullResponseFromAPI(false)); // Should log a rejected promise
