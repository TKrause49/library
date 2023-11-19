function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = title + ' by ' + author + ', ' + pages + ' pages, ' + read
}
 
const dune = new Book ('Dune', 'Frank Herbert', '467', true);
const gay = new Book ('Gay Sex', 'Trey', '6969', true);

const myLibrary = [];

const container = document.querySelector('#container')

function displayBooks() {
    container.textContent = '';
    myLibrary.forEach((el) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.appendChild(document.createElement('h1'));
        card.appendChild(document.createElement('button'));
        card.appendChild(document.createElement('h2'));
        card.appendChild(document.createElement('p'));
        card.appendChild(document.createElement('div'));
        const h1 = card.querySelector('h1');
        const h2 = card.querySelector('h2');
        const p = card.querySelector('p');
        const div = card.querySelector('div');
        const button = card.querySelector('button');
        h1.textContent = el.title;
        h2.textContent = 'By: ' + el.author;
        p.textContent = el.pages + ' pages';
        div.classList.add(el.read);
        button.textContent = 'X';

        button.addEventListener('click', () => {
            container.removeChild(card);
            myLibrary = myLibrary.splice(myLibrary.indexOf(card) - 1, 1);
        });

        div.addEventListener('click', () => {
            if (div.classList.contains('true')) {
                div.classList.remove('true');
            } else {
                div.classList.add('true');
            }
        });

        container.appendChild(card);
    })
};

const openPopupBtn = document.querySelector('#add-book');
const popup = document.querySelector('#popup');
const closeBtn = document.querySelector('.close-button');
const overlay = document.querySelector('#overlay');
const submitBtn = document.querySelector('#submit-button');

openPopupBtn.addEventListener('click', () => {
    popup.classList.add('active');
    overlay.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    popup.classList.remove('active');
    overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
    popup.classList.remove('active');
    overlay.classList.remove('active');
});

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const pages = document.querySelector('#pages');
    const readStatus = document.querySelector('#read');

    const newBook = new Book(title.value, author.value, pages.value, readStatus.checked);
    myLibrary.push(newBook);
    displayBooks();
    popup.classList.remove('active');
    overlay.classList.remove('active');

    title.value = '';
    author.value = '';
    pages.value = '';
});

displayBooks();



