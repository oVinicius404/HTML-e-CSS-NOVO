let carouselArr = [];

class Carousel {
    constructor(image, title, url) {
        this.image = image;
        this.title = title;
        this.url = url;
    }

    static Start(arr) {
        if (arr &&arr.length > 0) {
            Carousel._items = arr;
            Carousel._sequence = 0;
            Carousel.Next();
            Carousel._interval = setInterval(function() {
                Carousel.Next();
            }, 5000);
        } else {
            throw "O método Start precisa receber uma Array preenchida.";
        }
    }

    static Next() {
        let atual = Carousel._items[Carousel._sequence];

        let divCarousel = document.getElementById("carousel");

        let divTitle = document.getElementById("carousel-title");
        
        divCarousel.innerHTML = '<img src="${atual.image}" alt="${atual.title}" class="img-fluid">';

        divTitle.innerHTML = '<p>${atual.title} <a href="${atual.url}">Saiba mais</a></p>';

        divCarousel.style.transition = "all 0.5s ease";
        divCarousel.style.opacity = "1";

        Carousel._sequence++;

        if (Carousel._sequence >= Carousel._size) {
            Carousel._sequence = 0;
        }
    }
}

