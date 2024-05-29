const myLibrary = [];

function Book(title, author, pageNumber, read, index) {
    this.title = title;
    this.author = author;
    this.pageNumber = pageNumber + " pages";
    this.read = read;
    this.index = index;
    this.bookInfo = function() {
        return this.title + ' by ' + this.author + ', ' + this.pageNumber + ' pages, ' + this.read;
    }
}

const hobbit = new Book('Hobbit','J.R.R. Tolkien', 295, 'not read yet',0);
myLibrary.push(hobbit);
console.log(myLibrary);

function displayLib() {
    for (const book of myLibrary) {
        displayBook(book);
    }
}

function displayBook(book) {
    const newBook = document.createElement("div");
    newBook.className = "book";

    newBook.id = book.index;

    const title = document.createElement("h4");
    title.textContent = book.title;
    title.className = "bookElement";

    const author = document.createElement("p");
    author.textContent = book.author;
    author.className = "bookElement"

    const pages = document.createElement("p");
    pages.textContent = book.pageNumber;
    pages.className = "bookElement";

    const read = document.createElement("button");
    read.textContent = book.read;
    read.className = "bookElement";
    read.addEventListener('click', () => {
        if (book.read == 'not read yet') {
            book.read = 'have read';
            read.textContent = book.read;
        } else {
            book.read = 'not read yet'
            read.textContent = book.read;
        }
    })
    const remove = document.createElement("button");
    remove.textContent = 'remove';
    remove.className = "book";
    remove.addEventListener('click', () => {
        const element = document.getElementById(book.index);
        element.remove();
    })
    newBook.appendChild(title);
    newBook.appendChild(author);
    newBook.appendChild(pages);
    newBook.appendChild(read);
    newBook.appendChild(remove);
    document.getElementById('bookContainer').appendChild(newBook);
}

const dialog = document.querySelector('dialog');
const addButton = document.getElementById('addBook');
addButton.addEventListener('click', () => {
    dialog.showModal();
});

const addEntry = document.getElementById('addEntry');
const form = document.getElementById('addBookForm');
addEntry.addEventListener('click', (event) => {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pageNumber = document.getElementById('pages').value;
    const read = document.querySelector('input[name="yes"]:checked') ? 'have read' : 'not read yet';
    const newBook = new Book(title, author, pageNumber, read, myLibrary.length);
    myLibrary.push(newBook);
    dialog.close();
    displayBook(newBook);
    form.reset();
    
});

const cancelButton = document.getElementById('cancelEntry');
cancelButton.addEventListener('click', () => {
    dialog.close();
});
displayLib();