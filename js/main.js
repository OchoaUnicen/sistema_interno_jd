document.addEventListener('DOMContentLoaded', function () {

let recuadro_consultas = document.getElementById("recuadro_consultas");
let recuadro_circuito = document.getElementById("recuadro_circuito");
let recuadro_fotos = document.getElementById("recuadro_fotos");
let recuadro_parana_tiger = document.getElementById("recuadro_parana_tiger");



recuadro_consultas.style.cursor = "pointer";
recuadro_circuito.style.cursor = "pointer";
recuadro_fotos.style.cursor = "pointer";
recuadro_parana_tiger.style.cursor = "pointer";



recuadro_consultas.addEventListener('click', function () {
    location.href='mensajeria.html';
});

recuadro_circuito.addEventListener('click', function () {
    location.href='circuito.html';
});

// recuadro_fotos.addEventListener('click', function () {
//     location.href='mensajeria.html';
// });

// recuadro_parana_tiger.addEventListener('click', function () {
//     location.href='mensajeria.html';
// });









});