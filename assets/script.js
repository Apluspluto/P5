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

//Variable globale 
const flechegauche = document.querySelector(".arrow_left");
const flechedroite = document.querySelector(".arrow_right");
let divdots = document.querySelector(".dots");
const img = document.querySelector(".banner-img");
const paragraphe = document.querySelector("#banner p")
let index = 0

//Bullet point
function bulletPoint () {
	for (let i = 0; i < slides.length ; i ++) {
		let dots = document.createElement("div")
		dots.classList.add("dot");
		divdots.appendChild(dots);
		if (i === index){
			dots.classList.add("dot_selected"); 
		}
	}
}
bulletPoint()
//Clique droit

	flechedroite.addEventListener("click", function(){
		const slidedots = document.querySelectorAll(".dots .dot");
		slidedots[index].classList.remove("dot_selected");
		index ++;
		if (index > slides.length - 1){
			index = 0
		}
		slidedots[index].classList.add("dot_selected")
		img.src = "assets/images/slideshow/"+slides[index].image;
		paragraphe.innerHTML = slides[index].tagLine; 
	})
 


//Clique gauche

	flechegauche.addEventListener("click", function(){
		const slidedots = document.querySelectorAll(".dots .dot");
		slidedots[index].classList.remove("dot_selected");
		index --;
		if (index < 0){
			index = slides.length - 1
		}
		slidedots[index].classList.add("dot_selected")
		img.src = "assets/images/slideshow/"+slides[index].image;
		paragraphe.innerHTML = slides[index].tagLine; 
	})
 


