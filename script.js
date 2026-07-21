function Book (title, author, numberOfPages, readStatus) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.readStatus = readStatus;
    this.id = crypto.randomUUID();
}

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

function displayBooks () {
    books.textContent = "";
        for (const book of library) {
        let card = document.createElement ('div');
        card.classList.add("book-card");
        let title = document.createElement ("h2")
        let author = document.createElement ("p")
        let numberOfPages = document.createElement ("p")
        let readStatus = document.createElement ("p")

        title.textContent = book.title;
        author.textContent = `Author: ${book.author}`;
        numberOfPages.textContent = `Pages: ${book.numberOfPages}`;
        readStatus.textContent = book.readStatus ? "Read": "Not read"

        card.append (title, author, numberOfPages, readStatus);
        books.append (card);

    }
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
    
    displayBooks();

})



