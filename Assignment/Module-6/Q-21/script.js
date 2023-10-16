let in1 = document.getElementById('v1').value;
let in2 = document.getElementById('v2').value;
let in3 = document.getElementById('v3').value;
let in4 = document.getElementById('v4').value;
let in5 = document.getElementById('v5').value;
let in6 = document.getElementById('v6').value;
let in7 = document.getElementById('v7').value;

function add() {
    total.value = parseInt(v1.value) + parseInt(v2.value) + parseInt(v3.value) + parseInt(v4.value) + parseInt(v5.value) + parseInt(v6.value) + parseInt(v7.value);
    document.getElementById("total").innerHTML = (+ total.value);
}
function percentage() {
    percent.value = (parseInt(v1.value) + parseInt(v2.value) +parseInt(v3.value) + parseInt(v4.value)+parseInt(v5.value) + parseInt(v6.value)+parseInt(v7.value))/(350)*100;
    document.getElementById("percent").innerHTML = (+ percent.value);
}