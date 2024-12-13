function solicitarNF() {
    let numeroUsuario = prompt("Introduce un número para generar la serie de Fibonacci ¡Ojo! Debe ser entero y positivo:");

    // Validación de la entrada
    if (numeroUsuario === null || numeroUsuario.trim() === "" || isNaN(numeroUsuario)) {
        alert("Dato no válido. Recuerda ingresar un número entero positivo."); 
        return solicitarNF();
    }

function Fibonacci(n) {
    // Lógica de la serie
    let serie = [0, 1]; 
    for (let i = 2; i < n; i++) {
        serie.push(serie[i - 1] + serie[i - 2]); 
    }
    return serie.slice(0, n);
}

    let numero = parseInt(numeroUsuario);

    // Se comprueba si la entrda cumple con ser un nùmero entero positivo
    if (numero <= 0 || !Number.isInteger(numero)) {
        alert("Por favor, introduce un número entero positivo"); 
        return solicitarNF(); 
    }

    // Se genera la serie de Fibonacci
    let serieFibonacci = Fibonacci(numero);

    document.getElementById("resultado").innerHTML = `La serie de Fibonacci con ${numero} términos es: ${serieFibonacci.join(", ")}.`;
}

document.addEventListener("DOMContentLoaded", () => {
    solicitarNF();
});
