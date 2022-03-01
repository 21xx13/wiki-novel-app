import React from 'react';
import classes from './MainBanner.module.css';


export const MainBanner: React.FC = () => {
    return(
            <div className={classes.banner}> 
                <div className={`container-fluid ${classes.padding}`}>
                    <div className="row">
                        <div className={`col-12 ${classes.info}`}>
                            <p>Сборник полезных материалов для разработки своей новеллы</p>
                            <h3>Всё о новеллах</h3>                            
                        </div>
                    </div>
                </div>
            </div>
    );
}