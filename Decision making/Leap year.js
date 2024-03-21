function LeapYearChecker (year){
    if((year % 4 === 0 && year % 100 !== 0)|| ((year % 100 === 0) && (year % 400 === 0))){
        return ("It's a leap year");
    }
    else{
        return ("It's not a leap year");
    }
}

console.log(LeapYearChecker(2000));
console.log(LeapYearChecker(1460));
console.log(LeapYearChecker(1900));
console.log(LeapYearChecker(85));