document.addEventListener("DOMContentLoaded", function() {


const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]





// Bullet points du slider //

let banner = document.querySelector('#banner');
let dotsContainer = banner.querySelector('.dots');
let bannerImg = banner.querySelector('.banner-img');
let tagline = banner.querySelector('p');
let currentIndex = 0; 

// Créer les fleches //

let arrowLeft=document.createElement('img')
arrowLeft.src="./assets/images/arrow_left.png"
arrowLeft.classList.add('arrow')
arrowLeft.classList.add('arrow_left')
banner.appendChild(arrowLeft)

arrowLeft.addEventListener('click', () => {
	const newIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
	updateActiveSlide(newIndex);
});


let arrowRight=document.createElement('img')
arrowRight.src="./assets/images/arrow_right.png"
arrowRight.classList.add('arrow')
arrowRight.classList.add('arrow_right')
banner.appendChild(arrowRight)
  
arrowRight.addEventListener('click', () => {
	const newIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
	updateActiveSlide(newIndex);
});

// Créer les bullet points //

function createDots() {
  slides.forEach((slide, index) => {
    // Crée un élément 'div' pour chaque point //
    let dot = document.createElement('div');
    dot.classList.add('dot');
    
    // Ajoute un event listener pour rendre chaque dot cliquable //
    dot.addEventListener('click', () => {
      updateActiveSlide(index); 
    });

    // Ajoute le dot au conteneur //
    dotsContainer.appendChild(dot);
  });
}

// Mettre à jour le point sélectionné /
function updateDots(selectedIndex) {
  let dots = dotsContainer.querySelectorAll('.dot');
  
  dots.forEach((dot, index) => {
    if (index === selectedIndex) {
      dot.classList.add('dot_selected');
    } else {
      dot.classList.remove('dot_selected');
    }
  });
}

// Changer d'image //

function updateActiveSlide(index) {
  // Met à jour l'image du slider //
  bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;

  // Met à jour la tagline //
  tagline.innerHTML=slides[index].tagLine

  // Met à jour les dots //
  updateDots(index);

  // Met à jour l'index a//
  currentIndex = index;
}

// Initialisation : Crée les dots et affiche le premier
createDots();
updateActiveSlide(currentIndex); // Commence avec la première image active
setInterval(function(){
	updateActiveSlide((currentIndex === slides.length - 1) ? 0 : currentIndex + 1)
}, 1000);

})
