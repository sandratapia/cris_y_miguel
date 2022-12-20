/* eslint-disable no-undef */
'use strict';

//HAMBURGUER MENU
let menu = document.querySelector('.hamburger');
let linksMenu = document.querySelectorAll('.link_menu');
let navMenu = document.querySelector('.menuppal');

function toggleMenu(event) {
  this.classList.toggle('is-active');
  navMenu.classList.toggle('is_active');
  event.preventDefault();

  linksMenu.forEach((link) => {
    link.addEventListener('click', function () {
      navMenu.classList.remove('is_active');
      menu.classList.remove('is-active');
    });
  });
}
menu.addEventListener('click', toggleMenu, false);

let lastScrollTop = 0;
const menuComplete = document.querySelector('.menu__complete');

window.addEventListener('scroll', () => {
  let newScroll = window.scrollY;
  if (newScroll > lastScrollTop && !menuComplete.classList.contains('hidden')) {
    menuComplete.classList.add('hidden');
  }
  if (newScroll < lastScrollTop && menuComplete.classList.contains('hidden')) {
    menuComplete.classList.remove('hidden');
  }
  lastScrollTop = newScroll;
});

//COUNTDOWN
(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let birthday = 'Sep 20, 2024 00:00:00',
    countDown = new Date(birthday).getTime(),
    x = setInterval(function () {
      let now = new Date().getTime(),
        distance = countDown - now;

      (document.getElementById('days').innerText = Math.floor(distance / day)),
      (document.getElementById('hours').innerText = Math.floor(
        (distance % day) / hour
      )),
      (document.getElementById('minutes').innerText = Math.floor(
        (distance % hour) / minute
      )),
      (document.getElementById('seconds').innerText = Math.floor(
        (distance % minute) / second
      ));

      if (distance < 0) {
        let countdown = document.getElementById('countdown'),
          content = document.getElementById('content');

        countdown.style.display = 'none';
        content.style.display = 'block';

        clearInterval(x);
      }
    }, 0);
})();

//MAP
let map = L.map('map').setView([40.69184374488425, -3.5953384887228466], 15);
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
}).addTo(map);
L.control.scale().addTo(map);
let marker = L.marker([40.69184374488425, -3.5953384887228466], {
  elevation: 260.0,
  title: 'Finca Castillo de Monteviejo',
}).addTo(map);

marker
  .bindPopup(
    `
            <p>Finca Castillo de Monteviejo</p>
            <p>Teléfono: 918412099</p>
            <a href="https://www.google.com/maps/place/Finca+Castillo+de+Monteviejo/@40.691677,-3.597495,17z/data=!4m5!3m4!1s0xd43d1cf11b79e15:0xa1dd3c3c5335e75!8m2!3d40.691677!4d-3.5953063" target="_blank">
                Abrir en Google Maps
            </a>`
  )
  .openPopup();


//CARROUSEL
let slider = document.querySelector('.slider-contenedor');
let sliderIndividual = document.querySelectorAll('.contenido-slider');
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 4000;

window.addEventListener('resize', function () {
  width = sliderIndividual[0].clientWidth;
});

setInterval(function () {
  slides();
}, intervalo);



function slides() {
  slider.style.transform = 'translate(' + (-width * contador) + 'px)';
  slider.style.transition = 'transform 1s';
  contador++;

  if (contador === sliderIndividual.length) {
    setTimeout(function () {
      slider.style.transform = 'translate(0px)';
      slider.style.transition = 'transform 0s';
      contador = 1;
    }, 1500);
  }
}
