import React, {useEffect} from 'react';
import M from 'materialize-css'



export const Join = () => {
    let datePickerOption = {
        yearRange: 70,
        firstDay: 1
    }

    useEffect(() => {
        let elem = document.querySelectorAll('.datepicker');
        M.AutoInit();
        M.updateTextFields()
        M.Datepicker.init(elem, datePickerOption);
      });


    return (
        <div className="section container row">
            <p>
                Введите данные для подачи заявки на вступление в профсоюз
            </p>
            <form className="col s12">
            <div className="row">
                <div className="input-field col s6">
                    <i className="bi bi-person-circle prefix"></i>
                    <input placeholder="TEN VLADISLAV" id="name" type="text" className="validate" />
                    <label htmlFor="name">Имя</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <i className="bi bi-calendar-date prefix"></i>
                    <input type="text" className="datepicker" id="birthdate"/>
                    <label htmlFor="birthdate">Дата рождения</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <i className="bi bi-house-fill prefix"></i>
                    <input id="homeAddress" type="text" />
                    <label htmlFor="homeAddress">Домашний Адрес</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <i className="bi bi-telephone-fill prefix"></i>
                    <input id="phoneNumber" type="tel" name="phoneNumber" />
                    <label htmlFor="phoneNumber">Телефон</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <i className="bi bi-building prefix"></i>
                    <input id="workPlace" type="text" />
                    <label htmlFor="workPlace">Текущее место работы</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <i className="bi bi-building prefix"></i>
                    <input id="beforeWorkPlace" type="text" />
                    <label htmlFor="beforeWorkPlace">Место предыдущей работы</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <i className="bi bi-envelope prefix"></i>
                    <input id="email" type="email" className="validate" />
                    <label htmlFor="email">Email</label>
                </div>
            </div>
            <div className="row">
                <button className="btn">Отправить</button>
            </div>
            </form>
        </div>
    )
}