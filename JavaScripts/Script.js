const modalOpenBtns = document.querySelectorAll(".modal-open");
const modalCloseBtns = document.querySelectorAll(".modal-close");
const body = document.querySelector("body");

modalOpenBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        let modal = btn.getAttribute("data-modal");
        document.getElementById(modal).style.display = "block";
        body.classList.add("prevent-background-scroll");
    });
});

modalCloseBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        let modal = (btn.closest(".modal").style.display = "none");
        body.classList.remove("prevent-background-scroll");
    });
});

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
        e.target.style.display = "none";
        body.classList.remove("prevent-background-scroll");
    }
});

// Selecciona la imagen y el contenedor
var beerImage = document.getElementById('beer-image');
var beerContainer = document.getElementById('beer-container');

// Agrega un evento al contenedor para manejar el clic
beerContainer.addEventListener('click', function () {
    // Verifica si la imagen tiene la clase 'expanded'
    var isExpanded = beerImage.classList.contains('expanded');

    // Si está expandida, la contrae; si no, la expande
    if (isExpanded) {
        beerImage.classList.remove('expanded');
    } else {
        beerImage.classList.add('expanded');
    }
});

// Recuperar el contador actual desde el almacenamiento local
var visitCount = localStorage.getItem('visitCount') || 0;

// Incrementar el contador
visitCount++;

// Mostrar el contador en la página
var visitCounterElement = document.getElementById('visit-counter');
visitCounterElement.innerHTML = '<p>Visita número: ' + visitCount + '</p>';

// Guardar el nuevo contador en el almacenamiento local
localStorage.setItem('visitCount', visitCount);