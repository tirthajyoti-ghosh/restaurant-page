const home = (() => {
  const leftDiv = () => {
    const leftDivTag = document.createElement('div');
    leftDivTag.setAttribute('class', 'left');

    const homeText = () => {
      const homeTextDiv = document.createElement('div');
      homeTextDiv.setAttribute('class', 'home__text');

      const homeHeading = document.createElement('h1');
      homeHeading.setAttribute('class', 'home__heading');
      homeHeading.innerText = 'Hot and fresh mussels in pots 😋!';

      const ctaBtn = document.createElement('a');
      ctaBtn.setAttribute('href', '#');
      ctaBtn.setAttribute('class', 'cta-btn');
      ctaBtn.innerText = 'What are you waiting for? ';


      homeTextDiv.appendChild(homeHeading);
      homeTextDiv.appendChild(ctaBtn);

      return homeTextDiv;
    };

    leftDivTag.appendChild(homeText());

    return leftDivTag;
  };

  const rightDiv = () => {
    const rightDivTag = document.createElement('div');
    rightDivTag.setAttribute('class', 'right');

    const img = document.createElement('img');
    img.setAttribute('src', 'https://uploads-ssl.webflow.com/5d3819c2c65d403ab61fe6cd/5d3da99cb1eba4bb6d1caf2a_welcome.jpg');

    rightDivTag.appendChild(img);

    return rightDivTag;
  };

  const homeSection = () => {
    const homeSectionTag = document.createElement('section');
    homeSectionTag.setAttribute('class', 'home');

    homeSectionTag.appendChild(leftDiv());
    homeSectionTag.appendChild(rightDiv());

    return homeSectionTag;
  };

  return homeSection();
})();

export default home;
