import React from "react";
import Header from "../header/Header";
import Block from "../block/Block";
import { Link } from "react-router-dom";
import "./news.scss";
import Footer from "../footer/Footer";

export default class News extends React.Component {
  render() {
    return (
      <div className="">
        <div className="main">
          <Header />

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
        </div>

        <Footer />
      </div>
    );
  }
}
