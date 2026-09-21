let filas = Number(prompt("Introduce el número de filas:"));
let columnas = Number(prompt("Introduce el número de columnas:"));

if (isNaN(filas) || filas <= 0 || !Number.isInteger(filas)) {
    alert("Por favor, introduce un número entero válido de filas mayor que 0.");
} else if (isNaN(columnas) || columnas <= 0 || !Number.isInteger(columnas)) {
    alert("Por favor, introduce un número entero válido de columnas mayor que 0.");
} else {
    let numero = filas * columnas;



    for (let i = 1; i <= filas; i++) {
        document.write("<tr>");

        for (let j = 1; j <= columnas; j++) {
            document.write("<td>" + numero + "</td>");
            numero--;
        }

        document.write("</tr>");
    }

    document.write("</table>");
}
