import React, { useEffect } from 'react'
import { MemberEdit } from './MemberEdit'

export const ManageMembers = () => {


    useEffect(() => {

        const searchNameAutocomplete = document.getElementById('searchNameAutocomplete')
        const searchWorkplaceAutocomplete = document.getElementById('searchWorkplaceAutocomplete')
        const searchPhoneAutocomplete = document.getElementById('searchPhoneAutocomplete')
        const dateStart = document.getElementById('dateStart')
        const dateEnd = document.getElementById('dateEnd')
        const modals = document.querySelectorAll('.modal')

        if( searchNameAutocomplete && searchWorkplaceAutocomplete && searchPhoneAutocomplete && dateStart && dateEnd && modals) {
            M.Autocomplete.init(searchNameAutocomplete, {
                data: {
                    "Apple": null,
                    "Microsoft": null,
                    "Google": null
                  }
            })
            M.Autocomplete.init(searchWorkplaceAutocomplete, {
                data: {
                    "Apple": null,
                    "Microsoft": null,
                    "Google": null
                  }
            })
            M.Autocomplete.init(searchPhoneAutocomplete, {
                data: {
                    "Apple": null,
                    "Microsoft": null,
                    "Google": null
                  }
            })

            M.Datepicker.init(dateStart, {
                yearRange: 70,
                firstDay: 1,
                onClose: () => {
                    //setMember({...member, birthDate: datePicker.current!.value!})
                }
            })
            M.Datepicker.init(dateEnd, {
                yearRange: 70,
                firstDay: 1,
                onClose: () => {
                    //setMember({...member, birthDate: datePicker.current!.value!})
                }
            })
            M.Modal.init(modals, {})
            
        }

        return () => {
            
        }
    })


    return (
        <div className="manage row">
                <div className="col s12 center">
                    
                    <h4>Members Manage page</h4>

                    <div className="row">
                        <div className="col s12 m12 l5">
                            <div className="row card">
                                <div className="card-content">
                                    <h6 className="card-title">Поиск</h6>
                                    <div className="input-field ">
                                        <input type="text" id="searchNameAutocomplete" className="autocomplete" />
                                        <label htmlFor="searchNameAutocomplete">по имени</label>
                                    </div>
                                    <div className="input-field">
                                        <input type="text" id="searchWorkplaceAutocomplete" className="autocomplete" />
                                        <label htmlFor="searchWorkplaceAutocomplete">по месту работы</label>
                                    </div>
                                    <div className="input-field">
                                        <input type="text" id="searchPhoneAutocomplete" className="autocomplete" />
                                        <label htmlFor="autocompletePhoneNumber">по телефону</label>
                                    </div>

                                    <div className="row">
                                        <h6>Интервал даты регистрации</h6>
                                        <div className="input-field">
                                            <input type="text" id="dateStart" className="datepicker" />
                                            <label htmlFor="dateStart">Начало</label>
                                        </div>
                                        <div className="input-field">
                                            <input type="text" id="dateEnd" className="datepicker" />
                                            <label htmlFor="dateEnd">Конец</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                    <button data-target="modal3" className="btn modal-trigger">Добавить нового участника</button>
                                                <div id="modal3" className="modal">
                                                    <div className="modal-content">
                                                        <MemberEdit submitJoinData={(a:any)=>{console.log(a)}}/>
                                                        <button className="btn grey darken-2 modal-close">Закрыть</button>
                                                    </div>
                                                </div>
                                </div>
                        </div>
                        <div className="col s12 m12 l7">
                            <div className="card">
                                <ul className="collection left-align">
                                    <li className="collection-item avatar customHover">
                                        <img src="https://loremflickr.com/200/200" alt="" className="circle"/>
                                        <span className="title">Title</span>
                                        <p>First Line <br/>
                                            Second Linesdfasdfasdfasdfasdfasdfasdfadsfasdfasdf
                                        </p>
                                    </li>
                                    <li className="collection-item avatar customHover">
                                        <img src="https://loremflickr.com/200/200" alt="" className="circle"/>
                                        <span className="title">Title</span>
                                        <p>First Line <br/>
                                            Second Line
                                        </p>
                                    </li>
                                    <li className="collection-item avatar customHover">
                                        <img src="https://loremflickr.com/200/200" alt="" className="circle"/>
                                        <span className="title">Title</span>
                                        <p>First Line <br/>
                                            Second Line
                                        </p>
                                    </li>
                                    <li className="collection-item avatar customHover">
                                        <img src="https://loremflickr.com/200/200" alt="" className="circle"/>
                                        <span className="title">Title</span>
                                        <p>First Line <br/>
                                            Second Line
                                        </p>
                                    </li>
                                    <li className="collection-item avatar customHover">
                                        <img src="https://loremflickr.com/200/200" alt="" className="circle"/>
                                        <span className="title">Title</span>
                                        <p>First Line <br/>
                                            Second Line
                                        </p>
                                    </li>
                                    <li className="collection-item avatar customHover">
                                        <div className="row">
                                            <div className="col s8">
                                                <img src="https://loremflickr.com/200/200" alt="" className="circle"/>
                                                <span className="title">Title</span>
                                                <p>First Line <br/>
                                                    Second Line
                                                </p>
                                            </div>
                                            <div className="col s4 right-align">
                                                
                                                <button data-target="modal1" className="btn modal-trigger">Открыть</button>
                                                <div id="modal1" className="modal">
                                                    <div className="modal-content">
                                                        <MemberEdit submitJoinData={(a:any)=>{console.log(a)}}/>
                                                        <button className="btn grey darken-2 modal-close">Закрыть</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="collection-item avatar customHover">
                                        <div className="row">
                                            <div className="col s8">
                                                <img src="https://loremflickr.com/200/200" alt="" className="circle"/>
                                                <span className="title">Title</span>
                                                <p>First Line <br/>
                                                    Second Line
                                                </p>
                                            </div>
                                            <div className="col s4 right-align">
                                                <button data-target="modal2" className="btn modal-trigger">Открыть</button>
                                                <div id="modal2" className="modal">
                                                    <div className="modal-content">
                                                        <MemberEdit submitJoinData={(a:any)=>{console.log(a)}}/>
                                                        <button className="btn grey darken-2 modal-close">Закрыть</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    
                                </ul>
                                <div className="card-action">
                                    <button className="btn">Еще</button>
                                </div>
                            </div>
                        </div>
                            

                    </div>

                </div>
        </div>  
    )
}