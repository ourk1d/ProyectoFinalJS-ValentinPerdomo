const button = document.getElementsByClassName ('button') [0]
const paginas = document.getElementsByClassName ('paginas') [0]

button.addEventListener('click',() => {
    paginas.classList.toggle('active')
})