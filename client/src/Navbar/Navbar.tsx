import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import M from 'materialize-css'

export const Navbar = () => {


    useEffect(() => {
        let elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems)
    })
    const onSidenavLinkClick = () => {
        let elem = document.querySelector('.sidenav')
        if(elem) {
            let sidenav = M.Sidenav.getInstance(elem);
            sidenav.close()
        }
    }




    return (
        <div>
            <nav>
                <div className={"nav-wrapper container"}>
                    <Link to={"/"} className={"brand-logo"}>Logo</Link>

                    <span data-target="mobile-menu" className="sidenav-trigger show-on-med-and-down hide-on-large-only"><i className="bi bi-list small"></i></span>
                    
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
                    <Link onClick={onSidenavLinkClick} to={"/news"}>Новости</Link>
                </li>
                <li>
                    <Link onClick={onSidenavLinkClick} to={"/join"}>Вступить</Link>
                </li>
                <li>
                    <Link onClick={onSidenavLinkClick} to={"/about"}>О нас</Link>
                </li>
            </ul>
        </div>
    )
}