let offset = 0;
const sliderWrapper = document.querySelector('.slider-wrapper');
const sliderNext = document.querySelector('#btnArrow2');
const sliderPrev = document.querySelector('#btnArrow1');
let card = document.querySelector('.card');
let katrine = document.getElementById('Katrine');
let jennifer = document.getElementById('Jennifer');
let woody = document.getElementById('Woody');
let sophia = document.getElementById('Sophia');
let timmy = document.getElementById('Timmy');
let charly = document.getElementById('Charly');
let skarlett = document.getElementById('Skarlett');
let freddie = document.getElementById('Freddie');
let modal = document.querySelector ('.modal');
let modalContent = document.querySelector ('.modal-content');
let type = document.querySelector ('.type');
let breed = document.querySelector ('.breed');
let petName = document.querySelector ('.name');
let age = document.querySelector ('.age');
let inoculations = document.querySelector ('.inoculations');
let diseases = document.querySelector ('.diseases');
let parasites = document.querySelector ('.parasites');
let description = document.querySelector('.description');
let image = document.querySelector('.image');
let close = document.getElementsByClassName("close")[0];
close.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
}
sliderNext.addEventListener('click', function(){
  offset = offset + card.offsetWidth;
  sliderWrapper.style.left = -offset + 'px';
});
sliderPrev.addEventListener('click', function(){
  offset = offset - card.offsetWidth;
  sliderWrapper.style.left = -offset + 'px';
});
katrine.addEventListener ('click', function () {
  modal.style.display = 'block';
  image.src = "images/pets-katrine.png";
  petName.innerHTML = "Katrine";
  type.innerHTML = "Cat";
  breed.innerHTML = "British Shorthair";
  description.innerHTML = "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations."
  age.innerHTML = " 6 months";
  inoculations.innerHTML = " panleukopenia";
  diseases.innerHTML = " none";
  parasites.innerHTML = " none";
});
jennifer.addEventListener ('click', function () {
  modal.style.display = 'block';
  image.src = "images/pets-jennifer.png";
  petName.innerHTML = "Jennifer";
  type.innerHTML = "Dog";
  breed.innerHTML = "Labrador";
  description.innerHTML = "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys."
  age.innerHTML = " 2 months";
  inoculations.innerHTML = " none";
  diseases.innerHTML = " none";
  parasites.innerHTML = " none";
});
woody.addEventListener ('click', function () {
  modal.style.display = 'block';
  image.src = "images/pets-woody.png";
  petName.innerHTML = "Woody";
  type.innerHTML = "Dog";
  breed.innerHTML = "Golden Retriever";
  description.innerHTML = "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him."
  age.innerHTML = " 3 years 6 months";
  inoculations.innerHTML = " adenovirus, distemper";
  diseases.innerHTML = " right back leg mobility reduced";
  parasites.innerHTML = " none";
});
sophia.addEventListener ('click', function () {
  modal.style.display = 'block';
  image.src = "images/pets-sophia.png";
  petName.innerHTML = "Sophia";
  type.innerHTML = "Dog";
  breed.innerHTML = "Shih tzu";
  description.innerHTML = "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice."
  age.innerHTML = " 1 months";
  inoculations.innerHTML = " parvovirus";
  diseases.innerHTML = " none";
  parasites.innerHTML = " none";
});
timmy.addEventListener ('click', function () {
  modal.style.display = 'block';
  image.src = "images/pets-timmy.png";
  petName.innerHTML = "Timmy";
  type.innerHTML = "Cat";
  breed.innerHTML = "British Shorthair";
  description.innerHTML = "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with."
  age.innerHTML = " 2 years 3 months";
  inoculations.innerHTML = " calicivirus, viral rhinotracheitis";
  diseases.innerHTML = " kidney stones";
  parasites.innerHTML = " none";
});
charly.addEventListener ('click', function () {
  modal.style.display = 'block';
  image.src = "images/pets-charly.png";
  petName.innerHTML = "Charly";
  type.innerHTML = "Dog";
  breed.innerHTML = "Jack Russell Terrier";
  description.innerHTML = "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy."
  age.innerHTML = " 8 years";
  inoculations.innerHTML = " bordetella bronchiseptica, leptospirosis";
  diseases.innerHTML = " deafness, blindness";
  parasites.innerHTML = " lice, fleas";
});
skarlett.addEventListener ('click', function () {
  modal.style.display = 'block';
  image.src = "images/pets-scarlet.png";
  petName.innerHTML = "Skarlett";
  type.innerHTML = "Dog";
  breed.innerHTML = "Jack Russell Terrier";
  description.innerHTML = "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human."
  age.innerHTML = " 3 months";
  inoculations.innerHTML = " parainfluenza";
  diseases.innerHTML = " none";
  parasites.innerHTML = " none";
});
freddie.addEventListener ('click', function () {
  modal.style.display = 'block';
  image.src = "images/pets-freddie.png";
  petName.innerHTML = "Freddie";
  type.innerHTML = "Cat";
  breed.innerHTML = "British Shorthair";
  description.innerHTML = "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home."
  age.innerHTML = " 2 months";
  inoculations.innerHTML = " rabies";
  diseases.innerHTML = " none";
  parasites.innerHTML = " none";
});