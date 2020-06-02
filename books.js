let container = document.getElementById('container');
let myLibrary = [];

function Book(title, author, pages, read)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        let readYet;
        if(read)
            readYet = "read";
        else
            readYet = "not read yet"

        return title + " by " + author + ", " + pages + ", " + readYet;
    }
}

function addBookToLibrary(title, author, pages, read) 
{
    myLibrary.push(new Book(title, author, pages, read));
}

/* TESTING */
addBookToLibrary("Sample Title", "John Doe", 325, true);
addBookToLibrary("Another Title", "Jane Doe", 375, true);
addBookToLibrary("Sample Title", "John Doe", 325, true);


function render()
{
    for(let i = 0; i < myLibrary.length; i++)
    {
        const bookCell = document.createElement('div');
        bookCell.classList.add("bookCell");
        container.appendChild(bookCell);
    }
}

render();