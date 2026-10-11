const reverseString = function(string) {

    let reversedString = string.split("");
    reversedString.reverse();
    reversedString = reversedString.join("");
     return reversedString;
};

//  const reverseString = function(string) {
//     return string.split("").reverse().join("");
// };

// Do not edit below this line
module.exports = reverseString;
