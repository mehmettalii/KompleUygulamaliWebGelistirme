const form = document.querySelector("#book-form");
const newTitle = document.querySelector("#title");
const newAuthor = document.querySelector("#author");
const newPage = document.querySelector("#page");

// UI objesini başlatma
const ui = new UI();

// Tabloyu gizleme
ui.hideList();

// Storage objesi üretme
const storage = new Storage();

// Tüm eventleri yükleme

eventListeners();

function eventListeners() {
    form.addEventListener("submit", addBook);
    document.addEventListener("DOMContentLoaded", function () {
        let books = storage.getBooksFromStorage();
        ui.loadAllBooks(books);
    });
}
function addBook(e) {
    const title = newTitle.value;
    const author = newAuthor.value;
    const page = newPage.value;

    // Yeni kitap oluşturma
    const newBook = new Book(title, author, page);

    // Arayüze film ekleme
    ui.addBookToUI(newBook);

    // Storage'a film ekleme
    storage.addBookToStorage(newBook);

    ui.clearInputs(newTitle, newAuthor, newPage);

    e.preventDefault();
}
