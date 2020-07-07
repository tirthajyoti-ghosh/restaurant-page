const about = (() => {
  const aboutText = () => {
    const aboutHeading = document.createElement('h2');
    aboutHeading.setAttribute('class', 'about__heading');
    aboutHeading.innerText = 'Who are we?';

    const para = (text) => {
      const paragraph = document.createElement('p');
      paragraph.setAttribute('class', 'para');
      paragraph.innerText = text;

      return paragraph;
    };

    const aboutTextDiv = document.createElement('div');
    aboutTextDiv.setAttribute('class', 'about__text');

    aboutTextDiv.appendChild(aboutHeading);
    aboutTextDiv.appendChild(para('Pots Midye is the first stop of street flavors we have established under the name of Seyyarhane. In our workshop, we produce mussels that we receive live from the relevant ministry-approved farms in accordance with the Turkish Food Codex and ship them to our branches.'));
    aboutTextDiv.appendChild(para('In addition to the traditional flavor, we bring a new breath to the street kitchen with our different recipes, always hot, fresh and pots of mussels cooked specially for you whenever you want.'));

    return aboutTextDiv;
  };

  const aboutSection = () => {
    const aboutSectionTag = document.createElement('section');
    aboutSectionTag.setAttribute('class', 'about');

    aboutSectionTag.appendChild(aboutText());

    return aboutSectionTag;
  };

  return aboutSection();
})();

export default about;
