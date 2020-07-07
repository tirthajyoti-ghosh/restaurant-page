import './style/style.css';
import home from './js/home.js';
import about from './js/about.js';
import products from './js/products.js';
import branches from './js/branches.js';

const content = document.getElementById('content');

const header = (() => {
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  const link = document.createElement('a');
  link.setAttribute('href', '#');
  link.setAttribute('id', 'logo');

  const img = document.createElement('img');
  img.setAttribute('src', 'https://uploads-ssl.webflow.com/5d3819c2c65d403ab61fe6cd/5d38248bc65d40b464206a96_logo-white.png');
  img.setAttribute('width', '70');

  link.appendChild(img);

  nav.appendChild(link);

  const ul = document.createElement('ul');
  ul.setAttribute('class', 'nav-list');

  const li1 = document.createElement('li');
  li1.setAttribute('class', 'nav-links active');

  const li2 = document.createElement('li');
  li2.setAttribute('class', 'nav-links');

  const li3 = document.createElement('li');
  li3.setAttribute('class', 'nav-links');

  const li1a = document.createElement('a');
  li1a.setAttribute('href', '#');
  li1a.innerText = 'Who we are?';

  li1.appendChild(li1a);

  const li2a = document.createElement('a');
  li2a.setAttribute('href', '#');
  li2a.innerText = 'Products';

  li2.appendChild(li2a);
  
  const li3a = document.createElement('a');
  li3a.setAttribute('href', '#');
  li3a.innerText = 'Branches';

  li3.appendChild(li3a);

  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);

  nav.appendChild(ul);

  header.appendChild(nav);

  return header;
})();

content.appendChild(header);

content.appendChild(home);
content.appendChild(about);
content.appendChild(products);
content.appendChild(branches);
