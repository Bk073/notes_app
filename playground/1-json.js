const fs = require('fs');

// const book = {
//     title: 'Ego is the enemy',
//     authors: 'Ryan Holiday'
// };
//
// const book_JSON = JSON.stringify(book);
// fs.writeFileSync('playground/1-json.json', book_JSON);

const dataBuffer = fs.readFileSync('playground/1-json.json');
// console.log(dataBuffer.toString());
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON); //oarse data into object

console.log(dataJSON);