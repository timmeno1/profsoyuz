import React, { ReactHTMLElement } from 'react'
import {
  Link
} from "react-router-dom";

export const Navbar = () => {


    const onMobileMenuClick = () => {
        var elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems)
    }


    return (
        <div>
            <nav>
                <div className={"nav-wrapper container"}>
                    <Link to={"/"} className={"brand-logo"}>Logo</Link>
                    <a href="#" onClick={onMobileMenuClick} data-target="mobile-demo" className="sidenav-trigger "><i className="bi bi-list small"></i></a>
                    <ul id={"nav-mobile"} className={"right hide-on-med-and-down"}>
                        <li>
                            <Link to={"/news"}>Новости</Link>
                        </li>
                        <li>
                            <Link to={"/join"}>Вступить</Link>
                        </li>
                        <li>
                            <Link to={"/about"}>О нас</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">Javascript</a></li>
            <li><a href="mobile.html">Mobile</a></li>
            </ul>
        </div>
    )
}