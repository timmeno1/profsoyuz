import React, {MouseEvent,  RefObject, useEffect, useRef, useState} from 'react';
import M from 'materialize-css'
import { Document, HeadingLevel, Packer, Paragraph, Table, TableCell, TableRow, VerticalAlign, TextDirection, ImageRun, TableRowProperties, WidthType, HeightRule } from "docx";
import { saveAs } from 'file-saver';


type MemberEditType = any; // nado dopisat







export const MemberEdit = (props:MemberEditType) => {


    const table = new Table({
        rows: [
            new TableRow( {
                children: [
                    new TableCell({
                        children: [
                            new Paragraph({text:"광리"})
                        ],
                        verticalAlign: VerticalAlign.CENTER,
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({text:"리미테드"})
                        ],
                        verticalAlign: VerticalAlign.CENTER
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({text:"갤랙시"})
                        ],
                        verticalAlign: VerticalAlign.CENTER
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({text:"헬리콥터"})
                        ],
                        verticalAlign: VerticalAlign.CENTER
                    })
                ],
                height: { value: 20, rule: HeightRule.ATLEAST }
            } )
        ],
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        }
    })

    const doc = new Document({
        sections: [
            {
                children: [
                    new Paragraph({ text:"테이블" }),
                    table
                ]
            }
        ],
    });


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
        <div className="card">
            <form className="card-content">
                <span className="card-title">Карточка добавления/редактирования участника</span>
                    <div className="input-field">
                        <i className="modalIconInput bi bi-person-circle prefix"></i>
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
                    <div className="input-field">
                        <i className="modalIconInput bi bi-calendar-date prefix"></i>
                        <input 
                            type="text" 
                            className="datepicker" 
                            id="birthdate"
                            ref={ datePicker }
                        />
                        <label htmlFor="birthdate">Дата рождения</label>
                    </div>
                    <div className="input-field">
                        <i className="modalIconInput bi bi-house-fill prefix"></i>
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
                    <div className="input-field">
                        <i className="modalIconInput bi bi-telephone-fill prefix"></i>
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
                    <div className="input-field">
                        <i className="modalIconInput bi bi-building prefix"></i>
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
                    <div className="input-field">
                        <i className="modalIconInput bi bi-building prefix"></i>
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
                    <div className="input-field">
                        <i className="modalIconInput bi bi-envelope prefix"></i>
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
                    <div className="input-field">
                        <i className="modalIconInput bi bi-envelope prefix"></i>
                        <input 
                            onChange={
                                (e: React.FormEvent<HTMLInputElement>) => {
                                    //setMember({...member, email: e.currentTarget.value})
                                }} 
                            id="comment" 
                            type="text" 
                            className="validate" 
                        />
                        <label htmlFor="comment">Комментарий</label>
                    </div>
                    
                    <div className="input-field">
                        <div className="switch">
                            <span>Активный: </span>
                            <label>
                                Off
                            <input type="checkbox"/>
                            <span className="lever"></span>
                                On
                            </label>
                        </div>
                    </div>
            </form>
            <div className="card-action">

                    <button className="btn" onClick={
                        ()=>{
                            Packer.toBlob(doc).then(blob => {
                                console.log(blob);
                                saveAs(blob, "example.docx");
                                console.log("Document created successfully");
                              });
                        }
                    }>Сохранить в файл</button>
                    
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
                        className="btn">Обновить/Добавить</button>
                </div>
        </div>
    )
}