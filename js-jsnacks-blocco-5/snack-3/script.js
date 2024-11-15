const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

// Il metodo map crea un nuovo array dove ad ogni elemento dell'array viene eseguita una funzione di callback
// Questa funzione deve avere un ritorno che sarà il nuovo elemento
// Il nuovo array creato avrà lo stesso numeri di elementi dell'array dove è applicato il map

const newArray = numbers.map((curElement, curIndex) => {
  const newElement = curElement + 1;
  return newElement;
});

console.log(newArray);

console.log(numbers);
