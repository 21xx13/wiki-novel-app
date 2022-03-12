import React from 'react';
import { NOVELS } from '../shared/novels';
import { Sidebar } from './SidebarComponent';
import classes from './Main.module.css';

function Main() {
  const novel_list = NOVELS.map((novel) => {
    return (
      <div className={`col-md-3 ${classes.product}`}>
      <div className={`text-center mt-lg-4 ${classes.product_info}`}>
          <div>
              <img src={ novel.image } className="img-fluid" alt=""  />
          </div>
          <div className={classes.item}>
              <h4>
                  <a href="#" className="editContent" >{ novel.name }</a>
              </h4>
          </div>
      </div>
  </div>
    );
});
  return (
    <div className='row padding'>
       <Sidebar />
       <div className={`col-lg-9 ${classes.display}`}>
        <div className="row">
          {novel_list}
        </div>
      </div>
    </div>
  );
}

export default Main;