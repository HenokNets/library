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

console.log (library);