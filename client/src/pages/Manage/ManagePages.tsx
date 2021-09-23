import React, { useEffect } from 'react'
import M from 'materialize-css'
import { ManagePagesAbout } from './ManagePagesAbout'
import { ManagePagesHome } from './ManagePagesHome'
import { ManagePagesFooter } from './ManagePagesFooter'

export const ManagePages = () => {


    useEffect(() => {
        M.AutoInit()
    }, [])

    return (
        <div className=" row">
                <div className="col s12 center">
                    <h3><i className="mdi-content-send brown-text"></i></h3>
                    <h4>Pages Manage page</h4>
                    <div className="row">
                        <div className="col s12">
                        <ul className="tabs">
                            <li className="tab col s4"><a className={"active"} href={`#home`}>Главная</a></li>
                            <li className="tab col s4"><a className={"active"} href={`#about`}>О нас</a></li>
                            <li className="tab col s4"><a className={"active"} href={`#footer`}>Подвал</a></li>
                        </ul>
                        </div>
                        <div>
                            <div id="home" className="col s12 ">
                                <ManagePagesHome />
                            </div>
                            <div id="about" className="col s12 ">
                                <ManagePagesAbout />
                            </div>
                            <div id="footer" className="col s12 ">
                                <ManagePagesFooter />
                            </div>
                        </div>
                    </div>
                    <p className="left-align light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
                </div>
        </div>  
    )
}