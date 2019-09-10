import { renderAsTemplater } from '../utils/renderAs.js';


function ContactPage({ map, onEvent, find }, props) {

  onEvent('form', 'submit', function (event) {
    event.preventDefault();
    const email = find('#inputEmail').value;
    alert(`The email is ${email}!`);
  })

  return `
    <h1>Contact us</h1>

    <form>
      <div class="form-group">
        <label for="inputEmail">Email address</label>
        <input id="inputEmail" type="text" class="form-control" placeholder="Enter email">
      </div>

      <br/>
      
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  `;
}

export default renderAsTemplater(ContactPage);