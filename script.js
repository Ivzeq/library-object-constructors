let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = ()=>{return this.title + ' by ' + this.author + ', ' + this.pages + ' pages, ' + this.read;}
    this.readBook = ()=>{this.read == 'read'? this.read = 'not read': this.read = 'read';}
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

function displayBooksInLibrary(){
    bookDisplay.innerHTML = "";
    myLibrary.forEach(book =>{
        const bookCard= document.createElement('div');
        bookCard.classList.add('book-card');

        const bookInfoList = document.createElement('ul');
        bookInfoList.classList.add('book-info-list');
        bookCard.appendChild(bookInfoList)

        for (const key in book) {
            if (key != 'info' && key != 'readBook') {
                const bookInfoLine = document.createElement('li')
                bookInfoLine.textContent = key + ': ' + book[key];
                bookInfoList.appendChild(bookInfoLine)
            }
            
        }
        
        const bookButtonContainer = document.createElement('div');
        bookButtonContainer.classList.add('remove-button-container');
        bookCard.appendChild(bookButtonContainer)

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-button');
        removeButton.addEventListener('click', ()=>{
            myLibrary.splice(myLibrary.indexOf(book),1)
            displayBooksInLibrary();
        })
        
        const readUnreadButton = document.createElement('button');
        readUnreadButton.textContent = "Read/unread";
        readUnreadButton.classList.add('read-unread-button');
        readUnreadButton.addEventListener('click', ()=>{
            book.readBook();
            displayBooksInLibrary();
        })

        bookButtonContainer.appendChild(removeButton)
        bookButtonContainer.appendChild(readUnreadButton)

        bookDisplay.appendChild(bookCard)
    })
}



const newBookButton = document.querySelector('#new-book')
const displayButton = document.querySelector('#display-books')
const addBookButton = document.querySelector('#add-book')
const bookForm = document.querySelector('#form-container')
const bookDisplay = document.querySelector('#book-display')

const formTitle = document.querySelector('#form-title')
const formAuthor = document.querySelector('#form-author')
const formPages = document.querySelector('#form-pages')
const formRead = document.querySelector('#form-read')

newBookButton.addEventListener('click', () =>{
    bookForm.classList.remove('invisible');
})

addBookButton.addEventListener('click', ()=>{
    addBookToLibrary(new Book(formTitle.value, formAuthor.value, formPages.value, formRead.value));
    displayBooksInLibrary();
})

displayButton.addEventListener('click', displayBooksInLibrary);

const book1 = new Book('Early Years', 'TurtleMe', 193, 'read');
const book2 = new Book('New Heights', 'TurtleMe', 202, 'read');
const book3 = new Book('A Game of Thrones', 'George R. R. Martin', 694, 'not read');

addBookToLibrary(book1)
addBookToLibrary(book3)