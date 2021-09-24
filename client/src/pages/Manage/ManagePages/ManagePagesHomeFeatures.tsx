import React, { useEffect, useState } from 'react'
import bootstrapExample from "../../../assets/img/manage/bootstrap.jpg"
import { Features } from '../../Home/Features'

export const ManagePagesHomeFeatures = (props:any) => {

    const modals = document.querySelectorAll('.modal');
    const textArea = document.getElementById('#featureText')

    const [ featureVal, setFeatureVal ] = useState({
        number: 0,
        featureIcon: props.homePagePreview.features[0].icon,
        featureHeader: props.homePagePreview.features[0].textHeader,
        featureText: props.homePagePreview.features[0].text
    });

    const updateFeaturePreview = (homePagePreview:any, featureVal:any, setHomePagePreview:any)=>{
        let newFeatureArr = homePagePreview.features.map((feature:any,i:any)=>{
            if (i===featureVal.number) {
                feature.textHeader = featureVal.featureHeader
                feature.text = featureVal.featureText
                feature.icon = featureVal.featureIcon
            }
            return feature
        })
        setHomePagePreview({...homePagePreview, features: [...newFeatureArr
        ]})
    }


    useEffect(() => {
        
        if( textArea ) M.textareaAutoResize( textArea )
        M.updateTextFields()

        M.Modal.init(modals, {preventScrolling:false});

        return () => {
        }
    }, [modals, textArea])


    return (
        <div className="row custom-section">
                <div className=" row"><h5>Преимущества</h5></div>
                <div className="col s12 m12 l6 ">
                    <div className="row">
                        <div className="input-field col s8 offset-s1">
                            <select defaultValue="0"  onChange={ (e)=> {
                                const val = Number.parseInt(e.target.value)
                                setFeatureVal({...featureVal, 
                                    number: val, 
                                    featureHeader: props.homePagePreview.features[val].textHeader,
                                    featureIcon: props.homePagePreview.features[val].icon,
                                    featureText: props.homePagePreview.features[val].text
                                })
                                const textArea = document.querySelector('#featureText')
                                if( textArea ) setTimeout(() => {
                                    M.textareaAutoResize( textArea )
                                }, 200)
                            }}>
                                <option value="0">1</option>
                                <option value="1">2</option>
                                <option value="2">3</option>
                            </select>
                            <label>Выберите номер преимущества</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s10">
                            <i className="bi bi-person-circle prefix"></i>
                            <input
                                onChange={
                                    (e: any) => {
                                        setFeatureVal({...featureVal, featureHeader: e.currentTarget.value})
                                    }}
                                placeholder=""
                                id="featureHeader"
                                type="text"
                                className="validate"
                                value={featureVal.featureHeader}
                            />
                        </div>
                        <div className="input-field col s10">
                            <i className="bi bi-person-circle prefix"></i>
                            <textarea 
                                id="featureText" 
                                className="materialize-textarea" 
                                value={featureVal.featureText}
                                onChange={(e:any)=>{
                                    setFeatureVal({...featureVal, featureText: e.currentTarget.value})
                            }}/>
                        </div>
                        <div className="input-field col s10">
                            <i className="bi bi-person-circle prefix"></i>
                            <input 
                                type="text"
                                id="featureIcon" 
                                value={featureVal.featureIcon}
                                onChange={(e:any)=>{
                                    setFeatureVal({...featureVal, featureIcon: e.currentTarget.value})
                            }}/>
                            <p>Посмотреть список иконок можно тут <a target="_blank" rel="noreferrer" href="https://icons.getbootstrap.com/">icons.getbootstrap.com</a></p>
                            <div> <p>кликнете по интересующей вас иконке и скопируйте текст который начинается с 
                                <code> bi-*</code> 
                                <a href="#!" onClick={(e:any)=>{e.preventDefault()}} data-target="modal1" className="modal-trigger">Пример</a>
                                </p>
                                <div id="modal1" className="modal">
                                    <a href="#!" className="modal-close waves-effect waves-red btn-flat right">X</a>
                                    <div className="modal-content">
                                        <img className="responsive-img" src={bootstrapExample} alt="asdqwe" />
                                    </div>
                                    <div className="modal-footer">
                                    
                                    </div>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                    <div className="row">
                        <button className="btn" onClick={()=>{
                            updateFeaturePreview(props.homePagePreview, featureVal, props.setHomePagePreview)
                        }}>
                            Обновить
                        </button>
                    </div>
                </div>
                <div className="col s12 m12 l6">
                    <div className="row overlay-hidden">
                        <div className="overlay-scroll">
                            <Features
                                features={ props.homePagePreview.features }
                            />
                        </div>
                    </div>
                    <div className="row ">
                        <button className="btn" onClick={()=>{window.alert("изменения приняты хДД")}}>
                            Применить изменения
                        </button>
                    </div>
                </div>
            </div>
    )
}