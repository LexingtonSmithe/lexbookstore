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

router.get('/books', function(req, res){
  console.log('Requesting Books');
  book.find({})
      .exec(function(err, books){
          if(err){
            console.log('Error getting the Books');
          } else {
            res.json(books);
            console.log(books);
          }
  });
});

router.get('/details/:id', function(req, res){
  console.log('Requesting Book');
  book.findById(req.params.id)
      .exec(function(err, book){
          if(err){
            console.log('Error getting the Book');
          } else {
            res.json(book);
            console.log(book);
          }
  });
});

router.post('/books', function(req, res){
  console.log('Adding a Book');
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

router.post('/books/:id', function(req, res){
  console.log('Updating a Book entry');
  var newBook = new book();
  newBook._id = req.params.id;
  console.log(newBook._id);
  console.log(req.params.id);
  newBook.title = req.body.title;
  newBook.author = req.body.author;
  newBook.url = req.body.url;
  newBook.genre = req.body.genre;
  newBook.yearPublished = req.body.yearPublished;
  newBook.description = req.body.description;
  newBook.upsert(function(err, addedBook) {
    if(err){
      console.log('Error adding the book');
      console.log(err);
    } else {
      console.log(addedBook._id);
      res.json(addedBook);
    }
  })
});

module.exports = router;
