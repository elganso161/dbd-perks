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
    link: "./survivors-skills-pages/s2.html",
  },
  {
    image: "./img/survivor/s3.png",
    title: "Ловкое приземление",
    link: "./survivors-skills-pages/s3.html",
  },
  {
    image: "./img/survivor/s4.png",
    title: "Туз в рукаве",
    link: "./survivors-skills-pages/s4.html",
  },
  {
    image: "./img/survivor/s5.png",
    title: "Познания в ботанике",
    link: "./survivors-skills-pages/s5.html",
  },
  {
    image: "./img/survivor/s6.png",
    title: "Прояви себя",
    link: "./survivors-skills-pages/s6.html",
  },
  {
    image: "./img/survivor/s7.png",
    title: "Железная воля",
    link: "./survivors-skills-pages/s7.html",
  },
  {
    image: "./img/survivor/s8.png",
    title: "Городской бег",
    link: "./survivors-skills-pages/s8.html",
  },
  {
    image: "./img/survivor/s9.png",
    title: "Повысить ставки",
    link: "./survivors-skills-pages/s9.html",
  },
  {
    image: "./img/survivor/s10.png",
    title: "Сострадание",
    link: "./survivors-skills-pages/s10.html",
  },
  {
    image: "./img/survivor/s11.png",
    title: "Лидер",
    link: "./survivors-skills-pages/s11.html",
  },
  {
    image: "./img/survivor/s12.png",
    title: "Крушитель",
    link: "./survivors-skills-pages/s12.html",
  },
  {
    image: "./img/survivor/s13.png",
    title: "Уроки улиц",
    link: "./survivors-skills-pages/s13.html",
  },
  {
    image: "./img/survivor/s14.png",
    title: "Игра в открытую",
    link: "./survivors-skills-pages/s14.html",
  },
  {
    image: "./img/survivor/s15.png",
    title: "Сам себе доктор",
    link: "./survivors-skills-pages/s15.html",
  },
  {
    image: "./img/survivor/s16.png",
    title: "Адреналин",
    link: "./survivors-skills-pages/s16.html",
  },
  {
    image: "./img/survivor/s17.png",
    title: "Единственный выживший",
    link: "./survivors-skills-pages/s17.html",
  },
  {
    image: "./img/survivor/s18.png",
    title: "Одолженное время",
    link: "./survivors-skills-pages/s18.html",
  },
  {
    image: "./img/survivor/s19.png",
    title: "Тревога",
    link: "./survivors-skills-pages/s19.html",
  },
  {
    image: "./img/survivor/s20.png",
    title: "Мы будем жить вечно",
    link: "./survivors-skills-pages/s20.html",
  },
  {
    image: "./img/survivor/s21.png",
    title: "Быстрый и тихий",
    link: "./survivors-skills-pages/s21.html",
  },
  {
    image: "./img/survivor/s22.png",
    title: "Решающий удар",
    link: "./survivors-skills-pages/s22.html",
  },
  {
    image: "./img/survivor/s23.png",
    title: "Оставленный позади",
    link: "./survivors-skills-pages/s23.html",
  },
  {
    image: "./img/survivor/s24.png",
    title: "Гибкость",
    link: "./survivors-skills-pages/s24.html",
  },
  {
    image: "./img/survivor/s25.png",
    title: "Крепкий орешек",
    link: "./survivors-skills-pages/s25.html",
  },
  {
    image: "./img/survivor/s26.png",
    title: "Спринтер",
    link: "./survivors-skills-pages/s26.html",
  },
  {
    image: "./img/survivor/s27.png",
    title: "Объект одержимости",
    link: "./survivors-skills-pages/s27.html",
  },
  {
    image: "./img/survivor/s28.png",
    title: "Несокрушимый",
    link: "./survivors-skills-pages/s28.html",
  },
  {
    image: "./img/survivor/s29.png",
    title: "Техник",
    link: "./survivors-skills-pages/s29.html",
  },
  {
    image: "./img/survivor/s30.png",
    title: "Без сожаления",
    link: "./survivors-skills-pages/s30.html",
  },
  {
    image: "./img/survivor/s31.png",
    title: "Аптекарь",
    link: "./survivors-skills-pages/s31.html",
  },
  {
    image: "./img/survivor/s32.png",
    title: "Выдержка",
    link: "./survivors-skills-pages/s32.html",
  },
  {
    image: "./img/survivor/s33.png",
    title: "Потанцуй со мной",
    link: "./survivors-skills-pages/s33.html",
  },
  {
    image: "./img/survivor/s34.png",
    title: "Самоучка",
    link: "./survivors-skills-pages/s34.html",
  },
  {
    image: "./img/survivor/s35.png",
    title: "Уход за больным",
    link: "./survivors-skills-pages/s35.html",
  },
  {
    image: "./img/survivor/s36.png",
    title: "Бессонница",
    link: "./survivors-skills-pages/s36.html",
  },
  {
    image: "./img/survivor/s37.png",
    title: "Детективное чутье",
    link: "./survivors-skills-pages/s37.html",
  },
  {
    image: "./img/survivor/s38.png",
    title: "Уникальная возможность",
    link: "./survivors-skills-pages/s38.html",
  },
  {
    image: "./img/survivor/s39.png",
    title: "Освобождение",
    link: "./survivors-skills-pages/s39.html",
  },
  {
    image: "./img/survivor/s40.png",
    title: "Поломка",
    link: "./survivors-skills-pages/s40.html",
  },
  {
    image: "./img/survivor/s41.png",
    title: "Проснись",
    link: "./survivors-skills-pages/s41.html",
  },
  {
    image: "./img/survivor/s42.png",
    title: "Выслеживание подозреваемого",
    link: "./survivors-skills-pages/s42.html",
  },
  {
    image: "./img/survivor/s43.png",
    title: "Через край",
    link: "./survivors-skills-pages/s43.html",
  },
  {
    image: "./img/survivor/s44.png",
    title: "Диверсия",
    link: "./survivors-skills-pages/s44.html",
  },
  {
    image: "./img/survivor/s45.png",
    title: "Искажение",
    link: "./survivors-skills-pages/s45.html",
  },
  {
    image: "./img/survivor/s46.png",
    title: "Солидарность",
    link: "./survivors-skills-pages/s46.html",
  },
  {
    image: "./img/survivor/s47.png",
    title: "Раскачка",
    link: "./survivors-skills-pages/s47.html",
  },
  {
    image: "./img/survivor/s48.png",
    title: "Хранитель",
    link: "./survivors-skills-pages/s48.html",
  },
  {
    image: "./img/survivor/s49.png",
    title: "Владение обстановкой",
    link: "./survivors-skills-pages/s49.html",
  },
  {
    image: "./img/survivor/s50.png",
    title: "Любыми средствами",
    link: "./survivors-skills-pages/s50.html",
  },
  {
    image: "./img/survivor/s51.png",
    title: "Равновесие",
    link: "./survivors-skills-pages/s51.html",
  },
  {
    image: "./img/survivor/s52.png",
    title: "Пристегнись",
    link: "./survivors-skills-pages/s52.html",
  },
  {
    image: "./img/survivor/s53.png",
    title: "Родство",
    link: "./survivors-skills-pages/s53.html",
  },
  {
    image: "./img/survivor/s54.png",
    title: "Самопознание",
    link: "./survivors-skills-pages/s54.html",
  },
  {
    image: "./img/survivor/s55.png",
    title: "Форсаж",
    link: "./survivors-skills-pages/s55.html",
  },
  {
    image: "./img/survivor/s56.png",
    title: "Напролом",
    link: "./survivors-skills-pages/s56.html",
  },
  {
    image: "./img/survivor/s57.png",
    title: "Проверка на прочность",
    link: "./survivors-skills-pages/s57.html",
  },
  {
    image: "./img/survivor/s58.png",
    title: "Возрождение",
    link: "./survivors-skills-pages/s58.html",
  },
  {
    image: "./img/survivor/s59.png",
    title: "Внутреннее исцеление",
    link: "./survivors-skills-pages/s59.html",
  },
  {
    image: "./img/survivor/s60.png",
    title: "Везение",
    link: "./survivors-skills-pages/s60.html",
  },
  {
    image: "./img/survivor/s61.png",
    title: "Ради людей",
    link: "./survivors-skills-pages/s61.html",
  },
  {
    image: "./img/survivor/s62.png",
    title: "Оберег души",
    link: "./survivors-skills-pages/s62.html",
  },
  {
    image: "./img/survivor/s63.png",
    title: "Строим на века",
    link: "./survivors-skills-pages/s63.html",
  },
  {
    image: "./img/survivor/s64.png",
    title: "Изучение",
    link: "./survivors-skills-pages/s64.html",
  },
  {
    image: "./img/survivor/s65.png",
    title: "За чужой счет",
    link: "./survivors-skills-pages/s65.html",
  },
  {
    image: "./img/survivor/s66.png",
    title: "Обман во благо",
    link: "./survivors-skills-pages/s66.html",
  },
  {
    image: "./img/survivor/s67.png",
    title: "Кровавый договор",
    link: "./survivors-skills-pages/s67.html",
  },
  {
    image: "./img/survivor/s68.png",
    title: "Отчаянные меры",
    link: "./survivors-skills-pages/s68.html",
  },
  {
    image: "./img/survivor/s69.png",
    title: "Уловка",
    link: "./survivors-skills-pages/s69.html",
  },
  {
    image: "./img/survivor/s70.png",
    title: "Ударный забег",
    link: "./survivors-skills-pages/s70.html",
  },
  {
    image: "./img/survivor/s71.png",
    title: "Без огласки",
    link: "./survivors-skills-pages/s71.html",
  },
  {
    image: "./img/survivor/s72.png",
    title: "Скрытый союз",
    link: "./survivors-skills-pages/s72.html",
  },
  {
    image: "./img/survivor/s73.png",
    title: "Визионер",
    link: "./survivors-skills-pages/s73.html",
  },
  {
    image: "./img/survivor/s74.png",
    title: "Отчаянная борьба",
    link: "./survivors-skills-pages/s74.html",
  },
  {
    image: "./img/survivor/s75.png",
    title: "Самосохранение",
    link: "./survivors-skills-pages/s75.html",
  },
  {
    image: "./img/survivor/s76.png",
    title: "Стиснув зубы",
    link: "./survivors-skills-pages/s76.html",
  },
  {
    image: "./img/survivor/s77.png",
    title: "Фугасная мина",
    link: "./survivors-skills-pages/s77.html",
  },
  {
    image: "./img/survivor/s78.png",
    title: "Ясновидение",
    link: "./survivors-skills-pages/s78.html",
  },
  {
    image: "./img/survivor/s79.png",
    title: "Световая граната",
    link: "./survivors-skills-pages/s79.html",
  },
  {
    image: "./img/survivor/s80.png",
    title: "Поправка",
    link: "./survivors-skills-pages/s80.html",
  },
  {
    image: "./img/survivor/s81.png",
    title: "Дар: круг исцеления",
    link: "./survivors-skills-pages/s81.html",
  },
  {
    image: "./img/survivor/s82.png",
    title: "Дух новичка",
    link: "./survivors-skills-pages/s82.html",
  },
  {
    image: "./img/survivor/s83.png",
    title: "Противодействие",
    link: "./survivors-skills-pages/s83.html",
  },
  {
    image: "./img/survivor/s84.png",
    title: "Дар: уход в тень",
    link: "./survivors-skills-pages/s84.html",
  },
  {
    image: "./img/survivor/s85.png",
    title: "Темное чувство",
    link: "./survivors-skills-pages/s85.html",
  },
  {
    image: "./img/survivor/s86.png",
    title: "Дежавю",
    link: "./survivors-skills-pages/s86.html",
  },
  {
    image: "./img/survivor/s87.png",
    title: "Надежда",
    link: "./survivors-skills-pages/s87.html",
  },
  {
    image: "./img/survivor/s88.png",
    title: "Кровные узы",
    link: "./survivors-skills-pages/s88.html",
  },
  {
    image: "./img/survivor/s89.png",
    title: "Легковес",
    link: "./survivors-skills-pages/s89.html",
  },
  {
    image: "./img/survivor/s90.png",
    title: "Этому не бывать",
    link: "./survivors-skills-pages/s90.html",
  },
  {
    image: "./img/survivor/s91.png",
    title: "Мы справимся",
    link: "./survivors-skills-pages/s91.html",
  },
  {
    image: "./img/survivor/s92.png",
    title: "Предчувствие",
    link: "./survivors-skills-pages/s92.html",
  },
  {
    image: "./img/survivor/s93.png",
    title: "Устойчивость",
    link: "./survivors-skills-pages/s93.html",
  },
  {
    image: "./img/survivor/s94.png",
    title: "Скользкое мясо",
    link: "./survivors-skills-pages/s94.html",
  },
  {
    image: "./img/survivor/s95.png",
    title: "Мелкая дичь",
    link: "./survivors-skills-pages/s95.html",
  },
  {
    image: "./img/survivor/s96.png",
    title: "Мурашки по спине",
    link: "./survivors-skills-pages/s96.html",
  },
  {
    image: "./img/survivor/s97.png",
    title: "Никто не остался позади",
    link: "./survivors-skills-pages/s97.html",
  },
  {
    image: "./img/survivor/s98.png",
    title: "Мародерское чутье",
    link: "./survivors-skills-pages/s98.html",
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
