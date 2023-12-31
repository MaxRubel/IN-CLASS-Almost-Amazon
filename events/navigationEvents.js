import { signOut } from '../utils/auth';
import { getBooks, booksOnSale } from '../api/bookData';
import { showBooks } from '../pages/books';
import { getAuthors, getFavAuthors } from '../api/authorData';
import { showAuthors } from '../pages/authors';

// navigation events
const navigationEvents = (user) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // SHOW BOOKS ON SALE
  document.querySelector('#sale-books').addEventListener('click', () => {
    booksOnSale(user).then(showBooks);
  });

  // SHOW BOOKS
  document.querySelector('#all-books').addEventListener('click', () => {
    getBooks(user).then(showBooks);
  });

  // SHOW AUTHORS
  document.querySelector('#authors').addEventListener('click', () => {
    getAuthors(user).then((authors) => {
      showAuthors(authors);
    });
  });

  // SHOW FAVORITE AUTHORS
  document.querySelector('#fav-authors').addEventListener('click', () => {
    getFavAuthors(user).then(showAuthors);
  });

  // SEARCH
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();
    if (e.keyCode === 13) {
      document.querySelector('#search').value = '';
      getBooks(user).then((books) => {
        const searchResult = books.filter((book) => book.title.toLowerCase().includes(searchValue));
        showBooks(searchResult);
      });
    }
  });
};
export default navigationEvents;
