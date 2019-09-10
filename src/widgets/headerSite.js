import { renderAsTemplater } from '../utils/renderAs.js';


function HeaderSite({ map, onEvent, find }) {

  const menu = [
    { url: '/', label: 'Home' },
    { url: '/about', label: 'About' },
    { url: '/contact', label: 'Contact' }
  ];

  onEvent('.main-menu-item', 'click', (event) => {
    event.preventDefault();
    DynamicApp.goTo(event.target.href);
  })

  onEvent('.search-input', 'enter', (event) => {
    DynamicApp.goTo(`/search?${event.target.value}`);
  })

  return `
    <logo>
      <img class="logo" alt="logo" src="/assets/images/logo.svg"/>
    </logo>
    
    <menu class="main-menu">
      ${map(menu, item => `
        <a href="${item.url}" aria-label="${item.label}" class="main-menu-item">${item.label}</div>
      `)}
    </menu>
  `;
}

export default renderAsTemplater(HeaderSite);