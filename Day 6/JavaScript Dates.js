

// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // Write your code here
      let day = new Date(dateString);
    //  console.log([new Date().getDay()]);
    return dayName[day.getDay()];
}

