const express = require("express");
const router = express.Router();
const books = require("../resources/book");

// Route to display list of books
router.get("/", function (req, res) {
  res.render("book", { title: "Book App Title", bookList: books });
});

// Route to show add book form
router.get("/add", function (req, res) {
  res.render("addBook", { title: "Add Book" });
});

// Route to save a new book
router.post("/save", function (req, res) {
  books.push({ ...req.body, _id: `00${books.length + 1}` });
  res.redirect("/books");
});


router.get("/edit/:_id", function (req, res, next) {
  console.log(req.params._id);
  const book = books.find((book) => book._id === req.params._id);
  res.render("editBook", { title: "Edit Books", book });
});

router.post("/saveEdited/:_id", function (req, res, next) {
  const currIndex = books.findIndex((book) => req.params._id === book._id);
  books.splice(currIndex, 1, { ...req.body, _id: req.params._id });
  res.redirect("/books");
});

router.post("/delete/:_id", function (req, res) {
  const book_id = req.params._id;
  const currIndex = books.findIndex((book) => book._id === book_id);
  if (currIndex === -1) return res.status(404).send("Book not found");

  books.splice(currIndex, 1);
  res.redirect("/books");
});




module.exports = router;
