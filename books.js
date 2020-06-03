const addButton = document.getElementById("addButton");
let container = document.getElementById('container');
let myLibrary = JSON.parse(window.localStorage.getItem('library'));
myLibrary = myLibrary === null ? [] : myLibrary;

function Book(title, author, pages, read, index)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.index = index;

    this.info = function() {
        let readYet;
        if(read)
            readYet = "read";
        else
            readYet = "not read yet"

        return title + " by " + author + ", " + pages + ", " + readYet;
    }

    this.toggleRead = function() {
        this.read = !this.read;
    }
}

function saveToLocalStorage() {
    localStorage.setItem('library', JSON.stringify(myLibrary));
}

function addBookToLibrary(book) 
{
    myLibrary.push(book);

    const bookCell = document.createElement('div');
    bookCell.classList.add("bookCell");

    const bookTitle = document.createElement('div');
    bookTitle.textContent = myLibrary[myLibrary.length - 1].title;

    const bookAuthor = document.createElement('div');
    bookAuthor.textContent = myLibrary[myLibrary.length - 1].author;

    const bookPages = document.createElement('div');
    bookPages.textContent = myLibrary[myLibrary.length - 1].pages;

    const deleteBook = document.createElement('img');
    deleteBook.src = "trash.png";
        
    bookCell.appendChild(bookTitle);
    bookCell.appendChild(bookAuthor);
    bookCell.appendChild(bookPages);
    bookCell.appendChild(deleteBook);
    container.appendChild(bookCell);

    saveToLocalStorage();
}

function render()
{
    for(let i = 0; i < myLibrary.length; i++)
        addBookToLibrary(myLibrary[i])
}


addButton.addEventListener('click', () => {
    const titleInput = document.getElementById('titleInput');
    const authorInput = document.getElementById('authorInput');
    const pagesInput = document.getElementById('pagesInput');
    console.log(titleInput.value + "  " + authorInput.value + "  " +  pagesInput.value)
    addBookToLibrary(new Book(titleInput.value, authorInput.value, pagesInput.value, false, myLibrary.length));
});

render();