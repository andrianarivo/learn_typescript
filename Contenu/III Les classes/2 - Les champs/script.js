"use strict";
class Book {
    constructor(title, price, dateOfParution, author, theme) {
        this.title = title;
        this.price = price;
        this.dateOfParution = dateOfParution;
        this.author = author;
        this.theme = theme;
        this.bookId = 88;
        this.libraryName = "The Book Shelf";
    }
    promo() {
        console.log('ID', this.bookId);
        console.log('Name', this.libraryName);
        return this.price * 0.5;
    }
}
const book1 = new Book("The Great Gatsby", 15, "1925", "F. Scott Fitzgerald");
console.log(book1);
console.log(book1.promo());
const addToShelter = (obj) => {
    console.log(`Adding ${obj.title} to the shelter`);
    console.log(obj);
};
const nana = new Book('Nana', 10, '1880', 'Emile Zola', ['romance', 'drama']);
addToShelter(nana);
let onlyBook = [];
onlyBook.push(book1);
onlyBook.push(nana);
console.log(onlyBook);
