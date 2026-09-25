const inventario = [
  { nombre: 'Teclado Mecánico', precio: 120, stock: true },
  { nombre: 'Monitor 4K', precio: 600, stock: true },
  { nombre: 'Ratón Gaming', precio: 45, stock: false },
  { nombre: 'Auriculares Hifi', precio: 250, stock: true }
];

// Corregimos "productos.stock" por "item.stock" y filtramos correctamente
const resultado = inventario
  .filter(item => item.precio < 500 && item.stock)
  .map(item => item.nombre);

console.log(resultado); 
document.write(resultado); 