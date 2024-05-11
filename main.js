let btns = document.querySelectorAll(".btn");
let pantalla = document.querySelector("#pantalla");
let AC = document.getElementById("AC");
let igual = document.getElementById("igual");

let primerClick = true;
pantalla.addEventListener("input", function() {
    primerClick = false;

    

});
btns.forEach(function(btn) {
    btn.addEventListener("click", function() {
        if (primerClick) {
            pantalla.textContent = "";
            primerClick = false;
        }

        // Verificar si el botón es un operador
        if (btn.textContent === "=") {
            try {
                pantalla.textContent = eval(pantalla.textContent);
                primerClick = true; // Restablecer la bandera después de "="
            } catch (error) {
                pantalla.textContent = "Error";
            }
        } else if (btn.textContent === "AC") {
            pantalla.textContent = "";
            primerClick = true; // Restablecer la bandera al borrar
        } else {
            pantalla.textContent += btn.textContent;
        }
    });
});
