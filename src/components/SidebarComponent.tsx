import React from 'react';
import classes from './Sidebar.module.css';


export const Sidebar: React.FC = () => {
    return(
        <div className='side-bar d-none d-md-block col-md-3'>
            <div>
                <h3 className={classes.headers} >Поиск материалов</h3>
                <form action="#" method="post" className="d-flex editContent" >
                    <input type="search" placeholder="Введите название..." name="search" className="form-control" />
                    <button className="btn1" ><span className="fa fa-search" aria-hidden="true" ></span></button>
                </form>
            </div>
            <div className="left-side my-4">
            <h3 className={classes.headers} >Статьи</h3>
            <ul className={classes.list}>
                <li className="editContent" >
                    <a  href="" className=" editContent" >Гайд по разработке</a>
                </li>
                <li className="editContent" >
                    <a href="" className=" editContent" >Игровые механики</a>
                </li>
                <li className="editContent" >
                    <a href="" className=" editContent" >Типы новелл</a>
                </li>
                <li className="editContent" >
                    <a href="" className=" editContent" >Материалы для разработки</a>
                </li>
            </ul>
    </div>
        <div className="deal-leftmk left-side">
        <h3 className={classes.headers}>Популярные новеллы</h3>
        <div className="special-sec1 row mt-3 ">
            <div className={`col-md-4 ${classes.deals}`}>
                <img src="/assets/images/s4.jpg" className="img-fluid" alt="" />
            </div>
            <div className={`col-md-6 ${classes.deal}`}>
                <h3>Tiny Bunny</h3>
            </div>

        </div>
        <div className="special-sec1 row mt-3 " >
            <div className={`col-md-4 ${classes.deals}`}>
                <img src="/assets/images/s2.jpg" className="img-fluid" alt="" />
            </div>
            <div className={`col-md-6 ${classes.deal}`}>
                <h3 >DOKI DOKI LITERATURE CLUB</h3>
            </div>

        </div>
        <div className="special-sec1 row mt-3" >
            <div className={`col-md-4 ${classes.deals}`}>
                <img src="/assets/images/s1.jpg" className="img-fluid" alt="" />
            </div>
            <div className={`col-md-6 ${classes.deal}`}>
                <h3>ЗАРЯ-1</h3>
            </div>

        </div>
        <div className="special-sec1 row mt-3" >
            <div className={`col-md-4 ${classes.deals}`}>
                <img src="/assets/images/s5.jpg" className="img-fluid" alt="" />
            </div>
            <div className={`col-md-6 ${classes.deal}`}>
                <h3>CATEAU</h3>
            </div>

        </div>
    </div>
    </div>
    );
}