const express = require('express');
//const { Author, Book } = require('./models.js');
const app = express();
const PORT = process.env.PORT || 3000;



// app.get('/', async (response, request) => {
//     try {
//     response.json(Author);
//     } catch(error) {
//       console.log(`Something bad is happening: ${error}`);
//     } 
//   });
// const austen = await Author.findByPk(1);
// const austenbooks = await austen.getBooks();

app.listen(PORT, () => console.log(`Listening to bossonova on port ${PORT}`));