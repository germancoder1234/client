const carrito = [
{ articulo: 'Libro', precio: 15, cantidad: 2 },
{ articulo: 'Bolígrafo', precio: 2, cantidad: 5 },
{ articulo: 'Mochila', precio: 45, cantidad: 1 }
];

const resultado = carrito.reduce((total,articulo) => total + articulo.precio*articulo.cantidad,0)

