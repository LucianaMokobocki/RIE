document.getElementById('btn-otros-casos-ojo').onclick = function () {
    document.getElementById('modal-otros-casos-ojo').style.display = 'flex';
    for (let i = 1; i <= 6; i++) {
        activarComparador(`wrapper-ojo-caso${i}`, `slider-ojo-caso${i}`);
    }
};

document.getElementById('btn-otros-casos-dientes').onclick = function () {
    document.getElementById('modal-otros-casos-dientes').style.display = 'flex';
    for (let i = 1; i <= 6; i++) {
        activarComparador(`wrapper-dientes-caso${i}`, `slider-dientes-caso${i}`);
    }
};

function activarComparador(wrapperId, sliderId) {
    const wrapper = document.getElementById(wrapperId);
    const slider = document.getElementById(sliderId);
    const imgTop = wrapper.querySelector(".img-top");

    if (!wrapper || !slider || !imgTop) return;

    function moverSlider(posX) {
        const rect = wrapper.getBoundingClientRect();
        let pos = posX - rect.left;
        pos = Math.max(0, Math.min(pos, rect.width));
        const porcentaje = (pos / rect.width) * 100;
        slider.style.left = `${porcentaje}%`;
        imgTop.style.clipPath = `inset(0 ${100 - porcentaje}% 0 0)`;
    }

    wrapper.addEventListener("mousemove", e => moverSlider(e.clientX));
    wrapper.addEventListener("touchmove", e => {
        if (e.touches.length > 0) moverSlider(e.touches[0].clientX);
    });
}



// Activar comparadores principales al cargar
window.addEventListener("DOMContentLoaded", () => {
    activarComparador("wrapper-dientes", "slider-dientes");
    activarComparador("wrapper-ojo", "slider-ojo");
    animarInicio();
    const secciones = document.querySelectorAll("section");
    secciones.forEach(sec => {
        if (sec.id !== "inicio") {
            sec.classList.add("oculto");
        }
    });
});

// Carrusel automático
const carruselImgs = document.querySelectorAll('.carrusel-img');
let carruselIndex = 0;
setInterval(() => {
    carruselImgs[carruselIndex].classList.remove('active');
    carruselIndex = (carruselIndex + 1) % carruselImgs.length;
    carruselImgs[carruselIndex].classList.add('active');
}, 3000);

// Navegación y scroll
const links = document.querySelectorAll("nav a");
links.forEach(link => {
    link.addEventListener("click", function () {
        links.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});


function scrollAjustadoA(idElemento) {
    const elemento = document.getElementById(idElemento);
    if (elemento) {
        const offset = -120; // Ajusta este valor a gusto
        const posicion = elemento.getBoundingClientRect().top + window.scrollY + offset;
        window.scrollTo({
            top: posicion,
            behavior: 'smooth'
        });
    }
}
function mostrarSubseccion(id) {
    const subSecciones = document.querySelectorAll('.subseccion');
    subSecciones.forEach(sec => sec.classList.add('oculto'));

    const target = document.getElementById(id);
    if (target) {
        target.classList.remove('oculto');
        setTimeout(() => {
            scrollAjustadoA(id);
        }, 50); // Espera a que se muestre antes de scrollear
    }
}



function irACelia() {
    setTimeout(() => {
        const celiaAnchor = document.getElementById("celia-bio");
        if (celiaAnchor) {
            celiaAnchor.scrollIntoView({ behavior: "smooth" });
        }
    }, 300);
}

function irAThelma() {
    setTimeout(() => {
        const thelma = document.getElementById("thelma");
        if (thelma) {
            thelma.scrollIntoView({ behavior: 'smooth' });
        }
    }, 300);
}

function irAMaica() {
    setTimeout(() => {
        const maica = document.getElementById("maica");
        if (maica) {
            maica.scrollIntoView({ behavior: 'smooth' });
        }
    }, 300);
}

// Animación de inicio
function animarInicio() {
    const r = document.getElementById("r");
    const i = document.getElementById("i");
    const e = document.getElementById("e");
    const rehab = document.getElementById("rehab");
    const integ = document.getElementById("integ");
    const estet = document.getElementById("estet");
    const pincelada = document.getElementById("pincelada");

    rehab.classList.add("anim-r");
    r.style.opacity = 1;
    setTimeout(() => {
        rehab.style.display = "none";
        r.querySelector("img").style.display = "inline";

        integ.classList.add("anim-i");
        i.style.opacity = 1;
        setTimeout(() => {
            integ.style.display = "none";
            i.querySelector("img").style.display = "inline";

            estet.classList.add("anim-e");
            e.style.opacity = 1;
            setTimeout(() => {
                estet.style.display = "none";
                e.querySelector("img").style.display = "inline";

                setTimeout(() => {
                    pincelada.style.transition = "opacity 1.5s ease-in-out";
                    pincelada.style.opacity = 0.4;
                }, 100);
            }, 2000);
        }, 2000);
    }, 2000);
}

function resetearInicio() {
    // Implementa aquí el reseteo de la animación si lo necesitas
}


