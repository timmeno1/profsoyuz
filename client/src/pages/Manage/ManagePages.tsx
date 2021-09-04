import React, { useEffect } from 'react'
import M from 'materialize-css'
import { NavLink } from 'react-router-dom'



const Comp = () => {
    console.log('hello called')
    return (
        <>
            <h2>Hello</h2> 
        </>
    )
}

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
                            <li className="tab col s4"><NavLink activeClassName={"active"} to={'/manage/pages/home'}>Home</NavLink></li>
                            <li className="tab col s4"><NavLink activeClassName={"active"} to={'/manage/pages/news'}>News</NavLink></li>
                            <li className="tab col s4"><a href={'#'}>About</a></li>
                        </ul>
                        </div>
                        <div id="test1" className="col s12">
                        <Comp />    
                        </div>
                        <div id="test2" className="col s12">Test 2</div>
                        <div id="test3" className="col s12">Test 3</div>
                    </div>
                    <p className="left-align light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
                </div>
        </div>  
    )
}