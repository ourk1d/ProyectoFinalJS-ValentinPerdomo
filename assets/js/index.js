/*funcion para renderizar objetos en stock */
let products = []


fetch("https://6334e2f9ea0de5318a0a2ad6.mockapi.io/products")
.then(response => response.json())
.then(data => {
  data.forEach(item => {
    products.push(item)
  });
  showProducts(products);
})

const showProducts = (products) => {
    const productList = document.getElementById("product-list");

    products.forEach( product => {
        const div = document.createElement("div")
        div.classList.add ("card")
        div.innerHTML =`<div class="card">
                            <img src="${product.img}" alt="${product.alt}">
                            <h4 class="card-title">${product.name}</h4>
                            <p class="card-text">Estado: ${product.condition}</p>
                            <p class="card-text">Talle: ${product.size}</p>
                            <p class="card-price">Precio: $ ${product.price}</p>
                            <button class="btn btn-primary" id=boton${product.id}>Añadir al carrito</button>
                        </div>`
        
        productList.appendChild (div)
        
        const boton = document.getElementById ( `boton${product.id}`)

        boton.addEventListener ('click', () => {
            addProduct(product.id)
            showChart(products)
            console.log(shoppingChart);
        })
        }) ;
}

