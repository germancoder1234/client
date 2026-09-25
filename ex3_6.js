const preciosUSD = [10, 25.5, 100];

const preciosEUR = preciosUSD.map(precio => `${(precio * 0.92).toFixed(2)} €`);
