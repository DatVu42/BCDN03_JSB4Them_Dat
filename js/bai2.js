

var inpMonthYear = document.getElementById("monthYear");

function getDaysInMonth() {
   var monthYear = new Date(inpMonthYear.value);
   var month = monthYear.getMonth() + 1;
   var year = monthYear.getFullYear();

   var days = new Date(year, month, 0).getDate();

   document.getElementById("display-days").innerHTML = "Tháng " + month + "/" + year + " có " + days + " ngày ";
}