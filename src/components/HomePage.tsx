import React from "react";
import { Link } from "react-router-dom";
import classes from './Home.module.css';
import {
  Carousel,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
} from "reactstrap";

export const HomePage: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);

  const items = [
    {
      id: 1,
      caption: "Cateau",
      src: "/static/images/1.jpg",
      altText: "Slide One",
    },
    {
      id: 2,
      caption: "Cinders",
      src: "/static/images/2.jpg",
      altText: "Slide Two",
    },
    {
      id: 3,
      caption: "Zarya-1",
      src: "/static/images/3.jpg",
      altText: "Slide Three",
    },
  ];

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex: any) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText="" captionHeader={item.caption} />
      </CarouselItem>
    );
  });
  return (
    <>
      <div className="container-fluid padding main-page-block">
        <div className="row padding">
          <div className="offset-lg-2 col-lg-4">
            <h2>Гайд по созданию новеллы</h2>
            <br />
            <p>
              Наша команда разработала гайд по созданию своих визуальных новелл
              на RenPy! Курс рассчитан на новичков и подойдет даже тем, кто ни
              разу не программировал. Прохождение курса совершенно бесплатно.
              Присоединяйся :)
            </p>
            <br />
            <div className="w3layouts-newsletter text-center">
              <Link to="/course" className="btn1 btn">
                Вперёд!
              </Link>
            </div>
          </div>

          <div className="col-lg-4">
            <br />
            <img
              src="static/images/poster.jpg"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <figure>
        <div className="fixed-wrap">
          <div className={classes.fixed}></div>
        </div>
      </figure>
      <div className="conteiner-fluid padding main-page-block">
        <div className="row text-center">
          <div className="col-12">
            <h2>Новые статьи</h2>
          </div>
        </div>
        <hr style={{ margin: "0 auto" }} />
      </div>
      <div className="container">
        <div className={`row padding ${classes.articles}`}>
          <div className="col-md-4">
            <div className="card">
              <img
                src="static/images/card-1.png"
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <h4 className="card-title">Игровые механики</h4>
                <p className="card-text">
                  Узнайте о том, какие бывают игровые механики. Подборка самых
                  популярных и наиболее подходящих для новелл.
                </p>
                <div className="w3layouts-newsletter text-center">
                  <a className="btn1 btn">
                    Читать
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src="static/images/card-2.png"
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <h4 className="card-title">Типы новелл</h4>
                <p className="card-text">
                  Новеллы в целом похожи друг на друга, но даже в таком простом
                  жанре есть своя классификация.
                </p>
                <div className="w3layouts-newsletter text-center">
                  <a className="btn1 btn">
                    Читать
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="static/images/card-3.png" alt="" />
              <div className="card-body">
                <h4 className="card-title">Жанры новелл</h4>
                <p className="card-text">
                  Как заинтересовать игрока? Поговорим об особенностях сценариев
                  в тех или иных жанрах новелл.
                </p>
                <div className="w3layouts-newsletter text-center">
                  <a className="btn1 btn">
                    Читать
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container main-page-block text-center">
        <div className="row text-center">
          <div className="col-12">
            <h2>Интересные новеллы</h2>
          </div>
        </div>
        <hr style={{ margin: " 0 auto 60px " }} />
      </div>
      <div className="container slider-block text-center padding">
        <style>
          {`.custom-tag {
          max-width: 100%;
          height: 540px;
          background: black;
        }`}
        </style>
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
      </div>
    </>
  );
}
