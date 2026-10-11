const sumAll = function(num1, num2) {
    let total = 0;
    let bigNumber = 0;
    let smallNumber = 0;


    if (num1 < 0 || num2 < 0){
        return "ERROR"
    }

    if (Number.isInteger(num1) === false || Number.isInteger(num2) === false) {
        return "ERROR"
    }
    if (num1 > num2){
        bigNumber = num1;
        smallNumber = num2;
    }
    // if (num2 > num1){
    //     bigNumber = num2;
    //     smallNumber = num1;
    }
    for ( i = smallNumber; i<= bigNumber; i++){
        total = total + i;
        return total;
    }

};

// Do not edit below this line
module.exports = sumAll;
