function Book (title, author, numberOfPages, readStatus) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.readStatus = readStatus;
    this.id = crypto.randomUUID();
}

Book.prototype.toggleRead = function () {
    this.readStatus = !this.readStatus;
};

const library = [];

function addBookToLibrary (title, author, numberOfPages, readStatus) {
    const newBook = new Book(title, author, numberOfPages, readStatus)
    library.push (newBook);

}

addBookToLibrary ("TBK", "Dostoyevsky", 1300, true);
addBookToLibrary ("Beyond Good And Evil", "Nietzsche", 500, false);
addBookToLibrary ("The stranger", "Camus", 170, true);

const books = document.querySelector (".books");
const addBtn = document.querySelector (".add-book");
const form = document.querySelector(".book-form");
displayBooks();
function displayBooks () {
    books.textContent = "";
        for (const book of library) {
        let card = document.createElement ('div');
        card.classList.add("book-card");
        card.dataset.id = book.id; 
        let title = document.createElement ("h2")
        let author = document.createElement ("p")
        let numberOfPages = document.createElement ("p")
        let readStatus = document.createElement ("p");
        let removeBtn = document.createElement("button");
        let toggleBtn = document.createElement("button");

        title.textContent = book.title;
        author.textContent = `Author: ${book.author}`;
        numberOfPages.textContent = `Pages: ${book.numberOfPages}`;
        readStatus.textContent = book.readStatus ? "Read": "Not read";
        removeBtn.textContent = "Remove";
        toggleBtn.textContent = "Toggle Read";
        removeBtn.addEventListener('click', () => removeBook(book.id));
        toggleBtn.addEventListener('click', () => toggleReadStatus(book.id));

        card.append(title, author, numberOfPages, readStatus, removeBtn, toggleBtn);
        books.append(card);
    }
}

function removeBook (id) {
    const index = library.findIndex (book => book.id === id);
    if (index !==-1) {
        library.splice (index, 1)
    }

    displayBooks();
}

function toggleReadStatus(id) {
    const book = library.find(book => book.id === id);
    if (book) {
        book.toggleRead();  //my prototype method
    }
    displayBooks();
}

addBtn.addEventListener ('click', () => {
    form.style.display = "block";

});

form.addEventListener ('submit', (event) => {
    event.preventDefault();
    let inputTitle = document.getElementById("title");
    let inputAuthor = document.getElementById("author");
    let inputPages = document.getElementById("numberOfPages");
    let inputStatus = document.getElementById("status")

    addBookToLibrary(
    inputTitle.value,
    inputAuthor.value,
    inputPages.value,
    inputStatus.checked
    );

    form.reset();
    form.style.display = "none";

    displayBooks();


})



