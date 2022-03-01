import React from 'react';
import { Sidebar } from './SidebarComponent';

function Main() {
  return (
    <div className='row padding'>
       <Sidebar />
       <div className="left-ads-display col-lg-9">
        Содержание страницы
      </div>
    </div>
  );
}

export default Main;