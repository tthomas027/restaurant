import Icon from './icon.jpg';

const loadMenu = () => {
  const content = document.querySelector('#content');

  const myIcon = new Image();
  myIcon.src = Icon;
  myIcon.alt = 'A grilled cheese sandwich on a cutting board';

  content.appendChild(myIcon);
  
  const header = document.createElement('h1');
  header.textContent = 'Menu';
  
  const item = document.createElement('h3');
  item.textContent = 'Grilled Cheese Sandwich';
  
  const price = document.createElement('p');
  price.textContent = '$5';
  
  const description = document.createElement('p');
  description.textContent = 'A grilled cheese sandwich for 5 buckaroos! What more could you want? A drink? We sell only grilled cheese sandwiches. Did you read the home page?'
  
  content.appendChild(header);
  content.appendChild(item);
  content.appendChild(price);
  content.appendChild(description);
}

export default loadMenu;