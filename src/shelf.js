function shelfBook(book, targetShelf) {
  //shelfBook is the function (test line 11-12)
  //book is a parameter because the first parameter on test line 32&34 are books
  //With objects inside. targetShelf because the 2nd parameter is the variable
  //sciFishelf which is what holds the values
  if (targetShelf.length === 3) {
    return targetShelf;
    //targetShelf.unshift(book)
  }
  targetShelf.unshift(book);
}

function unshelfBook(book, targetShelf) {
  for (var i = 0; i < targetShelf.length; i++) {
    if (targetShelf[i].title == book) {
      targetShelf.splice(i, 1);
    }
  }
}

function listTitles(targetShelf) {
  var bookTitles = [];
  for (var i = 0; i < targetShelf.length; i++) {
    bookTitles.push(targetShelf[i].title);
  }
  return bookTitles.join(", ");
}

function searchShelf(targetShelf, bookTitle) {
  //console.log(targetShelf[0]);
  for (var i = 0; i < targetShelf.length; i++) {
    //console.log(targetShelf[i]);
    if (targetShelf[i].title == bookTitle) {
      //not targetShelf[0] because it is within the for loop. needs to be dynamic
      return true;
    }
  }
  return false;
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf,
};
