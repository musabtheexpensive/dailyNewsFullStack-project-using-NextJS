export function showCurrentDate() {
  // Create a new Date object
  var currentDate = new Date();

  // Get day, month, date, and year
  var day = currentDate.toLocaleString("default", { weekday: "long" });
  var month = currentDate.toLocaleString("default", { month: "long" });
  var date = currentDate.getDate();
  var year = currentDate.getFullYear();

  return `${day},${month},${date},${year},`;
}

// Call the function to display the current date
// showCurrentDate();
