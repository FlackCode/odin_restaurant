let navLinks = document.querySelectorAll('.navLinks');

let content = document.getElementById('content');


let landing = document.createElement('div');
let dim = document.createElement('div');
let landingHeader = document.createElement('h1');
let landingParagraph = document.createElement('p');


landingHeader.textContent = 'Welcome to our page!';
landingParagraph.textContent = 'This is a brand new restaurant. We hope you will enjoy your stay and your meal.';

landing.classList.add('landing');
dim.classList.add('dim');


content.appendChild(landing);
landing.appendChild(dim);
dim.appendChild(landingHeader);
dim.appendChild(landingParagraph);

let belowContent = document.createElement(`div`);
let dim2 = document.createElement(`div`);
belowContent.classList.add(`belowContent`);
dim2.classList.add('dim2');
belowContent.appendChild(dim2)

function showTab(tabIndex) {
    if (tabIndex === 0) {
        landingHeader.textContent = 'Welcome to our page!';
        landingParagraph.textContent = 'This is a brand new restaurant. We hope you will enjoy your stay and your meal.';
        belowContent.style.background = `url('images/restaurant2.jpg')`;
        document.body.removeChild(belowContent);
    }
    else if(tabIndex === 1){
        landingHeader.textContent = 'Menu';
        landingParagraph.textContent = 'Check out our delicious menu options!';
        document.body.appendChild(belowContent);
        belowContent.style.background = `url('images/menu.jpg')`;
        belowContent.style.backgroundRepeat = `no-repeat`;
        belowContent.style.backgroundSize = `cover`;
        belowContent.style.backgroundPosition = `center`;
    }
    else if(tabIndex === 2){
        landingHeader.textContent = 'Delivery';
        landingParagraph.textContent = 'Check out our delivery options and choose the best one for you!';
        document.body.appendChild(belowContent);
        belowContent.style.background = `url('images/delivery.jpg')`;
        belowContent.style.backgroundRepeat = `no-repeat`;
        belowContent.style.backgroundSize = `cover`;
        belowContent.style.backgroundPosition = `center`;
    }
    else if(tabIndex === 3){
        landingHeader.textContent = 'Contacts';
        landingParagraph.textContent = 'Check out our contact information!';
        document.body.appendChild(belowContent);
        belowContent.style.background = `url('images/restaurant2.jpg')`;
        belowContent.style.backgroundRepeat = `no-repeat`;
        belowContent.style.backgroundSize = `cover`;
        belowContent.style.backgroundPosition = `center`;
    }
    else if(tabIndex === 4){
        landingHeader.textContent = 'About Us';
        landingParagraph.textContent = 'Learn more about our restaurant and our team.';
        document.body.appendChild(belowContent);
        belowContent.style.background = `url('images/restaurant2.jpg')`;
        belowContent.style.backgroundRepeat = `no-repeat`;
        belowContent.style.backgroundSize = `cover`;
        belowContent.style.backgroundPosition = `center`;
    }
}
navLinks.forEach((link, index) => {
    link.addEventListener(`click`, () => {
        showTab(index);
    });
});

