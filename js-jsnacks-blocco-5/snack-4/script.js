const posts = [
  { author: "Marco", date: "12/3/2021", content: "lorem ipsum..." },
  { author: "Luca", date: "30/6/2021", content: "lorem ipsum..." },
  { author: "Fabrizio", date: "12/9/2020", content: "lorem ipsum..." },
  { author: "Enrico", date: "09/12/2021", content: "lorem ipsum..." },
];

// Crea un nuovo array coi nomi di tutti gli autori
// Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']

// Nuovo array globale per contenere la proprietà author di ogni oggetto nell'array precedente
const newArray = [];

//
posts.forEach((curElement, curIndex) => {
  // Destructuring oggetto
  const { author, date, content } = curElement;
  // Pushamo la proprietà con chiave author
  // Nel foreach il push non è implicito
  newArray.push(author);
});

console.log(newArray);
