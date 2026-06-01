const body = document.querySelector("body")
const bookList = document.querySelector(".bookList")
const createBookButton = document.querySelector(".createNewBook")
const dialog = document.querySelector(".dialog")
const showDialogButton = document.querySelector(".createNewBookDialog");
const cancelCreateBook = document.querySelector(".cancelNewBook");
const formReset = document.querySelector(".formReset");
const checkboxHTML = document.querySelector("#read");





let myLibrary = [];

function Book(title, author, pages, read){
    if (!new.target){
        throw Error("NEWWWWW")
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
    Book.prototype.readStatus = function() {
        if (this.read == "on"){
            this.read = "off";
            console.log(1)
            console.log(myLibrary)
        } else {
            this.read = "on"
            console.log(2)
            console.log(myLibrary)
        }
    }
    this.info = function() {
        console.log(`${this.title} by ${this.author}, ${this.pages}, ${this.read}`)
    }
};






function addBookToLibrary(book) {
    myLibrary.push(book);
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
        if (element.read == "on"){
            showRead.textContent = "Read: You have read this book"
        } else {
            showRead.textContent = "Read: You didnt read this book"
        }
        shell.appendChild(showRead);
        let readButton = document.createElement("button");
        readButton.textContent = "Read?";
        readButton.addEventListener("click", () => {
            element.readStatus()
            displayLibrary()
        });
        shell.appendChild(readButton);
        let delButton = document.createElement("button");
        delButton.addEventListener("click", ()=> {
            let result = myLibrary.filter(function(el) { return el.id != element.id});
            myLibrary = result;
            displayLibrary();
        })
        delButton.classList.add("del")
        delButton.textContent = "Delete";
        shell.appendChild(delButton);
    })
};

function createBook(event){
    title = document.getElementById("title").value;
    author = document.getElementById("author").value;
    pages = document.getElementById("pages").value;
    test = document.getElementById("read");
    if (test.checked){
        read = "on"
    } else {
        read = "off"
    }
    let book = new Book(title, author, pages, read);
    addBookToLibrary(book)
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

