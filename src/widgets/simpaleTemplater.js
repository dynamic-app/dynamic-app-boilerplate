import { renderAsTemplater } from '../utils/renderAs.js';


function SimpaleTemplate({ map, onEvent, find }, props) {

  onEvent('button', 'click', function () {
    find('.find-my').innerHTML = 'find you!!!';
  })

  const items = { 1: 'one', 2: 'two', 3: 'three' };

  return `
    <h1>My Templater component</h1>
    <button class="find-my">find my</button>
    
    <br/>

    ${map(items, (item, key) => `
      <div>${item}</div>
    `)}
  `;
}

export default renderAsTemplater(SimpaleTemplate);