function UI() {}
// Kitap yokken tablo gözükmesin diye
// UI.prototype.hideList = function (e) {

//   if (localStorage.getItem("books") === null) {
//     document.getElementById("tbl-book").style.display = "none";
//   }

// }
UI.prototype.addBookToUI = function (newBook) {
  // document.getElementById("tbl-book").style.display = "block"; // Kitabı eklediğimizde tablo gözüksün diye

  const bookList = document.getElementById("books");

  bookList.innerHTML += `
      <tr>
        <td>${newBook.title}</td>
        <td>${newBook.author}</td>
        <td>${newBook.page}</td>
        <td><a href="#" id = "delete-book" class = "btn btn-danger">Delete Book</a></td>
      </tr>
    `;
};

UI.prototype.clearInputs = function (element1, element2, element3) {
  element1.value = "";
  element2.value = "";
  element3.value = "";
};

UI.prototype.loadAllBooks = function (books) {
  const bookList = document.getElementById("books");
  books.forEach(function (book) {
    bookList.innerHTML += `
      <tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.page}</td>
        <td><a href="#" id = "delete-book" class = "btn btn-danger">Delete Book</a></td>
      </tr>
    `;
  });
};
UI.prototype.deleteBookFromUI = function (element) {
  element.parentElement.parentElement.remove();
};
UI.prototype.clearAllBooksFromUI = function () {
  const bookTable = document.getElementById("bookTable");
  bookTable.remove();

  //Bu yöntemle de yapabiliriz.
  // while(bookList.firstElementChild !== null){
  //   bookList.firstElementChild.remove();
  // }
};
