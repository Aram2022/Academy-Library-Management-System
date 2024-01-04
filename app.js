const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

const fs = require('fs'); // file system
const booksFilePath = path.join(__dirname, 'schemas', 'books.json');
const booksData = JSON.parse(fs.readFileSync(booksFilePath, 'utf-8'));

app.get('/books/:isbn', (req, res) => {
    const isbn = req.params.isbn;
    const book = booksData.find(book => book.isbn === isbn);
  
    if (!book) {
      res.status(404).send('Book not found');
      return;
    }
  
    res.render('book', { book });
});  


// Set EJS as the view engine
app.set('view engine', 'ejs');

// Specify the directory where EJS files are located
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
  
// Define a route to render the index.ejs file
app.get('/', (req, res) => {
    res.render('index', {booksData}); 
});

app.get('/catalog', (req, res) => {
    res.render('catalog', {booksData}); 
});
  
app.get('/login', (req, res) => {
    res.render('login'); 
});

app.get('/book', (req, res) => {
    res.render('book', {booksData});
});
   
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});




// const express = require('express');
// const mongoose = require('mongoose');
// const Book = require('./schema');
// const app = express();
// const port = 3003;

// const mongoDB = async() => {
// 	try {
// 		const conn = await mongoose.connect('mongodb://127.0.0.1:27017/book');
// 		console.log(`MongoDB connected: ${conn.connection.host}:${conn.connection.port}`);
// 	} catch (error) {
// 		console.log(error);
// 		process.exit(1);
// 	}
// };

// mongoDB();

// app.use(express.json());
// app.post('/api/books', async(req, res) => {
// 	try {
// 		const book = new Book(req.body);
// 		const x = await book.save();
// 		res.status(201).json(book);
// 	} catch (error) {
// 		res.status(400).json({message: error});
// 	}
// });

// app.listen(port, () => {
// 	console.log(`Server is running on port:${port}`);

// })





// const fs = require('fs'); // Require the 'fs' module for file system operations


// // Read books from the JSON file
// const booksData = fs.readFileSync('books.json', 'utf8');
// const books = JSON.parse(booksData);

// app.get('/books', (req, res) => {
//     res.render('books', { books });
// });


// const User = require('./models/user'); 

// const UserController = { 
//     listUsers: function(req, res) { 
//         User.find({}, function(err, users) { 
//             if (err) { 
//                 res.status(500).send(err); 
//             } else { 
//                 res.render('users', { users: users }); 
//             } 
//          }); 
//       } 
// } 
// module.exports = UserController;

// const { Book, User, Loan } = require('./schemas'); // Import the JSON data 




// // app.js (continued)
// app.get('/books', (req, res) => {
//   const books = Book.getAll();
//   res.render('books', { books }); // Render the 'books' view and pass data
// });

// app.get('/books/:id', (req, res) => {
//   const bookId = req.params.id;
//   const book = Book.getById(bookId); // Assuming you have a method to get a book by ID
//   res.render('bookDetails', { book }); // Render the 'bookDetails' view and pass data
// });

// // Your other routes and logic go here...




// app.post('/api/users', (req, res) => {
//   // Handle POST request to create a new user
//   res.send('User created successfully.');
// });

// app.put('/api/users/:id', (req, res) => {
//   // Handle PUT request to update a user by ID
//   res.send(`User ${req.params.id} updated successfully.`);
// });

// app.delete('/api/users/:id', (req, res) => {
//   // Handle DELETE request to delete a user by ID
//   res.send(`User ${req.params.id} deleted successfully.`);
// });


// // app.js (continued)
// app.get('/users/:id', (req, res) => {
//   const userId = req.params.id;
//   res.send(`User ID: ${userId}`);
// });


// // app.js (continued)
// app.use(express.static('public'));

