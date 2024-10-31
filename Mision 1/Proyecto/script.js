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

    logoItems.forEach(item => {
        const img = item.querySelector(".logo-animated");
        const span = item.querySelector(".logo-name");

        img.addEventListener("click", () => {
            resetLogos();
            selectLogo(img, item, span);
        });
    });

    function resetLogos() {
        logoItems.forEach(otherItem => {
            const otherImg = otherItem.querySelector(".logo-animated");
            const otherSpan = otherItem.querySelector(".logo-name");

            otherItem.classList.remove("selected");
            otherImg.src = logos[otherImg.id].original;
            otherSpan.textContent = ""; 
            otherSpan.style.visibility = "hidden"; 
        });
    }

    function selectLogo(img, item, span) {
        img.src = logos[img.id].selected;
        item.classList.add("selected");
        span.textContent = logos[img.id].name;
        span.style.visibility = "visible"; 
    }
});
