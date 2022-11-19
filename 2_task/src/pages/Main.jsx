import React from "react";

const gifts = [
  { tittle: "Виджеты", discription: "30 готовых решений" },
  { tittle: "Dashboard", discription: "с показателями вашего бизнеса" },
  { tittle: "Skype Аудит", discription: "отдела продаж и CRM системы" },
  { tittle: "35 дней", discription: "использования CRM" },
];

function Main(props) {
  return (
    <section className="content">
      <section className="content__item">
        <h2 className="content__title-main">
          Зарабатывайте больше <span>с WELBEX</span>
        </h2>
        <p className="content__discription">
          Развиваем и контролируем продажи за вас
        </p>
      </section>
      <section className="content__item">
        <h4 className="content__title">
          Вместе с <span>бесплатной</span> <span>консультацией</span> мы дарим:
        </h4>
        <ul className="content__list">
          {gifts.map(({ tittle, discription }, index) => (
            <li className="content__list-item" key={index}>
              <h4 className="content__list-title">{tittle}</h4>
              <p className="content__list-discription">{discription}</p>
            </li>
          ))}
        </ul>
        <button className="content__button">Получить консультацию</button>
      </section>
    </section>
  );
}

export default Main;
