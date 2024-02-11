class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    get info() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    } 

    toggleRead() {
        this.read = this.read === true ? false : true;
    }
}

class Library {
    constructor() {
        this.books= [];
    };

    addBook(newBook) {
        this.books.push(newBook);
    };

    removeBook(title) {
        this.books = this.books.filter((book) => book.title !== title)
      }

}

const library = new Library();

const container = document.querySelector('#container')
const openPopupBtn = document.querySelector('#add-book');
const popup = document.querySelector('#popup');
const closeBtn = document.querySelector('.close-button');
const overlay = document.querySelector('#overlay');
const submitBtn = document.querySelector('#submit-button');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const readStatus = document.querySelector('#read');

function createCard(el) {
    const card = document.createElement('div');
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const div = document.createElement('div');
    const button = document.createElement('button');

    card.classList.add('card');
    div.classList.add(el.read);
    h1.textContent = el.title;
    h2.textContent = 'By: ' + el.author;
    p.textContent = el.pages + ' pages';
    button.textContent = 'X';

    button.addEventListener('click', (event) => {
        container.removeChild(card);
        removeBook(event);
    });

    div.addEventListener('click', (event) => {
        toggleRead(event);
    });

    card.appendChild(h1);
    card.appendChild(button);
    card.appendChild(h2);
    card.appendChild(p);
    card.appendChild(div);

    return card;
};

const addBook = () => {
    const newBook = new Book(title.value, author.value, pages.value, readStatus.checked);
    library.addBook(newBook);
  }

const removeBook = (event) => {
    const book = event.currentTarget.parentNode.firstChild.textContent;
    library.removeBook(book);
    }

const toggleRead = (event) => {
    const book = event.currentTarget;
    if (book.classList.contains('true')) {
        book.classList.remove('true');
    } else {
        book.classList.add('true');
    };
    const bookTitle = book.parentNode.firstChild.textContent;
    const targetBook = library.books.find((book) => book.title === bookTitle);
    targetBook.toggleRead();
    console.log(targetBook);
}

function displayBooks() {
    container.textContent = '';
    library.books.forEach((el) => {
        container.appendChild(createCard(el));
    })
};

const closePopup = function () {
    popup.classList.remove('active');
    overlay.classList.remove('active');
}

const openPopup = function () {
    popup.classList.add('active');
    overlay.classList.add('active');
}

openPopupBtn.addEventListener('click', () => {openPopup()});
closeBtn.addEventListener('click', () => {closePopup()});
overlay.addEventListener('click', () => {closePopup()});

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();

    addBook();
    displayBooks();
    closePopup();

    title.value = '';
    author.value = '';
    pages.value = '';
});


