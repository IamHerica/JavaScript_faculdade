function ligar() {

    if(document.getElementById("button").value == "Ligar") {
         document.getElementById("button").value = "Desligar";
        document.getElementById("img").src = "img/lamp_on.gif";
    } else {
         document.getElementById("button").value = "Ligar";
         document.getElementById("img").src = "img/lamp_off.gif";
    }
}



