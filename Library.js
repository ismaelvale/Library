let addBook = document.getElementById("addBook");
let close = document.querySelector('.close');
let submit = document.getElementById('submitBook');
let newP = document.createElement('p');
let tSubmit = document.getElementById("bookTitle");
let aSubmit = document.getElementById('bookAuthor');
let pSubmit = document.getElementById('pages');
let rSubmit = document.getElementById('read');

class Book {
    constructor(title, author, pages) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
        this.info = function() {
            console.log(title, author, pages);
        }
    }   
};

class UI {
    static displayBooks() {
        const myLibrary = [
            {
                title: 'The Alchemist',
                author: 'Paulo Coelho',
                pages: '98'
            }
        ];
        const books = myLibrary;
        books.forEach((book) => UI.createBookCard(book))
    } 
    static createBookCard(book) {
        const list = document.querySelector('#BookLibrary');
        const card = document.createElement('div');
        card.setAttribute('id','bookCard');
        card.innerHTML = `
        <p>${book.title}</p>
        <p>by</p>
        <p>${book.author}</p>
        <p>${book.pages} pages</p>
        <p>Read?<p>
        <label class=switch>
            <input type=checkbox>
            <span class=\'slider round\'></span>
        </label> <br>
        <button class=remove>Remove</button>
        `;

        list.appendChild(card);
    }
    static deleteBook(elem) {
        if(elem.classList.contains('remove')){
            elem.parentElement.parentElement.remove();
        }
    }
};

document.addEventListener('DOMContentLoaded', UI.displayBooks);

addBook.addEventListener('click', function() {
    document.querySelector('.bookForm').style.display = 'flex';
});

close.addEventListener('click',function() {
    document.querySelector('.bookForm').style.display = 'none';
});

submit.addEventListener('click', (e) => {
    e.preventDefault();
    let title = tSubmit.value;
    let author = aSubmit.value;
    let pages = pSubmit.value;
    let book = new Book(title, author, pages);
    UI.createBookCard(book);
    document.querySelector('.bookForm').style.display = 'none';
}); 

document.getElementById('BookLibrary').addEventListener('click', (e) => {
    UI.deleteBook(e.target);
})