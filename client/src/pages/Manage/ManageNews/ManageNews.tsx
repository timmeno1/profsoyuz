import React, { useEffect } from 'react'

export const ManageNews = () => {


    useEffect(() => {
        //let selectElems = document.querySelectorAll('.input-field')
        //M.FormSelect.init(selectElems)
        M.AutoInit()
        return () => {
            
        }
    })
    return (
        <div className=" row">
            <div className="row"><h4>News Manage page</h4></div>
                <div className="col s12 m4 center">
                    <div className="newsManageFilter">
                        <h6 className="red-text">Фильтры для поиска новости</h6>
                        <div className="input-field">
                            <select defaultValue="0">   {    // add here map function of stored authors
                             }
                                <option value="0">Все Авторы</option>
                                <option value="1">Алексей Щербаков</option>
                                <option value="2">Нурлан Сабуров</option>
                                <option value="3">Илья Макаров</option>
                            </select>
                            <label >Автор</label>
                        </div>
                        <div className="input-field">
                            <select defaultValue="0">   {    // add here map function of stored authors
                             }
                                <option value="0">Все рубрики</option>
                                <option value="1">Новости офиса</option>
                                <option value="2">Решение вопросов</option>
                                <option value="3">общая тема</option>
                            </select>
                            <label >Рубрика</label>
                        </div>
                        <div className="input-field">
                            <input 
                                type="text" 
                                className="datepicker" 
                                id="DateStart"
                            />
                            <label htmlFor="birthdate" >Дата начала</label>
                        </div>
                        <div className="input-field">
                            <input 
                                type="text" 
                                className="datepicker" 
                                id="DateEnd"
                            />
                            <label htmlFor="DateEnd" >Дата конца</label>
                        </div>
                        <div className="input-field">
                            <input type="text" id="topicSearch" className="autocomplete" />
                            <label htmlFor="topicSearch">Поиск по теме</label>
                        </div>
                    </div>
                    <h6 className="red-text">Список новостей</h6>
                    <ul className="collection">
                        
                        <li className="collection-item">qwe</li>
                        <li className="collection-item active">asd</li>
                        <li className="collection-item">zxc</li>
                        <li className="collection-item">123</li>
                        <li className="collection-item">rty</li>
                    </ul>    
                    
                </div>
                <div className="col s12 m8 center">

                    <p className="left-align light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
                </div>
        </div>  
    )
}