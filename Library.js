let myLibrary = [];

function book (title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return title, author, pages, read
    }
};

    function addBookToLibrary () {
        myLibrary.push();
        return myLibrary;
    };

console.log(book.info());
