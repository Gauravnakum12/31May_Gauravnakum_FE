let in1 = document.getElementById('v1').value;
        let in2 = document.getElementById('v2').value;

        function add() {
            ans.value = parseInt(v1.value) + parseInt(v2.value);
            document.getElementById("ans").innerHTML = + ans.value;
        }
        function sub() {
            ans.value = parseInt(v1.value) - parseInt(v2.value);
            document.getElementById("ans").innerHTML = + ans.value;
        }
        function mult() {
            ans.value = parseInt(v1.value) * parseInt(v2.value);
            document.getElementById("ans").innerHTML = + ans.value;
        }
        function divi() {
            ans.value = parseInt(v1.value) / parseInt(v2.value);
            document.getElementById("ans").innerHTML =  + ans.value;
        }
        function percent() {
            ans.value = (parseInt(v1.value) / parseInt(v2.value)) * 100;
            document.getElementById("ans").innerHTML =  + ans.value + '%';
        }