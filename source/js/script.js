const listSurvivor = document.querySelector(".survivor__list");

let survivorArr = [
  {
    image: "./img/survivor/s1.png",
    title: "Связь",
    link: "./survivors-skills-pages/s1.html",
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
  {
    image: "./img/survivor/s7.png",
    title: "Железная воля",
    link: "#",
  },
  {
    image: "./img/survivor/s8.png",
    title: "Городской бег",
    link: "#",
  },
  {
    image: "./img/survivor/s9.png",
    title: "Повысить ставки",
    link: "#",
  },
  {
    image: "./img/survivor/s10.png",
    title: "Сострадание",
    link: "#",
  },
  {
    image: "./img/survivor/s11.png",
    title: "Лидер",
    link: "#",
  },
  {
    image: "./img/survivor/s12.png",
    title: "Крушитель",
    link: "#",
  },
  {
    image: "./img/survivor/s13.png",
    title: "Уроки улиц",
    link: "#",
  },
  {
    image: "./img/survivor/s14.png",
    title: "Игра в открытую",
    link: "#",
  },
  {
    image: "./img/survivor/s15.png",
    title: "Сам себе доктор",
    link: "#",
  },
  {
    image: "./img/survivor/s16.png",
    title: "Адреналин",
    link: "#",
  },
];

listSurvivor.innerHTML += survivorArr
  .map(
    (elem) => `<li>
          <a href="${elem.link}"
            ><img src="${elem.image}" alt="perk"
          /></a>
          <p>${elem.title}</p>
        </li>`
  )
  .join("");
