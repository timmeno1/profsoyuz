import React from 'react'
import { NavLink, Route, Switch, useRouteMatch } from 'react-router-dom'
import { ManageNews } from './ManageNews'
import { ManagePages } from './ManagePages'
import { ManageMembers } from './ManageMembers'
import { ManageMedia } from './ManageMedia'
import { useMediaQuery } from 'react-responsive'

const Dashboard = () => {
    return (
        <div className="col s12 center">
            <h3><i className="mdi-content-send brown-text"></i></h3>
            <h4>Manage page</h4>
            <p className="left-align light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
        </div>
    )
}

const ManageNav = (props:any) => {
    console.log(props.isTabletAndAbove)
    
    if(!props.isTabletAndAbove) {
        return (
            <ul className="collection manageNav">
                <li className="manageNav-item">
                    <NavLink className={'collection-item'} activeClassName={"active"} to={`${props.url}/pages`}> 
                        <i className="bi bi-file-earmark-richtext"></i> Изменение данных
                    </NavLink>
                </li>
                <li className="manageNav-item">
                    <NavLink  className={'collection-item'} activeClassName={"active"}  to={`${props.url}/news`}> 
                        <i className="bi bi-newspaper"></i> Новости
                    </NavLink>
                </li>
                <li className="manageNav-item">
                    <NavLink className={'collection-item'} activeClassName={"active"}  to={`${props.url}/members`}> 
                        <i className="bi bi-people-fill"></i> Члены профсоюза
                    </NavLink>
                </li>
            </ul>
        )
    } else {
        return (
            <ul className="collection manageNav">
                <li className="manageNav-item">
                    <NavLink className={'collection-item'} activeClassName={"active"} to={`${props.url}/pages`}> 
                        <i className="bi bi-file-earmark-richtext"></i></NavLink>
                </li>
                <li className="manageNav-item">
                    <NavLink  className={'collection-item'} activeClassName={"active"}  to={`${props.url}/news`}> 
                        <i className="bi bi-newspaper"></i></NavLink>
                </li>
                <li className="manageNav-item">
                    <NavLink className={'collection-item'} activeClassName={"active"}  to={`${props.url}/members`}> 
                        <i className="bi bi-people-fill"></i></NavLink>
                </li>
            </ul>
        )
    }
}


export const Manage = () => {


    const { path, url } = useRouteMatch();
    const isTabletOrMobile = useMediaQuery({ maxWidth: 992 })

    return (

        
        <div className=" row">
            <div className="col s3">
                <ManageNav url={url} isTabletAndAbove={isTabletOrMobile} />
            </div>

            <div className="col s9">

                <Switch>
                    <Route path={`${path}/news`} component={ManageNews} />
                    <Route path={`${path}/pages`} component={ManagePages}/>
                    <Route path={`${path}/members`} component={ManageMembers}/>
                    <Route path={`${path}/media`} component={ManageMedia}/>
                    <Route path={`${path}`} component={Dashboard}/>
                </Switch>
            </div>
        </div>    
    )
}