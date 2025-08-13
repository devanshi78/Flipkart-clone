const slides = document.querySelectorAll('.slide');
const prevbtn = document.querySelector('.prev');
const nextbtn = document.querySelector('.next');

let currentslide = 0;

function showslides(index){
    slides.forEach(slide => {
        slide.style.display = 'none';
    })
    slides[index].style.display = 'flex';
}

function nextslide(){
    currentslide++;
    if(currentslide >= slides.length){
        currentslide = 0;
    }
    showslides(currentslide);
}

function prevslide(){
    currentslide--;
    if(currentslide < 0){
        currentslide = slides.length - 1;
    }
    showslides(currentslide);
}

let slideInterval = setInterval(nextslide,3000);

prevbtn.addEventListener('click',prevslide);
nextbtn.addEventListener('click',nextslide);

showslides(currentslide);

// let dealCard = document.getElementsByClassName(".deal-card");

let dealCard = document.querySelectorAll(".deal-card");

let products = [];

dealCard.forEach(card => {
    let title = card.querySelector("span").innerText;
    let price = card.querySelector("h6").innerText;
    products.push({
        title,
        price,
        element: card.closest(".col-md-2")
    });
});
console.log(products);

let search = document.getElementById("search");

search.addEventListener("input",(e) => {
    let searchStr = e.target.value.toLowerCase();

    products.forEach(product => {
        if (
            product.title.toLowerCase().includes(searchStr) ||
            product.price.toLowerCase().includes(searchStr)
        ) {
            product.element.style.display = ""; // show
        } else {
            product.element.style.display = "none"; // hide
        }
    });
});