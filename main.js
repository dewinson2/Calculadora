let btns = document.querySelectorAll(".btn");
let pantalla = document.querySelector("#pantalla");
let AC = document.getElementById("AC");
let igual = document.getElementById("igual");

let primerClick = true;

// Event listener para la entrada en pantalla
pantalla.addEventListener("input", function() {
    primerClick = false;
});

btns.forEach(function(btn) {
    btn.addEventListener("click", function() {
        // Limpiar la pantalla si es el primer clic
        if (primerClick) {
            pantalla.textContent = "";
            primerClick = false;
        }

        // Verificar si el botón es el botón "C" para borrar el último carácter
        if (btn.textContent === "C") {
            pantalla.textContent = pantalla.textContent.slice(0, -1);
        }
        // Verificar si el botón es el botón "=" para evaluar la expresión
        else if (btn.textContent === "=") {
            try {
                pantalla.textContent = eval(pantalla.textContent);
                primerClick = true; // Restablecer la bandera después de "="
            } catch (error) {
                pantalla.textContent = "Error";
            }
        }
        // Verificar si el botón es el botón "AC" para limpiar la pantalla
        else if (btn.textContent === "AC") {
            pantalla.textContent = "";
            primerClick = true; // Restablecer la bandera al borrar
        }
        // Para todos los demás botones, agregar su contenido de texto a la pantalla
        else if (btn.textContent !== "C") {
            pantalla.textContent += btn.textContent;
        }
    });
});
