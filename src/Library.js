function createLibrary(name) {
  var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    },
    // isOpen: true,
    // capacity: 50,
  };
  return library;
}

function addBook(library, book) {
  //find the shelf to add it
  var shelfForBook = library.shelves[book.genre];
  shelfForBook.push(book);
  //put the book onto the shelf once we find it
  //console.log(book.genre);
}
//find a book to unshelf
//add book to checkout
//print message
function checkoutBook(library, book) {
  for (var i = 0; i < library.length; i++) {}
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
};
