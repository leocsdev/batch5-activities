/*
BOOK STORE
1. Create an object store that will contain the name of the store, inventory list, and the earnings
2. Create an object book that will contain the title, the quantity, and the value of the book
3. Create a function addBook() that creates a book object (with title, quantity and value) and add it to an array of book objects in the store inventory
4. Create a function restockBook() that takes the parameters title and quantity and adds the corresponding book to the inventory. The book should already exist in the inventory, if not, restock should not push thru.
5. Create a function sellBook() that takes the parameter title and quantity. When called, it searches for the book with the corresponding title, deducts the quantity, and adds the earnings accordingly
 - If the book does not exist, transaction will fail then print a message ${book-title} out of stock.
 - If quantity is less than what is in the inventory, transaction will fail then print message only ${number} stocks left
 - If sell was successful, print message "Successful transaction".
6. Create a function totalEarnings() that will display the total earnings of the store, print store name and earnings;
7. Create a function listInventory() that will display all of books in the inventory, print title quantity and value; (edited)  
*/

const store = {
  storeName: "Municipal Book Store",
  inventoryList: [
    // {
    //   title: "Book 1",
    //   quantity: 3,
    //   price: 25
    // },
  ],
  earnings: 0
}


function addBook(title, quantity, price) {
  const book = {
    title: title,
    quantity: quantity,
    price: price
  }
  store.inventoryList.push(book);
}


function restockBook(title, quantity) { 
  console.log("restock book");
}


function sellBook(title, quantity) {
  console.log("sell book");
}


function totalEarnings() {
  console.log("total earnings");
}


function listInventory() {
  // get number of books with unique title
  let booksWithUniqueTitle = store.inventoryList.length;

  let msg;

  // if there is 1 or more books in store's inventory list, display book/s info
  if (booksWithUniqueTitle) {

    // if there's only 1 book, display singular msg. otherwise, display plural msg
    booksWithUniqueTitle > 1 ? 
      msg = `are ${booksWithUniqueTitle} books` :
      msg = `is only ${booksWithUniqueTitle} book`;

    console.log(`There ${msg} with unique title in stock.`);

    // show all books
    store.inventoryList.forEach(element => {
      console.log(`Title: ${element.title}, Quantity: ${element.quantity}, Price: ${element.price}`);
    });
  
  // otherwise, display no books in stock.
  } else {
    console.log('There are no books in stock.');
  }
}