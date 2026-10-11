const repeatString = function(string, num) {    

    let repeatingString = "";

    if (num < 0){
        return "ERROR"
    }

    for (i=0; i<num; i++){

        repeatingString = repeatingString + string;

    }
    return repeatingString
    console.log(repeatingString)
};

// Do not edit below this line
module.exports = repeatString;
