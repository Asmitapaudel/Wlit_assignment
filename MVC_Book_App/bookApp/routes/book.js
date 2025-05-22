const express = require("express");
const router = express.Router();
// const books = require("../resources/book");
const Book =require("../models/book.models")

// Route to display list of books
router.get("/", async function (req, res) {
  const books =await Book.find({});
  res.render("book", { title: "Book App Title", bookList: books });
});

// Route to show add book form
router.get("/add", function (req, res) {
  res.render("addBook", { title: "Add Book" });
});

// Route to save a new book
router.post("/save",async function (req, res) {
  // books.push({ ...req.body, _id: `00${books.length + 1}` });
try
  {const book =await Book.create(req.body)
  res.status(200).redirect("/books")}

  catch(err){
    res.status(500).json({message:err.message})
  }

  // res.redirect("/books");
});


router.get("/edit/:_id", async function (req, res, next) {
 try{ const book =await Book.findById(req.params._id);

  // console.log(book)
  res.render("editBook", { title: "Edit book", book });}
  catch(err){
      res.status(500).json({message:err.message})
  }
  // console.log(req.params._id);
  // const book = books.find((book) => book._id === req.params._id);
  // res.render("editBook", { title: "Edit Books", book });
});

router.post("/saveEdited/:_id",async function (req, res, next) {
 
   const book =await Book.findByIdAndUpdate(req.params._id,req.body);
   if(!book){
    return  res.status(404).json({message:"book not found"})
   }
  


 
  // const currIndex = books.findIndex((book) => req.params._id === book._id);
  // books.splice(currIndex, 1, { ...req.body, _id: req.params._id });
  res.redirect("/books");
});

router.post("/delete/:_id", function (req, res) {
  const book_id = req.params._id;


  
  const currIndex = books.findIndex((book) => book._id === book_id);
  // if (currIndex === -1) return res.status(404).send("Book not found");

  books.splice(currIndex, 1);
  res.redirect("/books");
});




module.exports = router;
