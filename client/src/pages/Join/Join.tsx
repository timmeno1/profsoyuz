import React, {MouseEvent,  RefObject, useEffect, useRef, useState} from 'react';
import M from 'materialize-css'


type joinPageType = any; // nado dopisat


export const Join = (props:joinPageType) => {

    let datePicker:RefObject<HTMLInputElement> = useRef(null)


    const [member, setMember] = useState({
        name: "", 
        email: "",
        birthDate: "", 
        homeAddress: "", 
        phoneNumber: "", 
        workPlace: "",
        beforeWorkPlace: ""
    })
    
    useEffect(() => {
        
        const elem = document.getElementById('birthdate')
        if(elem) {
            M.Datepicker.init(elem, {
                yearRange: 70,
                firstDay: 1,
                onClose: () => {
                    setMember({...member, birthDate: datePicker.current!.value!})
                }
            });
        }
        M.updateTextFields()
      }, [member]);


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
                            (e:any) => {
                                setMember({...member, name: e.currentTarget.value})
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
                        type="text" 
                        className="datepicker" 
                        id="birthdate"
                        ref={ datePicker }
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
                            }} 
                        id="email" 
                        type="email" 
                        className="validate" 
                    />
                    <label htmlFor="email">Email</label>
                </div>
            </div>
            <div className="row">
                <button 
                    onClick={(e:MouseEvent)=>{
                        e.preventDefault()
                        const inputs = document.querySelectorAll('input')
                        props.submitJoinData(member)
                        setMember({
                            name: "", 
                            email: "",
                            birthDate: "", 
                            homeAddress: "", 
                            phoneNumber: "", 
                            workPlace: "",
                            beforeWorkPlace: ""
                        })
                        inputs.forEach( input => input.value="" )
                        M.toast({html:"Ваши данные отправлены."})
                    }}
                    className="btn">Отправить</button>
            </div>
            </form>
        </div>
    )
}