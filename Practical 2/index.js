class Books {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

class Library {
    constructor() {
        this._books = [];
    }

    addBook(title, author) {
        const newBook = new Books(title, author);
        newBook.borrowed = false;
        this._books.push(newBook);
    }

    findBook(title) {
        for (let i = 0; i < this._books.length; i++) {
            if (this._books[i].title === title) {
                return i;
            }
        }

        return -1;
    }

    borrowBook(title) {
        const index = this.findBook(title);
        if (index !== -1) {
            if (!this._books[index].borrowed) {
                this._books[index].borrowed = true;
                console.log(`The book "${title}" has been borrowed.`);
            } else {
                console.log(`The book "${title}" is already borrowed.`);
            }
        } else {
            console.log(`The book "${title}" was not found in the library.`);
        }
    }

    returnBook(title) {
        const index = this.findBook(title);
        if (index !== -1) {
            if (this._books[index].borrowed) {
                this._books[index].borrowed = false;
                console.log(`The book "${title}" has been returned.`);
            } else {
                console.log(`The book "${title}" is not currently borrowed.`);
            }
        } else {
            console.log(`The book "${title}" was not found in the library.`);
        }
    }

}

const library = new Library();

library.addBook("The Catcher in the Rye", "J.D. Salinger");
library.addBook("To Kill a Mockingbird", "Harper Lee");
library.addBook("1984", "George Orwell");

console.log(library._books);

library.borrowBook("The Catcher in the Rye");
library.borrowBook("To Kill a Mockingbird");
library.borrowBook("1984");
library.borrowBook("The Great Gatsby");

library.returnBook("The Catcher in the Rye");
library.returnBook("To Kill a Mockingbird");

console.log(library._books);

