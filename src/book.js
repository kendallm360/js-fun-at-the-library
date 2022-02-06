function createTitle(title) {
  //return "The " + title;
  //for (var i = 0; i < createTitle.length; i++) {
  return "The " + title;
  }
//}
createTitle("Storm's Awakening");

function buildMainCharacter (name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns,
  };
  return character;
  }
//







  function saveReview (string, reviews) {
    for (var i = 0; i <= reviews.length; i++) {
      if (reviews[i] !== string) {
        return reviews.push(string);
      } else {return reviews};
    }
  }




/*
function saveReview (string, reviews) {
  var containsString = false;
  for (var i = 0; i <= reviews.length; i++) {
    if (reviews[i] === string) {
      containsString = true;
    }
  }
  if (containsString !== true){
    reviews.push(string);
  }
}
*/





function calculatePageCount (bookTitle) {
  return bookPageCount = bookTitle.length * 20;

}

function writeBook (bookTitle, bookCharacter, bookGenre) {
  var bookInfo = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: bookGenre
  }
return bookInfo
}


function editBook (dragonBook) {
dragonBook.pageCount = bookPageCount * .75;
//why does this work ^^^^ where does bookPageCount come from???
//console.log(dragonBook);
}






module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}





//for (var i = 0; i < )
