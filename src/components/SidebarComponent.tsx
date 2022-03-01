import React from 'react';
import classes from './Sidebar.module.css';


export const Sidebar: React.FC = () => {
    return(
        <div className='side-bar d-none d-md-block col-md-3'>
        <div className="deal-leftmk left-side">
        <h3 className={classes.headers}>Популярные новеллы</h3>
        <div className="special-sec1 row mt-3 ">
            <div className={`col-md-4 ${classes.deals}`}>
                <img src="static/images/s4.jpg" className="img-fluid" alt="" />
            </div>
            <div className={`col-md-7 ${classes.deal}`}>
                <h3>Tiny Bunny</h3>
            </div>

        </div>
        <div className="special-sec1 row mt-3 " >
            <div className={`col-md-4 ${classes.deals}`}>
                <img src="static/images/s2.jpg" className="img-fluid" alt="" />
            </div>
            <div className={`col-md-7 ${classes.deal}`}>
                <h3 >DOKI DOKI LITERATURE CLUB</h3>
            </div>

        </div>
        <div className="special-sec1 row mt-3" >
            <div className={`col-md-4 ${classes.deals}`}>
                <img src="static/images/s1.jpg" className="img-fluid" alt="" />
            </div>
            <div className={`col-md-7 ${classes.deal}`}>
                <h3>ЗАРЯ-1</h3>
            </div>

        </div>
        <div className="special-sec1 row mt-3" >
            <div className={`col-md-4 ${classes.deals}`}>
                <img src="static/images/s5.jpg" className="img-fluid" alt="" />
            </div>
            <div className={`col-md-7 ${classes.deal}`}>
                <h3>CATEAU</h3>
            </div>

        </div>
    </div>
    </div>
    );
}