const myLibrary = [];
const library = document.querySelector("#library");
const newBook = document.querySelector("#newbook");
const dialog = document.querySelector("#bookinput");
const addBook = document.querySelector("#addbook");
const bookForm = document.querySelector("#bookform");
const cancel = document.querySelector("#cancel");

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    toggleStatus = () => {
        this.read = this.read ? false : true;
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBook(book) {
    let b = document.createElement("div");
    b.classList = "card";
    let title = document.createElement("div");
    title.textContent = `${book.title}`;
    let author = document.createElement("div");
    author.textContent = `by ${book.author}`;
    let pages = document.createElement("div");
    pages.textContent = `${book.pages} ${book.pages == 1 ? "page" : "pages"}`;
    let read = document.createElement("button");
    read.textContent = `${book.read ? "Read" : "Not Read"}`;
    read.classList = `${book.read ? "read" : "notread"} grow`;
    read.style.width = "80px";
    read.style.height = "30px";
    read.addEventListener("click", () => {
        book.toggleStatus();
        read.textContent = `${book.read ? "Read" : "Not Read"}`;
        read.classList = `${book.read ? "read" : "notread"} grow`;
    });
    let deleteButton = document.createElement("img");
    deleteButton.src = "img/remove.svg";
    deleteButton.style.height = "20px";
    deleteButton.classList = "remove grow";
    deleteButton.addEventListener("click", () => {
        let deleteIndex = myLibrary.indexOf(book);
        myLibrary.splice(deleteIndex, 1);
        library.removeChild(library.children[deleteIndex]);
    });
    b.appendChild(deleteButton);
    b.appendChild(title);
    b.appendChild(author);
    b.appendChild(pages);
    b.appendChild(read);
    library.appendChild(b);
}

function displayBooks() {
    for (book of myLibrary) {
        displayBook(book);
    }
}

theHungerGames = new Book("The Hunger Games", "Suzanne Collins", 384, true);
prideAndPrejudice = new Book("Pride and Prejudice", "Jane Austen", 259, false);
addBookToLibrary(theHungerGames);
addBookToLibrary(prideAndPrejudice);

displayBooks();

newBook.addEventListener("click", () => {
    dialog.showModal();
});

cancel.addEventListener("click", (e) => {
    e.preventDefault();
    bookForm.reset();
    dialog.close();
})

bookForm.addEventListener("submit", () => {
    let inputBook = new Book(document.querySelector("#title").value,
                            document.querySelector("#author").value,
                            parseInt(document.querySelector("#pages").value),
                            document.querySelector("#read").checked);
    bookForm.reset();
    myLibrary.push(inputBook);
    displayBook(inputBook);
});