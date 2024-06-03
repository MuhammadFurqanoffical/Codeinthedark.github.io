const products = [
    { name: 'Product 1', image: 'product1.png' },
    { name: 'Product 2', image: 'product2.png' },
    { name: 'Product 3', image: 'product3.png' },
];

let currentIndex = 0;

const productName = document.getElementById('productName');
const productImage = document.getElementById('productImage');

document.getElementById('upBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % products.length;
    updateProductDisplay();
});

document.getElementById('downBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + products.length) % products.length;
    updateProductDisplay();
});

function updateProductDisplay() {
    productName.textContent = products[currentIndex].name;
    productImage.src = products[currentIndex].image;
}
