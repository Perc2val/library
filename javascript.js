const body = document.querySelector("body")
const bookList = document.querySelector(".bookList")

const myLibrary = [];

function Book(title, author, pages, read){
    if (!new.target){
        throw Error("NEWWWWW")
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
    this.info = function() {
        console.log(`${this.title} by ${this.author}, ${this.pages}, ${this.read}`)
    }
};

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
};

function displayLibrary(){
    bookList.innerHTML = "";
    myLibrary.forEach(element => {
        let shell = document.createElement("div");
        bookList.appendChild(shell);
        shell.classList.add("shell")
        let heading = document.createElement("h3");
        heading.textContent = `Title: ${element.title}`;
        shell.appendChild(heading);
        let showAuthor = document.createElement("p");
        showAuthor.textContent = `Author: ${element.author}`;
        shell.appendChild(showAuthor);
        let showPages = document.createElement("p");
        showPages.textContent = `Pages: ${element.pages}`;
        shell.appendChild(showPages);
        let showRead = document.createElement("p");
        showRead.textContent = `Read: ${element.read}`;
        shell.appendChild(showRead);
    })
};