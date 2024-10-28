const btnStore = document.querySelector('.container-icon-store')
const ContainerStoreProducts = document.querySelector('.container-store-products')

btnStore.addEventListener('click', () => {
    ContainerStoreProducts.classList.toggle('hidden-store')
})

/* funcionalidad de la tienda */
const storeInfo = document.querySelector('.store-product')
const rowProduct = document.querySelector('.row-product')

/* lista de los contenedores de producto */
const productList = document.querySelector('.container-items')

/*variable de arreglo de p´roductos */
let allProduct = []



productList.addEventListener('click', e => {
    if (e.target.classList.contains('add-store')) {
        
    }
})