import React from 'react';
import { Link } from 'react-router-dom';
import { Novel } from '../models/Novel';
import classes from './Sidebar.module.css';

export const Sidebar: React.FC<{
    topNovels: Novel[];
  }> = ({ topNovels }) => {
      const renderTopNovels = topNovels?.map(novel => {
          return (<div className="special-sec1 row mt-3 ">
          <div className={`col-md-4 ${classes.deals}`}>
              <Link to={`/catalog/${novel.id}`}>
              <img src={novel.poster} className="img-fluid" alt="" />
              </Link>
          </div>
          <div className={`col-md-6 ${classes.deal}`}>
          <Link to={`/catalog/${novel.id}`}>
              <h3>{novel.title}</h3>
              </Link>
          </div>

      </div>);
      })
    return(
        <div className='side-bar d-none d-md-block col-md-3'>
            <div>
                <h3 className={classes.headers} >Поиск материалов</h3>
                <form action="#" method="post" className="d-flex editContent" >
                    <input type="search" placeholder="Введите название..." name="search" className="form-control" />
                    <div className="w3layouts-newsletter text-center">
                        <button className="btn1" ><span className="fa fa-search" aria-hidden="true" ></span></button>
                        </div>
                </form>
            </div>
            <div className="left-side my-4">
            <h3 className={classes.headers} >Статьи</h3>
            <ul className={classes.list}>
                <li className="editContent" >
                    <Link  to="/course" className=" editContent" >Гайд по разработке</Link>
                </li>
                <li className="editContent" >
                    <a className=" editContent" >Игровые механики</a>
                </li>
                <li className="editContent" >
                    <a className=" editContent" >Типы новелл</a>
                </li>
                <li className="editContent" >
                    <a className=" editContent" >Материалы для разработки</a>
                </li>
            </ul>
    </div>
        <div className="deal-leftmk left-side">
        <h3 className={classes.headers}>Популярные новеллы</h3>
        {renderTopNovels}
    </div>
    </div>
    );
}