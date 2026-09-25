const comentarios = [
{ id: 101, texto: 'Me encanta este post' },
{ id: 102, texto: 'Le daría una bofetada al autor' },
{ id: 103, texto: 'Buen contenido, gracias' }
];

const resultado = comentarios.find(item => item.texto.includes("bofetada"));

const posicion = comentarios.findIndex(items => items.texto.includes("bofetada"));

console.log(resultado); 
document.write(resultado.id);

console.log(posicion); 

document.write('<br />');
document.write(posicion); 