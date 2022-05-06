var inpDate = document.getElementById("dateTime");

function findDate() {
    var selectDate = new Date(inpDate.value);
    var nextDate = new Date(selectDate);
    nextDate.setDate(selectDate.getDate() + 1);

    var prevDate = new Date(selectDate);
    prevDate.setDate(selectDate.getDate() - 1);

    document.getElementById("nextDate").value = nextDate.toLocaleDateString('vi-VN'); 
    document.getElementById("prevDate").value = prevDate.toLocaleDateString('vi-VN');
}