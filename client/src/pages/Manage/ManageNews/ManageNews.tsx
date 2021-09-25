import React, { MouseEvent, useEffect } from 'react'
import { NewsCard } from '../../News/NewsCard'


let newsFeedData = {
    tags: ["выплата 13 пособия", "новости офиса", "все новости"], 
    newsFeed: [
        {
            id: 'asdwqd12343415',
            title: " Новость 1",
            author: "timmeno1",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            newsBody: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            views: 216,
            date: "2021-05-12",
            tags: ["новости офиса"],
            published: true,
            media: ["https://loremflickr.com/800/480", "https://loremflickr.com/800/480", "https://loremflickr.com/800/480"]
        },
        {
            id: 'asdwqd12343453',
            title: " Новость 2",
            author: "timmeno1",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            newsBody: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            views: 216,
            date: "2021-04-21",
            tags: ["новости офиса"],
            published: true,
            media: ["https://loremflickr.com/800/480", "https://loremflickr.com/800/480", "https://loremflickr.com/800/480"]
        },
        {
            id: 'asdwqd12364345',
            title: " Новость 3",
            author: "Yuliya",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            newsBody: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            views: 216,
            date: "2021-05-03",
            tags: ["новости офиса"],
            published: true,
            media: ["https://loremflickr.com/800/480", "https://loremflickr.com/800/480", "https://loremflickr.com/800/480"]
        }
    ] 
}

export const ManageNews = () => {


    useEffect(() => {
        //let selectElems = document.querySelectorAll('.input-field')
        //M.FormSelect.init(selectElems)

        const dateStartElem = document.getElementById('dateStart')
        const dateEndElem = document.getElementById('dateEnd')
        const newsAuthorsSelect = document.getElementById('newsAuthorsSelect')
        const newsTagsSelect = document.getElementById('newsTagsSelect')
        const newsItemPreviewModal = document.getElementById('newsItemPreview')


        if(dateEndElem && dateStartElem && newsAuthorsSelect && newsTagsSelect && newsItemPreviewModal) {
            M.Datepicker.init(dateStartElem, {
                yearRange: 70,
                firstDay: 1,
                onClose: () => {
                    //setMember({...member, birthDate: datePicker.current!.value!})
                    console.log('closed startDate')
                    debugger
                }
            })
            M.Datepicker.init(dateEndElem, {
                yearRange: 70,
                firstDay: 1,
                onClose: () => {
                    //setMember({...member, birthDate: datePicker.current!.value!})
                    console.log('closed endDate')
                    debugger
                }
            })
            M.FormSelect.init(newsAuthorsSelect)
            M.FormSelect.init(newsTagsSelect)
            M.Modal.init(newsItemPreviewModal)
        }
        M.updateTextFields()


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
                            <select defaultValue="0" id="newsAuthorsSelect">   {    // add here map function of stored newsAuthors
                             }
                                <option value="0">Все Авторы</option>
                                <option value="1">Алексей Щербаков</option>
                                <option value="2">Нурлан Сабуров</option>
                                <option value="3">Илья Макаров</option>
                            </select>
                            <label >Автор</label>
                        </div>
                        <div className="input-field">
                            <select defaultValue="0" id="newsTagsSelect">   {    // add here map function of stored newsTags
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
                                id="dateStart"
                            />
                            <label htmlFor="birthdate" >Дата начала</label>
                        </div>
                        <div className="input-field">
                            <input 
                                type="text" 
                                className="datepicker" 
                                id="dateEnd"
                            />
                            <label htmlFor="DateEnd" >Дата конца</label>
                        </div>
                        <div className="input-field">
                            <input type="text" id="titleSearch" className="autocomplete" />
                            <label htmlFor="titleSearch">Поиск по теме</label>
                        </div>
                    </div>
                    <h6 className="red-text">Список новостей</h6>
                    <ul className="collection">
                        
                        <li className="collection-item">qwe</li>
                        <li className="collection-item brake-word">asgfdjslkgjsdlfkjglsdjf dsfgdf sldkfjglsdjfglkjsd dlsfgjsldfjglksdjfgljsdflkgjsdlfkjgd</li>
                        <li className="collection-item">zxc</li>
                        <li className="collection-item">123</li>
                        <li className="collection-item">rty</li>
                    </ul>    
                    
                </div>
                <div className="col s12 m8 center">

                <div className="row">
                        <div className="input-field col s10 offset-s1">
                            <input 
                                onChange={
                                    (e:any) => {
                                        //setMember({...member, name: e.currentTarget.value})
                                }} 
                                id="newsTitle" 
                                type="text" 
                                className="validate"
                            />
                            <label className="active" htmlFor="newsTitle">Тема Новости</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s10 offset-s1">
                            <input 
                                onChange={
                                    (e:any) => {
                                        //setMember({...member, name: e.currentTarget.value})
                                }} 
                                id="newsAuthor" 
                                type="text" 
                                className="validate"
                            />
                            <label className="active" htmlFor="newsAuthor">Автор</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s10 offset-s1">
                            <input 
                                onChange={
                                    (e:any) => {
                                        //setMember({...member, name: e.currentTarget.value})
                                }} 
                                id="newsTag" 
                                type="text" 
                                className="validate"
                            />
                            <label className="active" htmlFor="newsTag">Рубрика</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s10 offset-s1">
                            <input 
                                onChange={
                                    (e:any) => {
                                        //setMember({...member, name: e.currentTarget.value})
                                }} 
                                id="newsDescription" 
                                type="text" 
                                className="validate"
                            />
                            <label className="active" htmlFor="newsDescription">Подзаголовок</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s10 offset-s1">
                            <textarea 
                                onChange={
                                    (e:any) => {
                                        //setMember({...member, name: e.currentTarget.value})
                                }} 
                                id="newsBody" 
                                className="materialize-textarea"
                            />
                            <label className="active" htmlFor="newsBody">Текст новости</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s6">
                            <span>Опубликовать: </span></div>
                        <div className="col s6">
                            <div className="switch">
                                <label>
                                Нет
                                <input type="checkbox"/>
                                <span className="lever"></span>
                                Да
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s10 offset-s1">
                            <button 
                                onClick={(e:MouseEvent<HTMLButtonElement>)=>{
                                    e.preventDefault()
                                    M.toast({html:'Новость добавлена'})
                                }}
                                className="btn">Добавить</button>
                            <button 
                                onClick={(e:MouseEvent<HTMLButtonElement>)=>{
                                    e.preventDefault()
                                    M.toast({html:'Новость обновлена'})
                                }}
                                className="btn">Обновить</button>
                        </div>
                    </div>
                    <div className="row">

                        <a className="waves-effect waves-light btn modal-trigger" href="#newsItemPreview" onClick={(e)=>{e.preventDefault()}}>Педпросмотр</a>

                        <div id="newsItemPreview" className="modal">
                            <a href="#!" className="modal-close waves-effect waves-red btn-flat right">X</a>
                            <div className="modal-content">
                                <NewsCard newsItem={newsFeedData.newsFeed[0]} />
                            </div>
                        </div>
                    </div>
                    
                </div>
        </div>  
    )
}