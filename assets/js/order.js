const orden1 = document.getElementById ("ascendente")
const orden2 = document.getElementById ("descendente")


orden1.addEventListener('click', () => {
    products.sort((a, b) => a.price - b.price)
    console.log(products)
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";
    showProducts(products)
});


orden2.addEventListener('click', () => {
    products.sort((a, b) => b.price - a.price)
    console.log(products)
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";
    showProducts(products)
})