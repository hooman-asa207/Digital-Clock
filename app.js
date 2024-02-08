let $ = document
let hourElem = $.querySelector('.hour')
let minElem = $.querySelector('.Min')
let secElem = $.querySelector('.sec')
let dayElem = $.querySelector('.day')
let monthElem = $.querySelector('.month')
let yearElem = $.querySelector('.year')
let dayNameElem = $.querySelector('.day-name')

setInterval(function () {
    let myTime = new Date()
    let Hours = myTime.getHours()
    let Minutes = myTime.getMinutes()
    let Seconds = myTime.getSeconds()
    let Month = myTime.getMonth() + 1
    let dayName

    if (Hours < 10) { Hours = '0' + Hours }
    if (Minutes < 10) { Minutes = '0' + Minutes }
    if (Seconds < 10) { Seconds = '0' + Seconds }
    if (Month < 10) { Month = '0' + Month }

    switch (myTime.getDay()) {
        case 0:
            dayName = "Sunday";
            break;
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
    }

    hourElem.innerHTML = Hours
    minElem.innerHTML = Minutes
    secElem.innerHTML = Seconds
    monthElem.innerHTML = Month
    dayNameElem.innerHTML = dayName
    dayElem.innerHTML = myTime.getDate()
    yearElem.innerHTML = myTime.getFullYear()

}, 1000)