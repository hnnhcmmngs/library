const library = document.querySelector("#library");
const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read" : "not read yet"}`
    };
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks() {
    for (book of myLibrary) {
        let b = document.createElement("div");
        let title = document.createElement("div");
        title.textContent = `Title: ${book.title}`;
        let author = document.createElement("div");
        author.textContent = `Author: ${book.author}`;
        let pages = document.createElement("div");
        pages.textContent = `${book.pages} pages`;
        let read = document.createElement("div");
        read.textContent = `${book.read ? "Read" : "Not Read"}`;
        b.style.border = "3px solid blue";
        b.appendChild(title);
        b.appendChild(author);
        b.appendChild(pages);
        b.appendChild(read);
        library.appendChild(b);
    }
}

theHungerGames = new Book("The Hunger Games", "Suzanne Collins", 384, true);
prideAndPrejudice = new Book("Pride and Prejudice", "Jane Austen", 259, false);
addBookToLibrary(theHungerGames);
addBookToLibrary(prideAndPrejudice);