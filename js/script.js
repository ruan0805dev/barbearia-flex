function agendar() {
    window.open("https://wa.me/5500000000000", "_blank");
}


/* MOSTRAR HORÁRIO */
function mostrarHorario() {

    const horario = document.getElementById("horario");

    if (horario.innerHTML === "") {
        horario.innerHTML = "🕒 Segunda a sábado: 08h às 19h";
    } else {
        horario.innerHTML = "";
    }
}


/* =========================
   ANIMAÇÃO AO ROLAR (MODERNO)
   ========================= */

const elementos = document.querySelectorAll("section, article, .card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});


elementos.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});