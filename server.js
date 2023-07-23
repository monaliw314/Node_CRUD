const express = require('express');
const app = express();
const port = 3000;

let books = require('./data'); // Import the dummy data module

app.use(express.json());

// GET route for fetching all books
app.get('/books', (req, res) => {
  res.json(books);
});

app.post('/add-books',(req,res)=>{
    const newData = req.body;
    books.push(newData);
    res.status(201).json(newData);
});

app.delete('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    books = books.filter((book) => book.id !== bookId);
    res.json({ message: 'Book deleted successfully' });
});


// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

