function find_element () {
    const secondNameNode = document.getElementById("second_name");
    secondNameNode.innerHTML = "<b>Ostanina</b>"

    const nameNode = document.getElementById("name");
    nameNode.innerHTML = "<b>Valeriya</b>"

    const surnameNode = document.getElementById("surname");
    surnameNode.innerHTML = "<b>Denisovna</b>"

    const genderNode = document.getElementById("gender");
    genderNode.innerHTML = "<b>Female</b>"

    const hometownNode = document.getElementById("hometown");
    hometownNode.innerHTML = "<b>Tver</b>"
}
    
let button = document.getElementById("button_latin");
button.addEventListener("click", find_element);
