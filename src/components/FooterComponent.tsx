import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Footer.module.css';

export const  Footer: React.FC = () => {
  return (
    <div >
      <footer>
            <div className="container">
                <div className="row footer-top">
                    <div className={`${classes.footer_padding} col-lg-4`}>
                        <h2 className={`${classes.logo} mb-lg-4 mb-3`}>
                          <span className="fa" aria-hidden="true" >
                            NovelWiki
                          </span>
                        </h2>
                        <p>
                            Сборник полезных материалов для создания своей визуальной новеллы.
                        </p>
                        <h4 className={`${classes.sub_con}  my-4`} >Мы в социальных сетях</h4>
                        <ul className={`${classes.w3layouts} list-unstyled`}>
                            <li>
                                <a className={classes.socal_icon} >
                                    <span className="fa fa-facebook-f" ></span>
                                </a>
                            </li>
                            <li>
                                <a className={classes.socal_icon} >
                                    <span className="fa fa-twitter" ></span>
                                </a>
                            </li>
                            <li>
                                <a className={classes.socal_icon} >
                                    <span className="fa fa-dribbble" ></span>
                                </a>
                            </li>
                            <li>
                                <a className={classes.socal_icon} >
                                    <span className="fa fa-google-plus" ></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={`${classes.footer_right} col-lg-7`}>
                        <div className="w3layouts-news-letter">
                            <h3 className={`${classes.title} text-uppercase mb-lg-4 mb-3`} >Обратная связь</h3>

                            <p>Подписываясь на нашу рассылку, вы всегда будете получать самые свежие новости и обновления.</p>
                            <form action="#" method="post" className={classes.newsletter}>
                                <input type="email" name="Email" placeholder="Введите ваш email..."  />
                                <div className="w3layouts-newsletter text-center">
                                    <button className="btn1" ><span className="fa fa-paper-plane-o" aria-hidden="true" ></span></button>
                                    </div>

                            </form>
                        </div>
                        <div className="row mt-lg-4 bottom-w3layouts-sec-nav mx-0">
                            <div className={`${classes.footer_padding} col-md-4`}>
                                <h3 className={`${classes.title} text-uppercase mb-lg-4 mb-3`}>Разделы</h3>
                                <ul className="list-unstyled w3layouts-icons">
                                    <li>
                                        <Link to="/" className="text-uppercase " >Главная</Link>
                                    </li>
                                    <li>
                                        <Link to="/catalog" className="text-uppercase" >Каталог</Link>
                                    </li>
                                    <li>
                                        <Link to="/course" className="text-uppercase" >Гайд по разработке</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className={`${classes.footer_padding} col-md-4`}>
                                <div className="agileinfo_social_icons">
                                    <h3 className={`${classes.title} text-uppercase mb-lg-4 mb-3`}>Статьи</h3>
                                    <ul className="list-unstyled w3layouts-icons">
                                        <li>
                                            <a className="text-uppercase" >Игровые механики</a>
                                        </li>
                                        <li>
                                            <a className="text-uppercase" >Жанры новелл</a>
                                        </li>
                                        <li>
                                            <a className="text-uppercase" >Материалы для разработки</a>
                                        </li>
                                        <li>
                                            <a className="text-uppercase" >Типы новелл</a>
                                        </li>
                                    </ul>
                                </div>                   
                            </div>
                            <div className={`${classes.footer_padding} col-md-4 my-md-0 my-5`}>
                                <h3 className={`${classes.title} text-uppercase mb-lg-4 mb-3`}>Контакты</h3>
                                <div className={classes.contact_info}>
                                    <div className="footer-address-inf my-4">
                                        <h4 className="ad-info mb-2 editContent" >Email </h4>
                                        <p className="editContent" ><a href="mailto:info@example.com">FiveRacoons@gmail.com</a></p>
                                    </div>
                                    <div className="footer-address-inf">
                                        <h4 className="ad-info mb-2 editContent" >Телефон</h4>
                                        <p className="editContent" >+7-905-808-49-24</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div className={`${classes.cpyright} py-3`}>
            <div className="container">
                <div className="row">
                    <p className="col-md-10 text-left">© 2022 NovelWiki. All rights reserved by
                        <a href="https://fiveraccoons.ru"> FIVE RACCOONS.</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}