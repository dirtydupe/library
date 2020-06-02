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

function addBookToLibrary() 
{

}

function render()
{
    
}