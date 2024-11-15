const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

// Il metodo filter restituisce un nuovo array contenente solo gli elementi dell'array di partenza che hanno soddisfatto la condizione nella callback function
// L'array risultato può essere meno lungo dell'attuale
// Il metodo push è implicito in caso di ritorno true della call back functions
const newArray = nums.filter((curElement, curIndex) => {
  return curElement % 2 === 0;
});

console.log(newArray);
