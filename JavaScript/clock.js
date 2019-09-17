//We need a way to get the current time and have that be updated each second.

//To do this, we are going to create a function that contains a timer to call itself again each second.

function showTime() {
    var date = new Date(); //This gets us the current date and time

    var hour = date.getHours();
    var minute = date.getMinutes();
    var seconds = date.getSeconds();
    var period = "AM"; //We're going to assume that its in AM to start

    //We need to make sure the hour is properly represented in 12 hour time, also need to determine whether we should dislpay AM or PM

    //With our hours being between 0 and 23, 0 would equal 12AM and anything 12 or above is a PM hour.

    if (hour === 0) {
        period = "AM";
    } else if (hour >= 12) {
        period = "PM";
    }

     if (hour === 0) {
        hour = 12; //If hour equals 0, change it to 12
    }

    if (hour > 12) {
        hour = hour - 12; //If hour is greater than 12, subtract 12 from it - 13 === 1
    } 

    hour = (hour < 10) ? ("0" + hour) : hour; //If hour is less than 10, set hour equal to 0 plus the value of hour. Otherwise, kep hour the same by setting it equal to itself.
    minute = (minute < 10) ? ("0" + minute) : minute;
    seconds = (seconds < 10) ? ("O" + seconds) : seconds;

    
    //String to store the current time
    var time = hour + ":" + minute + ":" + seconds + " " + period;

    document.getElementById("clockDisplay").innerText = time;

    setTimeout(showTime, 1000); //Schedule the showTime function to be called after 1000 ms (1 second)
}

showTime();