import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addAuthorForm = () => {
  clearDom();
  const domString = `
    <form id="submit-author" class="mb-4">
      <div class="form-group">
        <label for="image">First Name</label>
        <input type="text" class="form-control" id="first_name" placeholder="First Name" required>
      </div>
      <div class="form-group">
        <label for="image">Last Name</label>
        <input type="text" class="form-control" id="last_name" placeholder="Last Name" required>
      </div>
      <div class="form-group">
        <label for="title">Email</label>
        <input type="email" class="form-control" id="email" aria-describedby="Email" placeholder="Enter Email" required>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Submit Author</button>
    </form>`;

  // const addAuthorForm = (obj = {}) => {
  //   clearDom();
  //   const domString = `
  //     <form id="${obj.firebaseKey ? `update-book--${obj.firebaseKey}` : 'submit-book'}" class="mb-4">
  //       <div class="form-group">
  //         <label for="title">Book Title</label>
  //         <input type="text" class="form-control" id="title" aria-describedby="bookTitle" placeholder="Enter Book Title" value="${obj.title || ''}" required>
  //       </div>
  //       <div class="form-group">
  //         <label for="description">Description</label>
  //         <textarea class="form-control" placeholder="Book Description" id="description" style="height: 100px">${obj.description || ''}</textarea>
  //       </div>
  //       <div class="form-group">
  //         <label for="image">Image URL</label>
  //         <input type="url" class="form-control" id="image" placeholder="Image URL" value="${obj.image || ''}" required>
  //       </div>
  //       <div class="form-group">
  //         <label for="price">Price</label>
  //         <input type="text" class="form-control" id="price" placeholder="Book Price" value="${obj.price || ''}" required>
  //       </div>
  //       <div class="form-group" id="select-author">
  //       </div>
  //       <div class="form-check">
  //         <input type="checkbox" class="form-check-input" id="sale" ${obj.sale ? 'checked' : ''}>
  //         <label class="form-check-label" for="sale">On Sale?</label>
  //       </div>
  //       <button type="submit" class="btn btn-primary">Submit Book
  //       </button>
  //     </form>
  //     <div id="backBooks"><--Go Back To Books</div>`;

  renderToDOM('#form-container', domString);
};

export default addAuthorForm;
