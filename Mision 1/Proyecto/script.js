document.addEventListener("DOMContentLoaded", function () {
    const logos = {
        "logo-nike": {
            original: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
            selected: "https://1000marcas.net/wp-content/uploads/2019/11/Nike-emblema.jpg",
            name: "Nike"
        },
        "logo-adidas": {
            original: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
            selected: "https://static.vecteezy.com/system/resources/thumbnails/010/994/345/small/adidas-logo-white-symbol-with-name-clothes-design-icon-abstract-football-illustration-with-black-background-free-vector.jpg",
            name: "Adidas"
        },
        "logo-newbalance": {
            original: "https://w7.pngwing.com/pngs/340/901/png-transparent-new-balance-logo-nb-thumbnail.png",
            selected: "../Imagenes_Videos/Imagenes/new_balance_black.png",
            name: "New Balance"
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
        img.src = logos[img.id].selected;
        item.classList.add("selected");
        span.textContent = logos[img.id].name;
        span.style.visibility = "visible";
        img.style.width = "120px";
    }

    function loadImagesForLogo(logoId) {
        const logoFolder = `/Mision 1/Imagenes_Videos/${logoId}/`; 
        const imageNames = [ "image1.jpeg","image2.jpeg","image3.jpeg"]; // Asegúrate de que las imágenes se llamen así
        
        carouselImages.innerHTML = ""; // Limpiar el carrusel

        imageNames.forEach(image => {
            const imgUrl = logoFolder + image;
            
            fetch(imgUrl)
                .then(response => {
                    if (response.ok) {
                        const imgElement = document.createElement("img");
                        imgElement.src = imgUrl; // Crea la ruta completa
                        imgElement.alt = `${logos[logoId].name} Image`;
                        imgElement.className = "carousel-image"; 
                        carouselImages.appendChild(imgElement);
                    }
                })
                .catch(error => {
                    console.error(`Error al cargar la imagen: ${imgUrl}`, error);
                    // No hacer nada si hay un error, solo se omite la imagen
                });
        });
    }
});
