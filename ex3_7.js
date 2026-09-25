const pasajeros = [
{ nombre: 'Luis', check: true, vip: false },
{ nombre: 'Marta', check: true, vip: true },
{ nombre: 'Carlos', check: true, vip: false }
];

const todos = pasajeros.every(pasajero => pasajero.check);

const algunos = pasajeros.some(pasajero => pasajero.vip);


console.log(todos)

console.log(algunos)