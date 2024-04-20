const leapYears = function (year) {

    if (year % 4 === 0) {
        if (year % 100 !== 0 || year % 400 === 0)
            return true;
        else return false;
    }

};

// Do not edit below this line
module.exports = leapYears;


//notes:
//leap year => divisible by 4
//leap year must be divisible by 400 if it's divisible by 100 
//if the year is divisible by 100 but not by 400 then it is not leap year
