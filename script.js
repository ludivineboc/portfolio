const projects = [
    {
        title: "CPothier Makeup",
        tags: ["UI/UX Design", "Conception d'identité", "Front end", "CMS"],
        description: `
              Refonte d'identité et développement front end du site de la
              maquilleuse profesionnel Christine Pothier.
            `,
        image: "asset/cpothier.png",
        lien:"cpothier.html"
    },
    {
        title: "Ui•nktober",
        tags: ["UI/UX Design", "Prototypage", "Branding"],
        description: `Conception d'interfaces mobiles à l'occasion du inktober.`,
        image: "asset/uinktober.png",
        lien:"uiInktober.html"
    },
    {
        title: "Blam Audio",
        tags: ["Graphisme", "Packaging", "Branding"],
        description: `Réalisation de packaging et recherche d'identités visuelle.`,
        image: "asset/blamAudio.png",
        lien:"blam.html"
    },
    {
        title: "Plateforme d'exercices",
        tags: ["Pédagogie", "UX design", "Éditorialisation"],
        description: `
            Conception et maintenance d'une plateforme de cours et d'exercices
            dev front (HTML, CSS, JS) pour les apprenants du programme La toile
            dispensé au makers Lab de L'em Lyon.
          `,
        image: "asset/plateforme.png",
        lien:"plateforme.html"
    },
    {
        title: "Parents confinés",
        tags: ["Édito", "UX Design", "fonr end"],
        description: `Conception et maintenance d'une plateforme collaborative à
            destination des parents confinés afin de vivre plus sereinement le
            confinement avec leurs enfants.`,
        image: "asset/parents.png",
        lien:"parentsConfines.html"
    },
        {
        title: "Innovation responsable d'anticipation",
        tags: ["Édito", "Recherche",  "Management de l'innovation"],
        description: `
            Rédaction d'un mémoire de recherche sur les activités d'innovation
            responsable au sein du Lab ERASME de la métropole de Lyon.
          `,
        image: "asset/innoResponsable.jpg",
        lien:"innovationResponsable.html"
    },
    {
        title: "Voir l'incertain",
        tags: ["Recherche en design", "Graphisme", "Créative coding"],
        description: `
            Conception d'une bibliothèque de formes graphiques. Travail est issu d'un mémoire de recherche
            traitant la question de la représentation de l'incertitude dans les
            projections climatiques.
          `,
        image: "asset/voirincertain.png",
        lien:"voirIncertain.html"
    }
];

const track = document.getElementById("carouselTrack");
const info = document.getElementById("projectInfo");
const title = document.getElementById("title")
const hashtag = document.getElementById("hashtag")

// inject slides
projects.forEach(project => {
    const div = document.createElement("div");
    div.classList.add("swiper-slide", "project-card" );

    div.innerHTML = `<a href="${project.lien}" class="img-link"><img src="${project.image}" alt="" ></a>`;

    track.appendChild(div);
});

// update info
function updateProject(index) {
    const project = projects[index];

    title.innerHTML = `    
    <h3>${project.title}</h3>
    `

    hashtag.innerHTML=`
    <p>${project.tags.map(tag => `#${tag}`).join(" ")}</p>`
    
    info.innerHTML = `
    <p class="mb-10">${project.description}</p>
    <a href="${project.lien}" class="decoration-none bold">En savoir plus ↗</a>
  `;
}

// init swiper
const swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30, // desktop
    centeredSlides: false, 
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0, // on gère le padding en JS si nécessaire

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {       // mobile
            spaceBetween: 10, // moins d’espace entre les slides
        },
        501: {     // desktop
            spaceBetween: 30,
        }
    },

    on: {
        slideChange: function () {
            updateProject(this.activeIndex);
        }
    }
});


const swiperEl = document.querySelector(".mySwiper");
const lastSlideWidth = 300; // largeur fixe de ta slide
const containerWidth = swiperEl.offsetWidth;

swiperEl.style.paddingRight = `${containerWidth - lastSlideWidth - 100}px`; 
// 100 = ton margin-left

// init first project
updateProject(0);




const burgerBtn = document.getElementById("burgerBtn");
const navMenu = document.getElementById("navMenu");

burgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");

    // changer l'icône
    if (navMenu.classList.contains("show")) {
        burgerBtn.classList.remove("ph-list");
        burgerBtn.classList.add("ph-x");
    } else {
        burgerBtn.classList.remove("ph-x");
        burgerBtn.classList.add("ph-list");
    }
});



