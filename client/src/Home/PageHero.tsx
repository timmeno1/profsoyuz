import React from 'react'
//import bg1 from '../assets/img/background/background1.jpg'

export const PageHero = () => {

    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.parallax');
        M.Parallax.init(elems);
      });

    return (
        <div id="index-banner" className="parallax-container">
            <div className="section no-pad-bot">
                <div className="container">
                    <h1 className="header center red-text text-lighten-2">Профсоюз</h1>
                    <div className="row center">
                    <h5 className="header col s12 grey-text text-lighten-2">Защита прав на работе</h5>
                    </div>
            
                </div>
            </div>
            <div className="parallax"><img src={"https://loremflickr.com/1905/1080"} alt="Unsplashed background img 1" /></div>
        </div>
    )
}