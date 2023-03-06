let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBooktoLibrary(newBook) {
    myLibrary.push(newBook)
    displayBook()
}

//Pop-up Modal for adding books

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal  => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if(modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}
    

function closeModal(modal) {
    if(modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

// Getting modal information

const modalSubmit = document.querySelector('.modalSubmit');
modalSubmit.addEventListener('click', submitModal)

function submitModal(event) {
    const modalForm = document.querySelector('#modalForm');
    const newBook = new Book(modalForm.elements[0].value, modalForm.elements[1].value, modalForm.elements[2].value, modalForm.elements[3].value );
    addBooktoLibrary(newBook)
    modalForm.reset()
    const modal = this.closest('.modal')
    closeModal(modal)
    event.preventDefault()
}

// Displaying book from myLibrary

function displayBook() {
    const body = document.querySelector('.mainBody');
    console.log(myLibrary)
    for (let book in myLibrary) {
        console.log(myLibrary[book])
        let bookCard = document.createElement('div')
        bookCard.classList.add('bookCard')
        let title = document.createElement('h1')
        title.innerText = myLibrary[book].title
        bookCard.appendChild(title)
        body.appendChild(bookCard)
        let author = document.createElement('h3')
        author.innerText = myLibrary[book].author
        bookCard.appendChild(author)
        let pages = document.createElement('h3')
        pages.innerText = myLibrary[book].pages
        bookCard.appendChild(pages)
        let status = ""
        if(myLibrary[book].read == "on")
            status = "Read"
        else
            status = "Not Read"
        let read = document.createElement('h3')
        read.innerText = status
        bookCard.appendChild(read)
    }
}
