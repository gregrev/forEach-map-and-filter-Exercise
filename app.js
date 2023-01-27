forEach

// doubleValues

function doubleValues(arr) {
    // create empty to store new one
    let doubledArray = [];
    // loop through the array
    arr.forEach(function (val) {
        // push the doubled values into the new array
        doubledArray.push(val * 2);
    });
    // return the newly created array
    return doubledArray;
}

// onlyEvenValues

function onlyEvenValues(arr) {
    // create empty array
    let evenArray = [];
    // loop through array
    arr.forEach(function (val) {
        // check if values in array are even
        if (val % 2 === 0) {
            // if even push to empty evenArray
            evenArray.push(val);
        }
    })
    return evenArray;
}

// showFirstAndLast


function showFirstAndLast(strArray) {
    // create empty array
    let firstLastLetters = [];
    // loop through the string array
    strArray.forEach(function (val) {
        // push the first and last letters into the empty array by indices
        firstLastLetters.push(val[0] + val[val.length - 1]);
    });
    return firstLastLetters;
}

// addKeyAndValue

function addKeyAndValue(arr, key, value) {
    // iterate over the array
    arr.forEach(function (val) {
        // add key/value to each element in array
        val[key] = value;
    });
    // return new arrwith added key/value
    return arr;
}

// vowelCount

function vowelCount(str) {
    const vowels = 'aeiou';
    // create empty object
    let countedVowels = {};
    // split the string input into array of indiv characters
    let splitArr = str.split("");

    // iterate over the array
    splitArr.forEach(function (val) {
        // make all letters lowercase
        let lowerCasedLetter = val.toLowerCase();
        // check for vowels
        if (vowels.indexOf(lowerCasedLetter) !== -1) {
            // if there is a vowel in new object increase by 1
            if (countedVowels[lowerCasedLetter]) {
                countedVowels[lowerCasedLetter]++;
            } else {
                countedVowels[lowerCasedLetter] = 1;
            }
        }
    });
    return countedVowels;
}

Map

// doubleValuesWithMap

function doubleValuesWithMap(arr){
    // iterate througj array
    return arr.map(function(val){
    // return new arr but each elem doubled 
        return val * 2;
    });
}

// valTimesIndex

function valTimesIndex(arr){
    return arr.map(function(val, index){
        return val * index;
    })
}

// extractKey

function extractKey(arr, key){
    return arr.map(function(val){
        return val[key];
    });
}

// extractFullName

extractFullName([
    {first: 'Elie', last:"Schoppik"},
    {first: 'Tim', last:"Garcia"},
    {first: 'Matt', last:"Lane"},
    {first: 'Colt', last:"Steele"}
  ])

function extractFullName(arr){
    return arr.map(function(val){
        return `${val.first} ${val.last}`;
    });
}

filter

// filterByValue

// returns new array only if it contains the key input

function filterByValue(arr, key){
    return arr.filter(function(val){
        return val[key] !== undefined;
    });
}

// find

// returns value if value is in the array, otherwise returns undefined
 function find(arr, value){
    return arr.filter(function(val){
        return val === value;
    })[0];
 }


// findInObj

function findInObj(arr, key, value){
    return arr.filter(function(val){
        return val[key] === value;
    })[0];
  }

//   removeVowels


function removeVowels(str) {
    // Declare vowels
    const vowels = "aeiou";
     // makelowercase and split each character into an array
    return str.toLowerCase().split("")
     // filter and check if the current value is not present in the vowels variable
    .filter(function(val) {
        return vowels.indexOf(val) === -1;
      })
       // join the remaining characters back into a string
      .join("");
  }
  

//   doubleOddNumbers

function doubleOddNumbers(arr) {
    // filter to keep odd nums
    return arr.filter(function(val) {
        return val % 2 !== 0;
      })
      // double odd nums in newly filtered array
      .map(function(val) {
        return val * 2;
      });
    }