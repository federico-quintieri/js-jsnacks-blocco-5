const students = [
  {
    id: 1,
    name: "Marco Lanci",
    age: 32,
    class: "3C",
  },
  {
    id: 2,
    name: "Mario Banfi",
    age: 34,
    class: "4A",
  },
  {
    id: 3,
    name: "Luigi Banzi",
    age: 33,
    class: "5B",
  },
];

// Recupera i dati dello studente con id 2
// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }

const oggettoTrovato = students.find((curElement, curIndex) => {
  // La parola class è riservata in Javascript quindi non possiamo creare una variabile che si chiama class
  // Quindi dobbiamo assegnare un alias (studentClass) alla chiave
  const { id, name, age, class: studentClass } = curElement;
  // console.log(studentClass);
  // Ritorniamo se id è uguale a 2
  return id === 2;
});
console.log(oggettoTrovato);
