function decide() {
    let wall = Math.sqrt(elementS.value);
    console.log(wall);

    let diametr = elementR.value * 2;
    console.log(diametr);

    if ((wall - diametr) >= elementK.value) {
        result.value = "Да, можно";
        check = true;
    } else {
        result.value = "Нет, нельзя";
        check = false;
    }
}

function send() {
    if (check) {
        document.getElementById("UserEnter").submit();
    } else {
        alert("Ввод неверный, повторите попытку")
    }
}

let elementS = document.getElementById("S");
let elementR = document.getElementById("R");
let elementK = document.getElementById("K");
let result = document.getElementById("result");
let check;

let verificationButton = document.getElementById("verify");
verificationButton.addEventListener("click", decide);

let sendButton = document.getElementById("send");
sendButton.addEventListener('click', send)