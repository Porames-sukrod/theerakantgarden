document.addEventListener('DOMContentLoaded', function() {
    const sortPriceSelect = document.getElementById('sort-price-select');
    const productGrid = document.querySelector('.product-grid .row');
    const productItems = document.querySelectorAll('.product-item');

    function sortProducts(sortOrder) {
        let productsArray = Array.from(productItems);

        productsArray.sort((a, b) => {
            const priceA = parseInt(a.dataset.price);
            const priceB = parseInt(b.dataset.price);

            if (sortOrder === 'asc') {
                return priceA - priceB; // ต่ำไปสูง
            } else if (sortOrder === 'desc') {
                return priceB - priceA; // สูงไปต่ำ
            }
        });

        // ลบ product items เดิมออกจาก grid
        while (productGrid.firstChild) {
            productGrid.removeChild(productGrid.firstChild);
        }

        // เพิ่ม product items ที่เรียงแล้วกลับเข้าไปใน grid
        productsArray.forEach(item => productGrid.appendChild(item));
    }

    // เรียงลำดับเริ่มต้น
    sortProducts(sortPriceSelect.value);

    sortPriceSelect.addEventListener('change', function() {
        sortProducts(this.value);
    });
});

