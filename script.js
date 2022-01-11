let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function(){
    return this.title + ' by ' + this.author + ', ' + this.pages + ' pages, ' + this.read;
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

function displayBooksInLibrary(){
    const bookDisplayChilds = document.querySelectorAll('#book-display *')
    bookDisplay.remove(bookDisplayChilds)
    myLibrary.forEach(book =>{
        const bookCard= document.createElement('div');
        bookCard.classList.add('book-card');

        const bookInfoList = document.createElement('ul');
        bookInfoList.classList.add('book-info-list');
        bookCard.appendChild(bookInfoList)

        for (const key in book) {
            if (key != 'info') {
                const bookInfoLine = document.createElement('li')
                bookInfoLine.textContent = key + ': ' + book[key];
                bookInfoList.appendChild(bookInfoLine)
            }
            
        }

        bookDisplay.appendChild(bookCard)
    })
}

const newBookButton = document.querySelector('#new-book')
const bookForm = document.querySelector('#form-container')
const bookDisplay = document.querySelector('#book-display')

newBookButton.addEventListener('click', () =>{
    bookForm.classList.remove('invisible');
})

const book1 = new Book('Early Years', 'TurtleMe', 193, 'read');
const book2 = new Book('New Heights', 'TurtleMe', 202, 'read');
const book3 = new Book('A Game of Thrones', 'George R. R. Martin', 694, 'not read');

addBookToLibrary(book1)
addBookToLibrary(book3)
displayBooksInLibrary();