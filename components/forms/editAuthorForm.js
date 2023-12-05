import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const editAuthorForm = (author) => {
  clearDom();
  const domString = `
    <form id="update-author" class="mb-4">
      <div class="form-group">
        <label for="image">First Name</label>
        <input type="text" class="form-control" id="first_name" value=${author.first_name} required>
      </div>
      <div class="form-group">
        <label for="image">Last Name</label>
        <input type="text" class="form-control" id="last_name" value=${author.last_name} required>
      </div>
      <div class="form-group">
        <label for="title">Email</label>
        <input type="email" class="form-control" id="email" aria-describedby="Email" value=${author.email} required>
      </div>
      <button type="submit" id="updateAuthorButton--${author.firebaseKey}"class="btn btn-primary mt-3">Update Author</button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default editAuthorForm;
