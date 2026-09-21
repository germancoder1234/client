
let num = Number(prompt("Introduce un número"))

let resultado=0;


if (isNaN(num)) {
    alert(" No es un número válido.");
} else {

    for(let i=num;i>=1;i--){

        resultado+=num-i;


    }

alert("El número es: "+ resultado);

}
