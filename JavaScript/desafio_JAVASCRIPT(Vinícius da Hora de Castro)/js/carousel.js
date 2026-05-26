

//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {
    constructor(image, title, url) {
        this.image = image;
        this.title = title;
        this.url = url;
    }

    static Start(arr) {
        if (arr) {

            if (arr.length > 0) {
                Carousel._arr = arr;
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(); //start
                Carousel._interval = setInterval(function () { Carousel.Next(1); }, 4000);
            }

        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(direction = 1) {
        if (Carousel._arr.length > 0) {
            Carousel._sequence = (Carousel._sequence + direction + Carousel._size) % Carousel._size;
            let item = Carousel._arr[Carousel._sequence];
            let title = document.getElementById("carousel-title");
            let carrossel = document.getElementById("carousel");
            carrossel.innerHTML = 
            `<button class="carousel-btn" onclick="Carousel.Next(-1)">&#8592</button> 
            <a class="carousel-link" href="${item.url}">
                <img class="carousel-image" src="${item.image}">
            </a>
            <button class="carousel-btn" onclick="Carousel.Next(1)">&#8594</button>`;
            `<br>`
            title.innerHTML = `<a href="${item.url}">${item.title}</a>`;
        }
    }
};
