import React, { useEffect, useRef, useState } from 'react'
import { PageHero } from '../Home/PageHero'
import M from 'materialize-css'
import { Features } from '../Home/Features'
import { Media } from '../Home/Media'
import bootstrapExample from "../../assets/img/manage/bootstrap.jpg"
import { features } from 'process'

export const ManagePagesHome = () => {

    const pageHeroFileRef = useRef<HTMLInputElement>(null)

    const [homePagePreview, setHomePagePreview] = useState({
        headingTitle: "Профсоюз",
        afterTitle: "Защита прав на работе",
        heroImage: "https://loremflickr.com/1905/1080",
        features: [
            {
                textHeader: "Speeds up development",
                text: "We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.",
                icon: "bi-calendar3"
            },
            {
                textHeader: "User Experience Focused",
                text: "By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.",
                icon: "bi-shield-check"
            },
            {
                textHeader: "Easy to work with",
                text: "We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.",
                icon: "bi-watch"
            }

        ],
        counters: {
            members: 276,
            solvedProblems: 417
        },
        media: [
            "https://loremflickr.com/800/640",
            "https://loremflickr.com/800/640",
            "https://loremflickr.com/800/640",
            "https://loremflickr.com/800/640",
            "https://loremflickr.com/800/640",
            "https://loremflickr.com/800/640"
        ]
    })
    const [ featureVal, setFeatureVal ] = useState({
        number: 0,
        featureIcon: homePagePreview.features[0].icon,
        featureHeader: homePagePreview.features[0].textHeader,
        featureText: homePagePreview.features[0].text
    });

    const updateFeatureVal = () => {

    }
    const updateFeaturePreview = (homePagePreview:any, featureVal:any)=>{
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
    
        const materialBoxElements = document.querySelectorAll('.materialboxed')
        if(materialBoxElements) {
            const MaterialBoxes = M.Materialbox.init(materialBoxElements, {  })
            // used some stuff to prevent closing materialbox on scroll
            if(MaterialBoxes.length) {
                let protoOfMaterialbox = Object.getPrototypeOf(MaterialBoxes[0])
                protoOfMaterialbox._handleWindowScroll = () => {return null}    
            }
        }

        const textArea = document.getElementById('#featureText')
        if( textArea ) M.textareaAutoResize( textArea )
        M.updateTextFields()

        const elems = document.querySelectorAll('.modal');
        const instances = M.Modal.init(elems, {preventScrolling:false});
    })

    console.log("home")
    return (
        <div className=" row">
            <div className="row custom-section">
                <div className=" row"><h5>Главный Заголовок</h5></div>

                <div className="col s12 m12 l6 ">
                    <div className="row">
                        <div className="input-field col s10">
                            <i className="bi bi-person-circle prefix"></i>
                            <input
                                onChange={
                                    (e: any) => {
                                        setHomePagePreview({...homePagePreview, headingTitle: e.currentTarget.value})
                                    }}
                                value={ homePagePreview.headingTitle }
                                id="heroPageHeader"
                                type="text"
                                className="validate"
                            />
                            <label htmlFor="heroPageHeader">Заголовок</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s10">
                            <i className="bi bi-person-circle prefix"></i>
                            <textarea 
                                id="heroPageTitle" 
                                className="materialize-textarea" 
                                value={ homePagePreview.afterTitle }
                                onChange={(e:any)=>{
                                    setHomePagePreview({...homePagePreview, afterTitle: e.currentTarget.value})
                            }}/>
                            <label htmlFor="heroPageTitle">Подзаголовок</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="file-field  input-field col s10">

                            <div className="btn">
                                <span>File</span>
                                <input type="file" ref={pageHeroFileRef} onChange={()=>{
                                    if(pageHeroFileRef && pageHeroFileRef.current && pageHeroFileRef.current.files){
                                        let fileLocalUrl = URL.createObjectURL(pageHeroFileRef.current.files[0])
                                        setHomePagePreview({...homePagePreview, heroImage: fileLocalUrl})
                                    }
                                }}/>
                            </div>
                            <div className="file-path-wrapper">
                                <input className="file-path validate" type="text" placeholder="Изображение" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col s12 m12 l6 overlay-hidden">
                    <div className="overlay-scroll materialboxed">
                        <PageHero
                            headingTitle={homePagePreview.headingTitle}
                            afterTitle={homePagePreview.afterTitle}
                            heroImage={homePagePreview.heroImage}
                        />
                    </div>
                </div>
                <button className="waves-effect waves-light btn" onClick={()=>{window.alert("изменения приняты хДД")}} >Применить изменения</button>
            </div>
            <div className="row custom-section">
                <div className=" row"><h5>Преимущества</h5></div>
                <div className="col s12 m12 l6 ">
                    <div className="row">
                        <div className="input-field col s8 offset-s1">
                            <select defaultValue="0"  onChange={ (e)=> {
                                const val = Number.parseInt(e.target.value)
                                setFeatureVal({...featureVal, 
                                    number: val, 
                                    featureHeader: homePagePreview.features[val].textHeader,
                                    featureIcon: homePagePreview.features[val].icon,
                                    featureText: homePagePreview.features[val].text
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
                            updateFeaturePreview(homePagePreview,featureVal)
                        }}>
                            Обновить
                        </button>
                    </div>
                </div>
                <div className="col s12 m12 l6">
                    <div className="row overlay-hidden">
                        <div className="overlay-scroll">
                            <Features
                                features={ homePagePreview.features }
                            />
                        </div>
                    </div>
                    <div className="row section">
                        <button className="btn" onClick={()=>{window.alert("изменения приняты хДД")}}>
                            Применить изменения
                        </button>
                    </div>
                </div>
            </div>
            <div className="row custom-section">
                <div className=" row"><h5>Фото и видео</h5></div>
                <div className="col s12 ">
                    <div className="row">
                        <div className="input-field col s10">
                            <i className="bi bi-person-circle prefix"></i>
                            <input
                                onChange={
                                    (e: any) => {
                                        
                                    }}
                                placeholder=""
                                id="heroPageHeader"
                                type="text"
                                className="validate"
                            />
                            <label htmlFor="heroPageHeader">Заголовок</label>
                        </div>
                    </div>
                    
                </div>
                <div className="col s12">
                    <a className="waves-effect waves-light btn modal-trigger" href="#modal2" onClick={(e)=>{e.preventDefault()}}>Педпросмотр</a>

                    <div id="modal2" className="modal">
                        <div className="modal-content">
                            <Media media={homePagePreview.media} />
                        </div>
                    </div>
        
                        
                </div>
            </div>
        </div>
    )
}