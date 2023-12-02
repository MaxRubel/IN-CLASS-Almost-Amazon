import { deleteBook, getBooks, getSingleBook } from '../api/bookData';
import { showBooks } from '../pages/books';
import {
  getAuthors, changeFavoriteAuthor
} from '../api/authorData';
import { showAuthors } from '../pages/authors';
import addAuthorForm from '../components/forms/addAuthorForm';
import addBookForm from '../components/forms/addBookForm';
import { getBookDetails, deleteAuthorBooksRelationship } from '../api/mergedData';
import viewBook from '../pages/viewBook';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A BOOK
    if (e.target.id.includes('delete-book')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');

        deleteBook(firebaseKey).then(() => {
          getBooks().then(showBooks);
        });
      }
    }

    // CLICK EVENT FOR SHOWING FORM FOR ADDING A BOOK
    if (e.target.id.includes('add-book-btn')) {
      addBookForm();
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
      console.warn(firebaseKey);
      getBookDetails(firebaseKey).then(viewBook);
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
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        favorite: true,
        firebaseKey
      };
      changeFavoriteAuthor(payload)
        .then(getAuthors)
        .then(showAuthors);
    }

    if (e.target.id.includes('favorite')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        favorite: false,
        firebaseKey
      };
      changeFavoriteAuthor(payload)
        .then(getAuthors)
        .then(showAuthors);
    }

    // BACK BUTTON
    if (e.target.id.includes('bookBack')) {
      getBooks().then(showBooks);
    }
  });
};

export default domEvents;
