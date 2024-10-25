// ice-cream.js

const iceCreamSection1 = document.querySelector('.Ice-Cream-section1');
const iceCreamSection2 = document.querySelector('.Ice-Cream-section2');

const IceCreamProducts = [
    {
        imgSrc: '../image/Amul-Cup-American-Nuts.jpg',
        title: 'American Nuts',
        price: 150,
        rating: '4.5'
    },
    {
        imgSrc: '../image/BLUE-BUNNY-ICE-CREAM-VANILLA-B.png',
        title: 'Blue Bunny',
        price: 200,
        rating: '5.0'
    },
    // Add other ice cream products here
];
// cart.js

window.addToCart = function(product) {
  // Your add to cart logic
  console.log("Added to cart:", product);
};


// Render Ice Cream products
IceCreamProducts.slice(0, 5).forEach(product => {
    const productHTML = `
    <div class="swiper-slide box">
      <img src="${product.imgSrc}" alt="${product.title}">
      <h3>${product.title}</h3>
      <div class="price">${product.price}</div>
      <div class="stars">
        ${'★'.repeat(Math.floor(product.rating))}
        ${product.rating % 1 !== 0 ? '<i class="fas fa-star-half-alt"></i>' : ''}
      </div>
      <button class="btn" onclick='addToCart(${JSON.stringify(product)})'>Add to cart</button>
    </div>`;
    iceCreamSection1.innerHTML += productHTML;
});

IceCreamProducts.slice(5, 10).forEach(product => {
    const productHTML = `
    <div class="swiper-slide box">
      <img src="${product.imgSrc}" alt="${product.title}">
      <h3>${product.title}</h3>
      <div class="price">${product.price}</div>
      <div class="stars">
        ${'★'.repeat(Math.floor(product.rating))}
        ${product.rating % 1 !== 0 ? '<i class="fas fa-star-half-alt"></i>' : ''}
      </div>
      <button class="btn" onclick='addToCart(${JSON.stringify(product)})'>Add to cart</button>
    </div>`;
    iceCreamSection2.innerHTML += productHTML;
});
