const products = (() => {
  const productsHeading = () => {
    const productsHeadingTag = document.createElement('h2');
    productsHeadingTag.setAttribute('class', 'products__heading');
    productsHeadingTag.innerText = 'mussels';

    return productsHeadingTag;
  };

  const productsList = () => {
    const product = (src, name) => {
      const productDiv = document.createElement('div');
      productDiv.setAttribute('class', 'product');

      const img = document.createElement('img');
      img.setAttribute('src', src);

      productDiv.appendChild(img);

      const heading = document.createElement('h3');
      heading.setAttribute('class', 'name');
      heading.innerText = name;

      productDiv.appendChild(heading);

      return productDiv;
    };

    const productsListDiv = document.createElement('div');
    productsListDiv.setAttribute('class', 'products__list');

    productsListDiv.appendChild(product('https://uploads-ssl.webflow.com/5d3819c2c65d403ab61fe6cd/5d3da99c4401a55a48ea969f_tezgahtan-midye.jpg', 'Mussels from the Counter'));

    productsListDiv.appendChild(product('https://uploads-ssl.webflow.com/5d3819c2c65d403ab61fe6cd/5d3da99cc89f6a42db274703_tencere-midye.jpg', 'Cookware Musseler'));

    productsListDiv.appendChild(product('https://uploads-ssl.webflow.com/5d3819c2c65d403ab61fe6cd/5d3da99b4401a57d67ea969d_baharatli-midye.jpg', 'Spicy Mussels'));

    productsListDiv.appendChild(product('https://uploads-ssl.webflow.com/5d3819c2c65d403ab61fe6cd/5d3da99b73102cbf35c2cd98_soslu-midye.jpg', 'Sauced Mussels'));

    productsListDiv.appendChild(product('https://uploads-ssl.webflow.com/5d3819c2c65d403ab61fe6cd/5d3da99c850abc5c01c29f2d_zeytinyagli-midye.jpg', 'Olive Oil Mussel'));

    productsListDiv.appendChild(product('https://uploads-ssl.webflow.com/5d3819c2c65d403ab61fe6cd/5d3da99acb7dfd619bf3e14e_midye-tava.jpg', 'Fried mussels'));

    return productsListDiv;
  };

  const productsSection = () => {
    const productsSectionTag = document.createElement('section');
    productsSectionTag.setAttribute('class', 'products');

    productsSectionTag.appendChild(productsHeading());
    productsSectionTag.appendChild(productsList());

    return productsSectionTag;
  };

  return productsSection();
})();

export default products;
