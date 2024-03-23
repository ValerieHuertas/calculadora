function cambiar() {
    let variable =document.getElementById("noche");
    let hojaEstilo = document.getElementById("hoja-estilo");

    variable.classList.toggle("dia")
    if (hojaEstilo.getAttribute("href") === "css/style.css") {
        hojaEstilo.setAttribute("href", "css/styledark.css");
    } else {
        hojaEstilo.setAttribute("href", "css/style.css");
    }
}

const pantalla = document.querySelector(".contEscritura");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

        if (boton.id === 'ac') {
            pantalla.value = "0";
            return;
        }

        if (boton.id === "borrar") {
            if(pantalla.textContent.length === 1){
                pantalla.textContent = "0";
            }else{
                pantalla.value = pantalla.value.slice(0, -1);
            }
            return;

        }

        if (boton.id === "igual") {
            pantalla.value = calcularExpresion(pantalla.value);
            return;
        }
        
        function calcularExpresion(expresion) {
            try {
                return eval(expresion);
            } catch (error) {
                return 'Error';
            }
        }

        if (pantalla.value === "0") {
            pantalla.value = botonApretado;
        } else {
            pantalla.value += botonApretado;
        }
    });
});


