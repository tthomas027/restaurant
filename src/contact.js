const loadContact = () => {
  const content = document.querySelector('#content');

  const header = document.createElement('h1');
  header.textContent = 'Contact Us';
  
  const name = document.createElement('h3');
  name.textContent = 'Big Cheeser';
  
  const job = document.createElement('p');
  job.textContent = 'Chef/Owner';
  
  const phone = document.createElement('p');
  phone.textContent = '555-867-5309'
  
  const email = document.createElement('p');
  email.textContent = 'bigcheeser@grilledcheesetruck.com'
  
  content.appendChild(header);
  content.appendChild(name);
  content.appendChild(job);
  content.appendChild(phone);
  content.appendChild(email);
}

export default loadContact;