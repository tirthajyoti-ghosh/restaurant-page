import './style/style.css';
import home from './js/home';
import about from './js/about';
import products from './js/products';
import branches from './js/branches';

const content = document.getElementById('content');

const tabSwitcher = (section) => {
  content.removeChild(content.childNodes[1]);

  if (section === 'home') {
    content.appendChild(home);
  } else if (section === 'about') {
    content.appendChild(about);
  } else if (section === 'products') {
    content.appendChild(products);
  } else {
    content.appendChild(branches);
  }
};

const header = (() => {
  const link = () => {
    const logoLink = document.createElement('a');
    logoLink.setAttribute('href', '#');
    logoLink.setAttribute('id', 'logo');

    const logoImg = document.createElement('img');
    logoImg.setAttribute('src', 'https://uploads-ssl.webflow.com/5d3819c2c65d403ab61fe6cd/5d38248bc65d40b464206a96_logo-white.png');
    logoImg.setAttribute('width', '70');
    logoLink.appendChild(logoImg);

    return logoLink;
  };

  const ul = () => {
    const navList = document.createElement('ul');
    navList.setAttribute('class', 'nav-list');

    const li = (linkText, section) => {
      const listItem = document.createElement('li');

      const navLink = document.createElement('a');
      navLink.setAttribute('href', '#');
      navLink.setAttribute('class', 'nav-links');
      navLink.innerText = linkText;

      navLink.addEventListener('click', () => { tabSwitcher(section); });

      listItem.appendChild(navLink);

      return listItem;
    };

    navList.appendChild(li('Home', 'home'));
    navList.appendChild(li('About', 'about'));
    navList.appendChild(li('Products', 'products'));
    navList.appendChild(li('Branches', 'branches'));

    return navList;
  };

  const nav = () => {
    const navBar = document.createElement('nav');

    navBar.appendChild(link());
    navBar.appendChild(ul());

    return navBar;
  };

  const header = () => {
    const headerTag = document.createElement('header');
    headerTag.appendChild(nav());

    return headerTag;
  };

  return header();
})();

content.appendChild(header);
content.appendChild(home);
