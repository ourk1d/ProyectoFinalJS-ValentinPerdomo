/*funcion para renderizar objetos en stock */

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

//llamo a la funcion

showProducts(products)