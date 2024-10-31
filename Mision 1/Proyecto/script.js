document.addEventListener("DOMContentLoaded", function () {
    const logos = {
        "logo-nike": {
            original: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
            selected: "https://1000marcas.net/wp-content/uploads/2019/11/Nike-emblema.jpg",
            name: "Nike",
            products: [
                { name: "Zapato Nike", price: "$100", image: "image1.jpeg" },
                { name: "Zapato Nike 2", price: "$120", image: "image2.jpeg" },
                { name: "Zapato Nike 3", price: "$140", image: "image3.jpeg" },
            ]
        },
        "logo-adidas": {
            original: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
            selected: "https://static.vecteezy.com/system/resources/thumbnails/010/994/345/small/adidas-logo-white-symbol-with-name-clothes-design-icon-abstract-football-illustration-with-black-background-free-vector.jpg",
            name: "Adidas",
            products: [
                { name: "Zapato Adidas", price: "$90", image: "image1.jpeg" },
                { name: "Zapato Adidas 2", price: "$95", image: "image2.jpeg" },
                { name: "Zapato Adidas 3", price: "$115", image: "image3.jpeg" },
            ]
        },
        "logo-newbalance": {
            original: "https://w7.pngwing.com/pngs/340/901/png-transparent-new-balance-logo-nb-thumbnail.png",
            selected: "../Imagenes_Videos/Imagenes/new_balance_black.png",
            name: "New Balance",
            products: [
                { name: "Zapato New Balance", price: "$80", image: "image1.jpeg" },
                { name: "Zapato New Balance 2", price: "$85", image: "image2.jpeg" },
                { name: "Zapato New Balance 3", price: "$105", image: "image3.jpeg" },
            ]
        }
    };
    

    const logoItems = document.querySelectorAll(".logo-item");
    const carouselImages = document.getElementById("carousel-images");

    logoItems.forEach((item) => {
        const img = item.querySelector(".logo-animated");
        const span = item.querySelector(".logo-name");

        img.addEventListener("click", function () {
            resetLogos();
            selectLogo(this, item, span);
            loadImagesForLogo(img.id); 
        });
    });

    function resetLogos() {
        logoItems.forEach((otherItem) => {
            const otherImg = otherItem.querySelector(".logo-animated");
            const otherSpan = otherItem.querySelector(".logo-name");

            otherItem.classList.remove("selected");
            otherImg.src = logos[otherImg.id].original;
            otherSpan.textContent = "";
            otherSpan.style.visibility = "hidden";
            otherImg.style.width = "120px";
        });

        carouselImages.innerHTML = "";
    }

    function selectLogo(img, item, span) {
     //   console.log('Test>>>',img, item, span)
        img.src = logos[img.id].selected;
        item.classList.add("selected");
        span.textContent = logos[img.id].name;
        span.style.visibility = "visible";
        img.style.width = "120px";
    }
    function loadImagesForLogo(logoId) {
        const logoData = logos[logoId];
        const products = logoData.products; // Obtén los productos del logo
    
        carouselImages.innerHTML = ""; // Limpiar el carrusel
    
        products.forEach(product => {
            const card = document.createElement("div");
            card.className = "card"; // Clase para la tarjeta
    
            const img = document.createElement("img");
            img.src = `/Mision 1/Imagenes_Videos/${logoId}/${product.image}`; // Ruta de la imagen
            img.alt = product.name; // Nombre del zapato
    
            const productName = document.createElement("div");
            productName.className = "product-name";
            productName.textContent = product.name; // Nombre del producto
    
            const productPrice = document.createElement("div");
            productPrice.className = "product-price";
            productPrice.textContent = product.price; // Precio del producto
    
            // Añade las imágenes y datos al contenedor de la tarjeta
            card.appendChild(img);
            card.appendChild(productName);
            card.appendChild(productPrice);
    
            // Añade la tarjeta al carrusel
            carouselImages.appendChild(card);
        });
    }
    
    
});



