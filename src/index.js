import loadHome from './home.js';
import loadContact from './contact.js';
import loadMenu from './menu.js';
import './style.css';

const body = document.querySelector('body');

const nav = document.createElement('nav');
const home = document.createElement('button');
home.textContent = 'Home';
const menu = document.createElement('button');
menu.textContent= 'Menu';
const contact = document.createElement('button');
contact.textContent = 'Contact';
body.appendChild(nav);
nav.appendChild(home);
nav.appendChild(menu);
nav.appendChild(contact);

const content = document.createElement('div');
content.id = 'content';
body.appendChild(content);

const clearContent = () => {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

home.addEventListener('click', () => {
  clearContent();
  loadHome();
});

menu.addEventListener('click', () => {
  clearContent();
  loadMenu();
});

contact.addEventListener('click', () => {
  clearContent();
  loadContact();
});

loadHome();