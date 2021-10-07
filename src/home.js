import Icon from './icon.jpg';

const loadHome = () => {
  const content = document.querySelector('#content');

  const myIcon = new Image();
  myIcon.src = Icon;
  myIcon.alt = 'A grilled cheese sandwich on a cutting board';

  content.appendChild(myIcon);

  const header = document.createElement('h1');
  header.textContent = 'Grilled Cheese Truck';

  const copy = document.createElement('p');
  copy.textContent = `Our food truck does one thing and does that thing well. 
  We make the best grilled cheese sandwiches around. We only 
  use bread, butter, and cheese. Any other ingredients makes 
  the sandwich a melt which we definitely do not do. Do ask 
  for meat or avocado or anything else. We only serve grilled cheese!`

  content.appendChild(header);
  content.appendChild(copy);
}

export default loadHome;