const branches = (() => {
  const branchesHeading = () => {
    const branchesHeadingTag = document.createElement('h2');
    branchesHeadingTag.setAttribute('class', 'branches__heading');
    branchesHeadingTag.innerText = 'Visit Us';

    return branchesHeadingTag;
  };

  const branchList = () => {
    const branch = (src, heading, text) => {
      const branchDiv = document.createElement('div');
      branchDiv.setAttribute('class', 'branch');

      const img = document.createElement('img');
      img.setAttribute('src', src);

      branchDiv.appendChild(img);

      const branchHeading = document.createElement('h3');
      branchHeading.setAttribute('class', 'branch__heading');
      branchHeading.innerText = heading;

      branchDiv.appendChild(branchHeading);

      const branchText = document.createElement('div');
      branchText.setAttribute('class', 'branch__text');
      branchText.innerHTML = text;

      branchDiv.appendChild(branchText);

      return branchDiv;
    };

    const branchListDiv = document.createElement('div');
    branchListDiv.setAttribute('class', 'branch__list');

    branchListDiv.appendChild(branch('https://uploads-ssl.webflow.com/5d3819c2c65d403ab61fe6cd/5d44ab0328d7ff37d2c7f1ca_bahcelievler.jpg', 'Cookware Midye Express Bahçelievler', '<strong>Address:</strong>  Bahçelievler mahalle 54th street (6th street)<br>31-33 / A (10)<br>Çankaya / Ankara<br>06490<br><strong>Email:</strong> info@tenceremidye.com<br><strong>Instagram:</strong> instagram.com/tenceremidye<br><strong>Phone:</strong> 0312 212 3736'));

    branchListDiv.appendChild(branch('https://uploads-ssl.webflow.com/5d3819c2c65d403ab61fe6cd/5e3fe89c6615a6644c5d7c8a_DSCF3033.jpg', 'Saucepan Mussel Plus Beysukent', '<strong>Address:</strong> Bahçelievler mahalle 54th street (6th street)<br>31-33 / A (10)<br>Çankaya / Ankara<br>06490<br><strong>Email</strong>: info@tenceremidye.com<br><strong>Instagram</strong>: instagram.com/tenceremidye<br><strong>Phone:</strong> 0312 212 3736'));

    return branchListDiv;
  };

  const branchesSection = () => {
    const branchesSectionTag = document.createElement('section');
    branchesSectionTag.setAttribute('class', 'branches');

    branchesSectionTag.appendChild(branchesHeading());
    branchesSectionTag.appendChild(branchList());

    return branchesSectionTag;
  };

  return branchesSection();
})();

export default branches;
