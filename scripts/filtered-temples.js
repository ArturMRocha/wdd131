document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("year");
    const lastModifiedSpan = document.getElementById("lastModified");
    const gallery = document.querySelector(".gallery");
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector("nav ul");
  
    // Atualiza o rodapé com o ano atual e a última data de modificação
    yearSpan.textContent = new Date().getFullYear();
    lastModifiedSpan.textContent = document.lastModified;
  
    // Dados dos templos
    const temples = [
      {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
      },
      {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
      },
      {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
      },
      {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
      },
      {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
      },
      {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
      },
      {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
      },
      {
          templeName: "Brasilia City Brazil",
          location: "Brasilia City, Brazil",
          dedicated: "2023, September, 17",
          area: 25000,
          imageUrl:
          "https://churchofjesuschristtemples.org/assets/img/temples/brasilia-brazil-temple/brasilia-brazil-temple-39184.jpg"
        },
        {
          templeName: "Rome City Italy",
          location: "Rome City, Italy",
          dedicated: "2019, March, 12",
          area: 41010,
          imageUrl:
          "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642.jpg"
        },
        {
          templeName: " Nauvoo  Illinois",
          location: " Nauvoo City, Illinois",
          dedicated: "2002, June, 30",
          area: 54000,
          imageUrl:
          "https://churchofjesuschristtemples.org/assets/img/temples/nauvoo-illinois-temple/nauvoo-illinois-temple-49532.jpg"
        },
  
      ];
  
    // Renderiza cartões de templos
    const renderCards = (filterFn = null) => {
      gallery.innerHTML = "";
      const filteredTemples = filterFn ? temples.filter(filterFn) : temples;
  
      filteredTemples.forEach((temple) => {
        const card = document.createElement("figure");
        card.innerHTML = `
          <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
          <figcaption>
            <h3>${temple.templeName}</h3>
            <p>Localização: ${temple.location}</p>
            <p>Dedicação: ${temple.dedicated}</p>
            <p>Área: ${temple.area} metros quadrados</p>
          </figcaption>
        `;
        gallery.appendChild(card);
      });
    };
  
    // Função de filtro
    const filters = {
      all: null,
      ancient: (temple) => new Date(temple.dedicated).getFullYear() < 1900,
      modern: (temple) => new Date(temple.dedicated).getFullYear() > 2000,
      large: (temple) => temple.area > 90000,
      small: (temple) => temple.area < 10000,
    };
  
    // Adiciona eventos para os botões de navegação
    document.querySelectorAll("nav ul li").forEach((item) => {
      item.addEventListener("click", () => {
        const filterKey = item.id;
        renderCards(filters[filterKey]);
      });
    });
  
    // Mostra todos os templos inicialmente
    renderCards();
  
    // Função do botão de hambúrguer
    hamburger.addEventListener("click", () => {
      nav.classList.toggle("visible");
      hamburger.textContent = nav.classList.contains("visible") ? "X" : "☰";
    });
  });
  