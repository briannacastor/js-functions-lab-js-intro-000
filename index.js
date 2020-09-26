// write your code below!
var name="Larry"
var holiday="Christmas"
var days="10"

function happyHolidays(){
  return("Happy holidays!")
}
function happyHolidaysTo(){
  return `Happy holidays,${name}!`
}
function happyHolidaysTo(name, holiday){
  return `Happy ${holiday}, ${name}!`
}
function holidayCountdown(holiday, days){
  return `It\'s ${days} days until ${holiday}!`
}
