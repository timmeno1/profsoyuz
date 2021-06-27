import React from 'react'
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

                    <span  onClick={onMobileMenuClick} data-target="mobile-menu" className="sidenav-trigger show-on-med-and-down hide-on-large-only"><i className="bi bi-list small"></i></span>
                    
                    <ul id={"nav"} className={"right hide-on-med-and-down"}>
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

            <ul className="sidenav" id="mobile-menu">
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
    )
}