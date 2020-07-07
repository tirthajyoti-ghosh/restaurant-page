const home = (() => {
  const homeSection = document.createElement('section');
  homeSection.setAttribute('class', 'home');

  const leftDiv = document.createElement('div');
  leftDiv.setAttribute('class', 'left');

  const homeText = document.createElement('div');
  homeText.setAttribute('class', 'home__text');

  const homeHeading = document.createElement('h1');
  homeHeading.setAttribute('class', 'home__heading');
  homeHeading.innerText = 'Hot and fresh mussels in pots.';
  homeText.appendChild(homeHeading);
  
  const ctaBtn = document.createElement('a');
  ctaBtn.setAttribute('href', '#');
  ctaBtn.setAttribute('class', 'cta-btn');
  ctaBtn.innerText = 'Products';
  homeText.appendChild(ctaBtn);

  leftDiv.appendChild(homeText);

  const rightDiv = document.createElement('div');
  rightDiv.setAttribute('class', 'right');
  const img = document.createElement('img');
  img.setAttribute('src', 'https://uploads-ssl.webflow.com/5d3819c2c65d403ab61fe6cd/5d3da99cb1eba4bb6d1caf2a_welcome.jpg');

  rightDiv.appendChild(img);

  homeSection.appendChild(leftDiv);
  homeSection.appendChild(rightDiv);

  return homeSection;
})();

export default home;
