import React, { useEffect, useState } from 'react'
import { Footer } from '../../../Footer/Footer'





export const ManagePagesFooter = () => {


    const textArea = document.getElementById('#FooterText')

    const [ footerPagePreview, setFooterPagePreview ]  = useState({
        heading: "Footer Content",
        infoText: "You can use rows and columns here to organize your footer content.",
        socialHeading: "Обратная связь",
        social: {
          facebook: "#!",
          telegram: "#!",
          whatsapp: "#!",
          kakao: "#!",
        },
        copyright: "2021 Copyright Text"
    })

    useEffect(() => {

        if(textArea) {
            M.textareaAutoResize( textArea )
        }

        M.updateTextFields()
        return () => {
            
        }
    })
    
    console.log("footer")
    return (
        <div className=" row">
                
                <div className="row custom-section">
                    <div className=" row"><h5>Подвал сайта</h5></div>

                        <div className="col s12 m12 l6 ">
                            <div className="row">
                                <div className="input-field col s10">
                                    <i className="bi bi-person-circle prefix"></i>
                                    <input
                                        onChange={
                                            (e: any) => {
                                                //@ts-ignore
                                                setFooterPagePreview({...footerPagePreview, heading: e.currentTarget.value})
                                            }}
                                        value={ footerPagePreview.heading }
                                        id="FooterHeader"
                                        type="text"
                                        className="validate"
                                    />
                                   <label htmlFor="FooterHeader">Заголовок подвала</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s10">
                                    <i className="bi bi-person-circle prefix"></i>
                                    <textarea 
                                        id="FooterText" 
                                        className="materialize-textarea" 
                                        value={ footerPagePreview.infoText }
                                        onChange={(e:any)=>{
                                            //@ts-ignore
                                                setFooterPagePreview({...footerPagePreview, infoText: e.currentTarget.value})
                                    }}/>
                                    <label htmlFor="FooterText">Информационный текст</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s10">
                                    <i className="bi bi-person-circle prefix"></i>
                                    <input 
                                        id="SocialHeading" 
                                        value={ footerPagePreview.socialHeading }
                                        className="validate"
                                        onChange={(e:any)=>{
                                            //@ts-ignore
                                                setFooterPagePreview({...footerPagePreview, socialHeading: e.currentTarget.value})
                                    }}/>
                                    <label className="active" htmlFor="SocialHeading">Заголовок колонки социальных сетей</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s10">
                                    <i className="bi bi-person-circle prefix"></i>
                                    <input 
                                        id="FooterCopyright"
                                        value={ footerPagePreview.copyright }
                                        className="validate"
                                        onChange={(e:any)=>{
                                            //@ts-ignore
                                                setFooterPagePreview({...footerPagePreview, copyright: e.currentTarget.value})
                                    }}/>
                                    <label className="active" htmlFor="FooterCopyright">Копирайт</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s10">
                                    <i className="bi bi-person-circle prefix"></i>
                                    <input 
                                        id="FacebookLink" 
                                        value={ footerPagePreview.social.facebook }
                                        className="validate"
                                        onChange={(e:any)=>{
                                            //@ts-ignore
                                                setFooterPagePreview({...footerPagePreview, social: {...footerPagePreview.social, facebook: e.currentTarget.value} })
                                    }}/>
                                    <label className="active" htmlFor="FacebookLink">Ссылка на страницу Facebook</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s10">
                                    <i className="bi bi-person-circle prefix"></i>
                                    <input 
                                        id="TelegramLink" 
                                        value={ footerPagePreview.social.telegram }
                                        className="validate"
                                        onChange={(e:any)=>{
                                            //@ts-ignore
                                                setFooterPagePreview({...footerPagePreview, social: {...footerPagePreview.social, telegram: e.currentTarget.value} })
                                    }}/>
                                    <label className="active" htmlFor="TelegramLink">Ссылка на контакт Telegram</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s10">
                                    <i className="bi bi-person-circle prefix"></i>
                                    <input 
                                        id="WhatsappLink" 
                                        value={ footerPagePreview.social.whatsapp }
                                        className="validate"
                                        onChange={(e:any)=>{
                                            //@ts-ignore
                                                setFooterPagePreview({...footerPagePreview, social: {...footerPagePreview.social, whatsapp: e.currentTarget.value} })
                                    }}/>
                                    <label className="active" htmlFor="WhatsappLink">Ссылка на контакт Whatsapp</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s10">
                                    <i className="bi bi-person-circle prefix"></i>
                                    <input 
                                        id="KakaoLink" 
                                        value={ footerPagePreview.social.kakao }
                                        className="validate"
                                        onChange={(e:any)=>{
                                            //@ts-ignore
                                            setFooterPagePreview({...footerPagePreview, social: {...footerPagePreview.social, kakao: e.currentTarget.value} })
                                    }}/>
                                    <label className="active" htmlFor="KakaoLink">Ссылка на контакт Kakao</label>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m12 l6 overlay-hidden">
                            <div className="overlay-scroll">  
                                <Footer pageFooter={ footerPagePreview } />
                            </div>
                        </div>
                <button className="waves-effect waves-light btn" onClick={()=>{window.alert("изменения приняты хДД")}} >Применить изменения</button>
                    </div>
            </div>
    )
}