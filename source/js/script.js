const listSurvivor = document.querySelector(".survivor__list");

const survivorArr = [
  {
    image: "./img/survivor/s1.png",
    title: "Связь",
    link: "#",
  },
  {
    image: "./img/survivor/s2.png",
    title: "Спокойствие духа",
    link: "#",
  },
  {
    image: "./img/survivor/s3.png",
    title: "Ловкое приземление",
    link: "#",
  },
  {
    image: "./img/survivor/s4.png",
    title: "Туз в рукаве",
    link: "#",
  },
  {
    image: "./img/survivor/s5.png",
    title: "Познания в ботанике",
    link: "#",
  },
  {
    image: "./img/survivor/s6.png",
    title: "Прояви себя",
    link: "#",
  },
];

listSurvivor.innerHTML += survivorArr.map(
  (elem) => `<li>
          <a href="${elem.link}"
            ><img src="${elem.image}" alt="perk"
          /></a>
          <p>${elem.title}</p>
        </li>`
);
