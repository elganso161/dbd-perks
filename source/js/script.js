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
  {
    image: "./img/survivor/s17.png",
    title: "Единственный выживший",
    link: "#",
  },
  {
    image: "./img/survivor/s18.png",
    title: "Одолженное время",
    link: "#",
  },
  {
    image: "./img/survivor/s19.png",
    title: "Тревога",
    link: "#",
  },
  {
    image: "./img/survivor/s20.png",
    title: "Мы будем жить вечно",
    link: "#",
  },
  {
    image: "./img/survivor/s21.png",
    title: "Быстрый и тихий",
    link: "#",
  },
  {
    image: "./img/survivor/s22.png",
    title: "Решающий удар",
    link: "#",
  },
  {
    image: "./img/survivor/s23.png",
    title: "Оставленный позади",
    link: "#",
  },
  {
    image: "./img/survivor/s24.png",
    title: "Гибкость",
    link: "#",
  },
  {
    image: "./img/survivor/s25.png",
    title: "Крепкий орешек",
    link: "#",
  },
  {
    image: "./img/survivor/s26.png",
    title: "Спринтер",
    link: "#",
  },
  {
    image: "./img/survivor/s27.png",
    title: "Объект одержимости",
    link: "#",
  },
  {
    image: "./img/survivor/s28.png",
    title: "Несокрушимый",
    link: "#",
  },
  {
    image: "./img/survivor/s29.png",
    title: "Техник",
    link: "#",
  },
  {
    image: "./img/survivor/s30.png",
    title: "Без сожаления",
    link: "#",
  },
  {
    image: "./img/survivor/s31.png",
    title: "Аптекарь",
    link: "#",
  },
  {
    image: "./img/survivor/s32.png",
    title: "Выдержка",
    link: "#",
  },
  {
    image: "./img/survivor/s33.png",
    title: "Потанцуй со мной",
    link: "#",
  },
  {
    image: "./img/survivor/s34.png",
    title: "Самоучка",
    link: "#",
  },
  {
    image: "./img/survivor/s35.png",
    title: "Уход за больным",
    link: "#",
  },
  {
    image: "./img/survivor/s36.png",
    title: "Бессонница",
    link: "#",
  },
  {
    image: "./img/survivor/s37.png",
    title: "Детективное чутье",
    link: "#",
  },
  {
    image: "./img/survivor/s38.png",
    title: "Уникальная возможность",
    link: "#",
  },
  {
    image: "./img/survivor/s39.png",
    title: "Освобождение",
    link: "#",
  },
  {
    image: "./img/survivor/s40.png",
    title: "Поломка",
    link: "#",
  },
  {
    image: "./img/survivor/s41.png",
    title: "Проснись",
    link: "#",
  },
  {
    image: "./img/survivor/s42.png",
    title: "Выслеживание подозреваемого",
    link: "#",
  },
  {
    image: "./img/survivor/s43.png",
    title: "Через край",
    link: "#",
  },
  {
    image: "./img/survivor/s44.png",
    title: "Диверсия",
    link: "#",
  },
  {
    image: "./img/survivor/s45.png",
    title: "Искажение",
    link: "#",
  },
  {
    image: "./img/survivor/s46.png",
    title: "Солидарность",
    link: "#",
  },
  {
    image: "./img/survivor/s47.png",
    title: "Раскачка",
    link: "#",
  },
  {
    image: "./img/survivor/s48.png",
    title: "Хранитель",
    link: "#",
  },
  {
    image: "./img/survivor/s49.png",
    title: "Владение обстановкой",
    link: "#",
  },
  {
    image: "./img/survivor/s50.png",
    title: "Любыми средствами",
    link: "#",
  },
  {
    image: "./img/survivor/s51.png",
    title: "Равновесие",
    link: "#",
  },
  {
    image: "./img/survivor/s52.png",
    title: "Пристегнись",
    link: "#",
  },
  {
    image: "./img/survivor/s53.png",
    title: "Родство",
    link: "#",
  },
  {
    image: "./img/survivor/s54.png",
    title: "Самопознание",
    link: "#",
  },
  {
    image: "./img/survivor/s55.png",
    title: "Форсаж",
    link: "#",
  },
  {
    image: "./img/survivor/s56.png",
    title: "Напролом",
    link: "#",
  },
  {
    image: "./img/survivor/s57.png",
    title: "Проверка на прочность",
    link: "#",
  },
  {
    image: "./img/survivor/s58.png",
    title: "Возрождение",
    link: "#",
  },
  {
    image: "./img/survivor/s59.png",
    title: "Внутреннее исцеление",
    link: "#",
  },
  {
    image: "./img/survivor/s60.png",
    title: "Везение",
    link: "#",
  },
  {
    image: "./img/survivor/s61.png",
    title: "Ради людей",
    link: "#",
  },
  {
    image: "./img/survivor/s62.png",
    title: "Оберег души",
    link: "#",
  },
  {
    image: "./img/survivor/s63.png",
    title: "Строим на века",
    link: "#",
  },
  {
    image: "./img/survivor/s64.png",
    title: "Изучение",
    link: "#",
  },
  {
    image: "./img/survivor/s65.png",
    title: "За чужой счет",
    link: "#",
  },
  {
    image: "./img/survivor/s66.png",
    title: "Обман во благо",
    link: "#",
  },
  {
    image: "./img/survivor/s67.png",
    title: "Кровавый договор",
    link: "#",
  },
  {
    image: "./img/survivor/s68.png",
    title: "Отчаянные меры",
    link: "#",
  },
  {
    image: "./img/survivor/s69.png",
    title: "Уловка",
    link: "#",
  },
  {
    image: "./img/survivor/s70.png",
    title: "Ударный забег",
    link: "#",
  },
  {
    image: "./img/survivor/s71.png",
    title: "Без огласки",
    link: "#",
  },
  {
    image: "./img/survivor/s72.png",
    title: "Скрытый союз",
    link: "#",
  },
  {
    image: "./img/survivor/s73.png",
    title: "Визионер",
    link: "#",
  },
  {
    image: "./img/survivor/s74.png",
    title: "Отчаянная борьба",
    link: "#",
  },
  {
    image: "./img/survivor/s75.png",
    title: "Самосохранение",
    link: "#",
  },
  {
    image: "./img/survivor/s76.png",
    title: "Стиснув зубы",
    link: "#",
  },
  {
    image: "./img/survivor/s77.png",
    title: "Фугасная мина",
    link: "#",
  },
  {
    image: "./img/survivor/s78.png",
    title: "Ясновидение",
    link: "#",
  },
  {
    image: "./img/survivor/s79.png",
    title: "Световая граната",
    link: "#",
  },
  {
    image: "./img/survivor/s80.png",
    title: "Поправка",
    link: "#",
  },
  {
    image: "./img/survivor/s81.png",
    title: "Дар: круг исцеления",
    link: "#",
  },
  {
    image: "./img/survivor/s82.png",
    title: "Дух новичка",
    link: "#",
  },
  {
    image: "./img/survivor/s83.png",
    title: "Противодействие",
    link: "#",
  },
  {
    image: "./img/survivor/s84.png",
    title: "Дар: уход в тень",
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
