function toTime(num) {
    hours = Math.floor(num / 60);
    minutes = num % 60;

    if (hours === 1 && minutes === 1){
        time = hours + " hour, " + minutes + " minute";
    } else if (hours === 1) {
        time = hours + " hour, " + minutes + " minutes";
    } else if (minutes === 1) {
        time = hours + " hours, " + minutes + " minute";
    } else {
        time = hours + " hours, " + minutes + " minutes";
    }

    return time;
}

console.log(toTime(121));