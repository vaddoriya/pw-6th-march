const books = [
  { title: "Book 1", author: "Author 1", year: 2005 },
  { title: "Book 2", author: "Author 2", year: 2015 },
  { title: "Book 3", author: "Author 3", year: 2025 },
];

const filteredBooks = books
  .filter(book => book.year >= 2010)
  .map(book => ({ ...book, author: book.author.toUpperCase() }));

console.log(filteredBooks);
