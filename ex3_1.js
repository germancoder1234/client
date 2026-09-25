const productos = [
  { nombre: 'camiseta', precio: 15 },
  { nombre: 'pantalón', precio: 35 },
  { nombre: 'zapatos', precio: 50 },
  { nombre: 'calcetines', precio: 8 }
];


const productosCaros = productos
  .filter(prod => prod.precio > 20)
  .map(prod => prod.nombre);

console.log(productosCaros); 
document.write(productosCaros); 