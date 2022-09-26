let shoppingChart = []



document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('shoppingChart')){
        shoppingChart = JSON.parse(localStorage.getItem('shoppingChart'))
        showChart()
    }
})  


const savedChart = () => {
    shoppingChart = JSON.parse(localStorage.getItem('shoppingChart'))
    showChart()
} 


/*funcion para agregar carritos al item*/

const addProduct = (productId) => {
    const exist = shoppingChart.some (product => product.id === productId)
    if (exist) {
        Swal.fire({
            icon: 'error',
            title: 'Ups...',
            text: 'El articulo ya esta en su carrito!',
            confirmButtonColor: '#d6715fda',
            background: '#fff1ccfd'
          })
    }
    else {
    const renderChartProducts = () => {
        let product = products.find (product => product.id == productId)
        shoppingChart.push(product)
    }
    Swal.fire({
        icon: 'success',
        title: 'Listo!',
        text: 'Se agrego el item a su carrito',
        confirmButtonColor: '#36846b',
        background: '#fff1ccfd'
      })
    renderChartProducts()
}}

/* renderizar carrito */

const showChart = () => {
    const chart = document.getElementById ("shopping-chart")
    //limpio el carrito
    chart.innerHTML = ""
    //ciclo para renderizar items
    shoppingChart.forEach(product => {
        let div = document.createElement("div")
        div.classList.add("chartProduct")
        div.innerHTML = `<p>${product.name}</p>
                        <p class: "item-price">Precio: ${product.price}</p> 
                        <button id="deleteOnChart(${product.id})" class="boton-eliminar">Eliminar</button>`;
        
        chart.appendChild(div) 
        //boton eliminar items
        const boton = document.getElementById ( `deleteOnChart(${product.id})`)
        boton.addEventListener ('click', () => {
            deleteOnChart(product.id)
            localStorage.setItem('shoppingChart', JSON.stringify(shoppingChart))
        })  
        localStorage.setItem('shoppingChart', JSON.stringify(shoppingChart))
        })
        
    //en caso que el carrito sea cero, mostrar carrito vacio, sino sumar total de productos
    shoppingChart.length === 0 ? emptyChart() : total()
}

/*funcion para eliminar items del carrito*/

const deleteOnChart = (productId) => {
    const item = shoppingChart.find((product) => product.id === productId)
    const index = shoppingChart.indexOf(item) //Busca indice del objeto por la id.
    shoppingChart.splice(index, 1)
    showChart()
}

/*funcion en caso que el carrito este vacio*/

const emptyChart = () => {
    const chart = document.getElementById ("shopping-chart")
    let div = document.createElement("div")
    div.classList.add("emptyChart")
    div.innerHTML = `Su carrito esta vacio`;
    chart.appendChild(div) 
    total ()
}


/*funcion para sumar precio total */
const total = () => {
const totalPrice = document.getElementById('totalPrice')
totalPrice.innerText = shoppingChart.reduce((acumulador, item) => acumulador + item.price, 0);}