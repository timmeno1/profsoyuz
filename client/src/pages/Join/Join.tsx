import React, {useEffect, useState} from 'react';
import M from 'materialize-css'


type joinPageType = any; // nado dopisat


export const Join = (props:joinPageType) => {

    
    const datePickerOption = {
        yearRange: 70,
        firstDay: 1
    }

    const [member, setMember] = useState({
        id: "", 
        name: "", 
        email: "",
        birthDate: "", 
        homeAddress: "", 
        phoneNumber: "", 
        workPlace: "",
        beforeWorkPlace: ""
    })
    
    useEffect(() => {
        debugger
        let elem = document.getElementById('#birthdate')
        M.AutoInit();
        M.updateTextFields()
        if(elem) {
            M.Datepicker.init(elem, datePickerOption);
        }
      }, [member, datePickerOption]);


    return (
        <div className="section container row">
            <p>
                Введите данные для подачи заявки на вступление в профсоюз
            </p>
            <form className="col s12">
            <div className="row">
                <div className="input-field col s6">
                    <i className="bi bi-person-circle prefix"></i>
                    <input 
                        onChange={
                            (e: React.FormEvent<HTMLInputElement>) => {
                                setMember({...member, name: e.currentTarget.value})
                                console.log(member)
                        }} 
                        placeholder="TEN VLADISLAV" 
                        id="name" 
                        type="text" 
                        className="validate"
                    />
                    <label htmlFor="name">Имя</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <i className="bi bi-calendar-date prefix"></i>
                    <input 
                        onSelect={
                            (e: React.FormEvent<HTMLInputElement>) => {
                                setMember({...member, birthDate: e.currentTarget.value})
                                console.log(member)
                            }} 
                        type="text" 
                        className="datepicker" 
                        id="birthdate"
                    />
                    <label htmlFor="birthdate">Дата рождения</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <i className="bi bi-house-fill prefix"></i>
                    <input 
                        onChange={
                            (e: React.FormEvent<HTMLInputElement>) => {
                                setMember({...member, homeAddress: e.currentTarget.value})
                                console.log(member)
                            }} 
                        id="homeAddress" 
                        type="text" 
                    />
                    <label htmlFor="homeAddress">Домашний Адрес</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <i className="bi bi-telephone-fill prefix"></i>
                    <input 
                        onChange={
                            (e: React.FormEvent<HTMLInputElement>) => {
                                setMember({...member, phoneNumber: e.currentTarget.value})
                                console.log(member)
                            }} 
                        id="phoneNumber" 
                        type="tel" 
                        name="phoneNumber" 
                    />
                    <label htmlFor="phoneNumber">Телефон</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <i className="bi bi-building prefix"></i>
                    <input 
                        onChange={
                            (e: React.FormEvent<HTMLInputElement>) => {
                                setMember({...member, workPlace: e.currentTarget.value})
                                console.log(member)
                            }} 
                        id="workPlace" 
                        type="text" 
                    />
                    <label htmlFor="workPlace">Текущее место работы</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <i className="bi bi-building prefix"></i>
                    <input 
                        onChange={
                            (e: React.FormEvent<HTMLInputElement>) => {
                                setMember({...member, beforeWorkPlace: e.currentTarget.value})
                                console.log(member)
                            }} 
                        id="beforeWorkPlace" 
                        type="text" 
                    />
                    <label htmlFor="beforeWorkPlace">Место предыдущей работы</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <i className="bi bi-envelope prefix"></i>
                    <input 
                        onChange={
                            (e: React.FormEvent<HTMLInputElement>) => {
                                setMember({...member, email: e.currentTarget.value})
                                console.log(member)
                            }} 
                        id="email" 
                        type="email" 
                        className="validate" 
                    />
                    <label htmlFor="email">Email</label>
                </div>
            </div>
            <div className="row">
                <button onClick={(newMember) => { props.submitJoinData(newMember) }}  className="btn">Отправить</button>
            </div>
            </form>
        </div>
    )
}