const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const book = require('../models/book');

const config = require('../../config.json');
const db = config.mongoURL;

mongoose.Promise = global.Promise;

mongoose.connect(db, {useNewUrlParser: true}, function(err){
  if(err){
    console.log('Connection Error');
  } else {
    console.log('Connected to MongoDB');
  }
})

//retrieve all books

router.get('/books', function(req, res){
  console.log('Requesting Books');
  book.find({})
      .exec(function(err, books){
          if(err){
            console.log('Error getting the Books');
          } else {
            res.json(books);
            //console.log(books);
          }
  });
});

// retrieve a book

router.get('/details/:id', function(req, res){
  console.log('Requesting Book');
  book.findById(req.params.id)
      .exec(function(err, book){
          if(err){
            console.log('Error getting the Book');
          } else {
            res.json(book);
            //console.log(book);
          }
  });
});

// add a book record

router.post('/books', function(req, res){
  console.log('Adding a Book: ' + req.body.title);
  var newBook = new book();
  newBook.title = req.body.title;
  newBook.author = req.body.author;
  newBook.url = req.body.url;
  newBook.genre = req.body.genre;
  newBook.yearPublished = req.body.yearPublished;
  newBook.description = req.body.description;
  newBook.save(function(err, addedBook) {
    if(err){
      console.log('Error adding the book');
    } else {
      res.json(addedBook);
    }
  })
});

// update a book record

router.post('/books/:id', function(req, res){
  console.log('Updating a Book entry: ' + req.body.title);
  var newBook = new book();
  newBook._id = req.params.id;
  //console.log(newBook._id);
  //console.log(req.params.id);
  newBook.title = req.body.title;
  newBook.author = req.body.author;
  newBook.url = req.body.url;
  newBook.genre = req.body.genre;
  newBook.yearPublished = req.body.yearPublished;
  newBook.description = req.body.description;
  var options = { upsert: true }
  book.findByIdAndUpdate(req.params.id, newBook, function(err, addedBook) {
    if(err){
      console.log('Error adding the book: ' + req.body.title);
      console.log(err);
    } else {
      //console.log(addedBook);
      res.json(addedBook);
    }
  })
});

// delete a book

router.delete('/books/:id', function(req, res){
  console.log('Deleting Book: ' + req.params.id);
  book.findByIdAndRemove(req.params.id, function(err, deletedBook){
    if(err){
      console.log('Error Deleting Book');
    } else {
      console.log(deletedBook);
    }
  })
});

module.exports = router;
