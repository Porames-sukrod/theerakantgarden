const productContainer = document.querySelector('.product-container');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

if (prevButton && nextButton && productContainer) {
  prevButton.addEventListener('click', () => {
    productContainer.scrollLeft -= 300; // ปรับระยะเลื่อนตามความกว้างของการ์ด
  });

  nextButton.addEventListener('click', () => {
    productContainer.scrollLeft += 300; // ปรับระยะเลื่อนตามความกว้างของการ์ด
  });
}