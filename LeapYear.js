const isLeapYear = function(year) {
    if (year % 4 === 0 && year % 100 !== 0) {
        return true;

    } else if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isLeapYear(1997));
console.log(isLeapYear(1996));
console.log(isLeapYear(1900));
console.log(isLeapYear(2000));