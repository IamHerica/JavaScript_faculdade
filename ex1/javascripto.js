function mudar() {


     var p = document.getElementsByTagName("p");
     p[0].innerText = "Talvez seja magica sim...";
     p[1].style.fontSize = "40px";
     p[2].style.textAlign="center";
     p[3].style.color="green";
     p[3].style.fontSize="10px";
     p[5].innerHTML = "JavaScript não é Java";
     p[5].style.fontStyle = "italic";

}

function mudarCor() {

        var x = document.getElementsByTagName("p");
        var i;

        for (i = 0; i <= 6; i++) {
          x[i++].style.backgroundColor = "yellow";
        }
    }

