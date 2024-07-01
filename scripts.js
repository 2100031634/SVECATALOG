document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('navbar-toggle');
    const navbarMenu = document.getElementById('navbar-menu');

    toggleButton.addEventListener('click', () => {
        navbarMenu.classList.toggle('show');
    });
});


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted successfully!');
});
let brands = [
    { name: "Brand 1", description: "Britania",Image:"./images/brit.jpg" },
    { name: "Brand 2", description: "Cadbury",Image:"./images/cad.jpeg" },
    { name: "Brand 3", description: "Wingreens",Image:"./images/win.jpeg" },
    { name: "Brand 4", description: "Winkies",Image:"./images/winkies.jpeg" }
];

document.addEventListener('DOMContentLoaded', () => {
    displayBrands();
});

function displayBrands() {
    const brandCards = document.querySelector('#brands .brand-cards');
    brandCards.innerHTML = '';

    brands.forEach(brand => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `<h2>${brand.name}</h2><p>${brand.description}</p><img src="${brand.Image}" alt="not found"/>`;
        brandCards.appendChild(card);
    });
}

