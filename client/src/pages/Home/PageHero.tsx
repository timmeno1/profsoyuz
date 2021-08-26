import React, {useEffect} from 'react'
import M from 'materialize-css'
//import bg1 from '../assets/img/background/background1.jpg'

export const PageHero = (props:any) => {

      useEffect(() => {
        M.AutoInit();
      });

    return (
        <div id="index-banner" className="parallax-container">
            <div className="section no-pad-bot">
                <div className="container">
                    <h1 className="header center red-text text-lighten-2">{props.headingTitle}</h1>
                    <div className="row center">
                    <h5 className="header col s12 grey-text text-lighten-2">{props.afterTitle}</h5>
                    </div>
                </div>
            </div>
            <div className="parallax"><img src={props.heroImage} alt="Unsplashed background img 1" /></div>
        </div>
    )
}