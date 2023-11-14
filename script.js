
const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = title + ' by ' + author + ', ' + pages + ' pages, ' + read
}

const dune = new Book('Dune', 'Frank Herbert', 593, 'read');
myLibrary.push(dune);


/*Write a function that loops through the array and 
displays each book on the page. 

You can display them in some sort of table, 
or each on their own “card”. 

It might help for now to manually add a few books to 
your array so you can see the display.
*/
 
const container = document.querySelector('#container')

function displayBooks() {
    myLibrary.forEach((el) => {
        const card = document.createElement('div');
        card.classList.add('card')
        card.appendChild(document.createElement('h1'));
        card.appendChild(document.createElement('h2'));
        card.appendChild(document.createElement('p'));
        card.appendChild(document.createElement('div'))
        const h1 = card.querySelector('h1');
        const h2 = card.querySelector('h2');
        const p = card.querySelector('p');
        const div = card.querySelector('div');
        h1.textContent = el.title;
        h2.textContent = el.author;
        p.textContent = el.pages;
        div.classList.add(el.read);
        container.appendChild(card);
        console.log(card)
    })
}

displayBooks();