const modalContainer = document.querySelector(".modal-container")
const openChart = document.getElementById ("open")
const closeChart = document.getElementById ("close")

openChart.addEventListener('click', ()=>{ modalContainer.classList.toggle('active')
})


closeChart.addEventListener('click', ()=>{ modalContainer.classList.toggle('active')
})