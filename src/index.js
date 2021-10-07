import loadHome from './home.js';
import './style.css';

const body = document.querySelector('body');
const content = document.createElement('div');
content.id = 'content';
body.appendChild(content);

loadHome();