import React from 'react'
import { NavLink, Route, Switch, useRouteMatch } from 'react-router-dom'
import { ManageNews } from './ManageNews'
import { ManagePages } from './ManagePages'
import { ManageMembers } from './ManageMembers'
import { ManageMedia } from './ManageMedia'


export const Manage = () => {


    let { path, url } = useRouteMatch();
    
    return (

        
        <div className=" row">
            <div className="section col s3">
            <ul className="collection manageNav">
                <li className="collection-item manageNav-item"><NavLink to={`${url}/pages`}> 
                    <i className="bi bi-file-earmark-richtext"></i> Изменение данных
                </NavLink></li>
                <li className="collection-item manageNav-item"><NavLink to={`${url}/news`}> 
                    <i className="bi bi-newspaper"></i> Новости
                </NavLink></li>
                <li className="collection-item manageNav-item"><NavLink to={`${url}/members`}> 
                    <i className="bi bi-people-fill"></i> Члены профсоюза
                </NavLink></li>
                <li className="collection-item manageNav-item"><NavLink to={`${url}/media`}> 
                    <i className="bi bi-card-image"></i> Изображения и видео
                </NavLink></li>
            </ul>
            </div>

            <div className="col s9">
                <div className="col s12 center">
                <h3><i className="mdi-content-send brown-text"></i></h3>
                <h4>Manage page</h4>
                <p className="left-align light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
                </div>

                <Switch>
                    <Route path={`${path}/news`}>
                        <ManageNews />
                    </Route>
                    <Route path={`${path}/pages`}>
                        <ManagePages />
                    </Route>
                    <Route path={`${path}/members`}>
                        <ManageMembers />
                    </Route>
                    <Route path={`${path}/media`}>
                        <ManageMedia />
                    </Route>
                </Switch>
            </div>
        </div>    
    )
}