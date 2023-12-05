import {
  deleteBook, getBooks, getSingleBook,
} from '../api/bookData';
import { showBooks } from '../pages/books';
import {
  getAuthors, changeFavoriteAuthor,
} from '../api/authorData';
import { showAuthors } from '../pages/authors';
import addAuthorForm from '../components/forms/addAuthorForm';
import addBookForm from '../components/forms/addBookForm';
import { getBookDetails, deleteAuthorBooksRelationship, getAuthorDetails } from '../api/mergedData';
import viewBook from '../pages/viewBook';
import viewAuthor from '../pages/viewAuthor';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A BOOK
    if (e.target.id.includes('delete-book')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');

        deleteBook(firebaseKey).then(() => {
          getBooks(user).then(showBooks);
        });
      }
    }

    // CLICK EVENT FOR SHOWING FORM FOR ADDING A BOOK
    if (e.target.id.includes('add-book-btn')) {
      addBookForm(user);
      // getAuthorBooks('-MiBvQiWr6XNwNa1i3');
    }

    // CLICK EVENT EDITING/UPDATING A BOOK
    if (e.target.id.includes('edit-book-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleBook(firebaseKey).then((bookObj) => addBookForm(bookObj));
    }

    // CLICK EVENT FOR VIEW BOOK DETAILS
    if (e.target.id.includes('view-book-btn')) {
      console.warn(e.target.id.split('--'));
      const [, firebaseKey] = e.target.id.split('--');
      getBookDetails(firebaseKey).then(viewBook);
    }

    // CLICK EVENT FOR VIEW AUTHORS
    if (e.target.id.includes('view-author-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getAuthorDetails(firebaseKey).then((data) => { viewAuthor(data); });
    }

    // CLICK EVENT FOR DELETING AN AUTHOR
    if (e.target.id.includes('delete-author-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        (deleteAuthorBooksRelationship(firebaseKey))
          .then(() => {
            getAuthors().then(showAuthors);
          });
      }
    }

    // CLICK EVENT FOR SHOWING FORM FOR ADDING AN AUTHOR
    if (e.target.id.includes('add-author-btn')) {
      addAuthorForm();
    }
    // CLICK EVENT FOR EDITING AN AUTHOR
    if (e.target.id.includes('update-author')) {
      addAuthorForm();
    }

    // FAVORITE BUTTON
    // LIKE
    if (e.target.id.includes('Unfavorite')) {
      console.warn('liked');
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        favorite: true,
        firebaseKey
      };
      changeFavoriteAuthor(payload)
        .then(() => {
          getAuthors(user)
            .then(showAuthors);
        });
    }

    if (e.target.id.includes('favorite')) {
      console.warn('unliked');
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        favorite: false,
        firebaseKey
      };
      changeFavoriteAuthor(payload)
        .then(() => {
          getAuthors(user)
            .then(showAuthors);
        });
    }

    // BACK BUTTON
    if (e.target.id.includes('bookBack')) {
      getBooks(user).then(showBooks);
    }
    if (e.target.id.includes('authorBack')) {
      getAuthors(user).then(showAuthors);
    }
  });
};

export default domEvents;
