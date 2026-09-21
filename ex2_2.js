let num = Number(prompt("Introduce un número"));
let contador = 0;

if (isNaN(num) || num <= 1) {
    alert("Por favor, introduce un número válido mayor que 1.");
}else{

if(num%2==0){
    alert("Es un número par y no es primo")
}else{



    for (let i = 1; i <= num; i++) {
        
        if (num % i == 0) {
            contador++;
        }
    }

   
    if (contador == 2) {
        alert("El número es impar y primo.");
    } else {
        alert("El número es impar y no primo ");
    }
}
}