const body = document.querySelector("body")
const bookList = document.querySelector(".bookList")
const createBookButton = document.querySelector(".createNewBook")
const dialog = document.querySelector(".dialog")
const showDialogButton = document.querySelector(".createNewBookDialog");
const cancelCreateBook = document.querySelector(".cancelNewBook");
const formReset = document.querySelector(".formReset")





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
        shell.dataset.id = element.id;
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
        let delButton = document.createElement("button");
        delButton.addEventListener("click", ()=> {
            
        })
        delButton.classList.add("del")
        delButton.textContent = "Delete";
        shell.appendChild(delButton);
    })
};

function createBook(event){
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").value;
    myLibrary.push(new Book(title, author, pages, read));
    displayLibrary();
    formReset.reset();
    event.preventDefault();
    dialog.close();
}


showDialogButton.addEventListener("click", () => {
    dialog.showModal();
});
cancelCreateBook.addEventListener("click", () => {
    formReset.reset();
    dialog.close();
});

createBookButton.addEventListener("click", createBook)

