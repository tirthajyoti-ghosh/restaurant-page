const about = (() => {
  const aboutSection = document.createElement('section');
  aboutSection.setAttribute('class', 'about');

  const aboutText = document.createElement('div');
  aboutText.setAttribute('class', 'about__text');

  const aboutHeading = document.createElement('h2');
  aboutHeading.setAttribute('class', 'about__heading');
  aboutHeading.innerText = 'Who are we?';

  aboutText.appendChild(aboutHeading);
  
  const para1 = document.createElement('p');
  para1.setAttribute('class', 'para');
  para1.innerText = 'Pots Midye is the first stop of street flavors we have established under the name of Seyyarhane. In our workshop, we produce mussels that we receive live from the relevant ministry-approved farms in accordance with the Turkish Food Codex and ship them to our branches.';
  
  aboutText.appendChild(para1);
  
  const para2 = document.createElement('p');
  para2.setAttribute('class', 'para');
  para2.innerText = 'In addition to the traditional flavor, we bring a new breath to the street kitchen with our different recipes, always hot, fresh and pots of mussels cooked specially for you whenever you want.';
  
  aboutText.appendChild(para2);

  aboutSection.appendChild(aboutText);

  return aboutSection;
})();

export default about;
