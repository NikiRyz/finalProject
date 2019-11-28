import React from "react";
import Header from "../header/Header";
import Block from "../block/Block";
import { Link } from "react-router-dom";
import "./main.scss";
import firstDiscount from "./assets/img/1-discount.png";
import secondDiscount from "./assets/img/2-discount.png";
import thirdDiscount from "./assets/img/3-discount.png";
import fourDiscount from "./assets/img/4-discount.png";
import fiveDiscount from "./assets/img/5-discount.png";
import sixDiscount from "./assets/img/6-discount.png";
import Footer from "../footer/Footer";

export default class Main extends React.Component {
  render() {
    return (
      <div className="main-container">
        <div className="up">
          <Header />
          <h1 className="main-h1">БЛИЖАЙШИЕ МЕРОПРИЯТИЯ</h1>
          <div className="up-events">
            <Link to="/events">
              <Block
                src="https://www.mos.ru/upload/newsfeed/newsfeed/1200x630_ms-sept-kopiya.jpg"
                p="Показ фильмов-победителей международного фестиваля короткого метра Moscow Shorts"
              />
            </Link>
            <Link to="/events">
              <Block
                src="https://topstudents.ru/wp-content/uploads/2019/11/mJvzyXuUhg4.jpg"
                p="Фестиваль «Байкал. Магия воды»"
              />
            </Link>
            <Link to="/events">
              {" "}
              <Block
                src="https://topstudents.ru/wp-content/uploads/2019/11/442cb7dafe77af0633961622252c0dbf-1024x683.jpg"
                p="5D-кинотеатр «Космическая сфера»"
              />
            </Link>
          </div>
          <Link to="/events">
            <div className="MainBtn">
              <button className="signIn btnMain">Все мероприятия</button>
            </div>
          </Link>
        </div>
        <div className="mainDiscount">
          <h1 className="main-h1">СКИДКИ</h1>
          <Link to="/sale">
            <div className="discount">
              <div className="img-discount">
                <img src={firstDiscount} alt="Театр" />
              </div>
              <div className="img-discount">
                <img src={secondDiscount} alt="Театр" />
              </div>
              <div className="img-discount">
                <img src={thirdDiscount} alt="Театр" />
              </div>
              <div className="img-discount">
                <img src={fourDiscount} alt="Театр" />
              </div>
              <div className="img-discount">
                <img src={fiveDiscount} alt="Театр" />
              </div>
              <div className="img-discount">
                <img src={sixDiscount} alt="Театр" />
              </div>
            </div>
            <Link to="/sale">
              <div className="MainBtn">
                <button className="signIn btnMain">Все скидки</button>
              </div>
            </Link>
          </Link>
        </div>

        <div className="news1">
          <h1 className="main-h1">НОВОСТИ</h1>
          <div className="up-events">
            <Link to="/news">
              <Block
                src="https://topstudents.ru/wp-content/uploads/2019/11/%D0%9C%D0%90-%D1%80%D0%B0%D1%81%D1%81%D1%8B%D0%BB%D0%BA%D0%B0-600%D1%85400-1.jpg"
                p="Московский акселератор начал прием заявок"
              />{" "}
            </Link>
            <Link to="/news">
              {" "}
              <Block
                src="https://topstudents.ru/wp-content/uploads/2019/11/m5k6S7Ecf6U-1024x1024.jpg"
                p="«Диалог с профессионалом»"
              />
            </Link>
            <Link to="/news">
              {" "}
              <Block
                src="https://topstudents.ru/wp-content/uploads/2019/10/qNLdPS2px9U-1024x682.jpg"
                p="В Москве прошел квест, посвященный открытию Дома Студента"
              />
            </Link>
          </div>
          <Link to="/news">
            <div className="MainBtn">
              <button className="signIn btnMain1">Все новости</button>
            </div>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
}
