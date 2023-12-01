import { signOut } from '../utils/auth';
import { getBooks, booksOnSale } from '../api/bookData';
import { showBooks } from '../pages/books';
import { getAuthors, getFavAuthors } from '../api/authorData';
import { showAuthors } from '../pages/authors';

// navigation events
const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // BOOKS ON SALE
  document.querySelector('#sale-books').addEventListener('click', () => {
    booksOnSale().then(showBooks);
  });

  // ALL BOOKS
  document.querySelector('#all-books').addEventListener('click', () => {
    getBooks().then(showBooks);
  });

  // Authors Create an event listener for the Authors
  document.querySelector('#authors').addEventListener('click', () => {
    getAuthors().then(showAuthors);
  });

  // Favorite Authors Create an even listener for favorite Authors
  document.querySelector('#fav-authors').addEventListener('click', () => {
    getFavAuthors().then(showAuthors);
  });

  // STRETCH: SEARCH
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();
    if (e.keyCode === 13) {
      document.querySelector('#search').value = '';
      getBooks().then((books) => {
        const searchResult = books.filter((book) => book.title.toLowerCase().includes(searchValue));
        showBooks(searchResult);
      });
    }
  });
};
export default navigationEvents;
