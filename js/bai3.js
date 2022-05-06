var inpNum = document.getElementById("num");

function readNum() {
    var num = parseInt(inpNum.value);
    var hundred = Math.floor(num / 100);
    var ten = Math.floor(num % 100 / 10);
    var unit = Math.floor(num % 100 % 10);

    document.getElementById("display-read").innerHTML = hundred + " trăm " 
        + ten + " chục " 
        + unit + " đơn vị"
}