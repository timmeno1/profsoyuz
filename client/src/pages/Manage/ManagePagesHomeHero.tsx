import React, { useRef } from 'react'
import { PageHero } from '../Home/PageHero'


export const ManagePagesHomeHero = (props:any) => {

    const pageHeroFileRef = useRef<HTMLInputElement>(null)


    return (
        <div className="row custom-section">
                <div className=" row"><h5>Главный Заголовок</h5></div>

                <div className="col s12 m12 l6 ">
                    <div className="row">
                        <div className="input-field col s10">
                            <i className="bi bi-person-circle prefix"></i>
                            <input
                                onChange={
                                    (e: any) => {
                                        props.setHomePagePreview({...props.homePagePreview, headingTitle: e.currentTarget.value})
                                    }}
                                value={ props.homePagePreview.headingTitle }
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
                                value={ props.homePagePreview.afterTitle }
                                onChange={(e:any)=>{
                                    props.setHomePagePreview({...props.homePagePreview, afterTitle: e.currentTarget.value})
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
                                        props.setHomePagePreview({...props.homePagePreview, heroImage: fileLocalUrl})
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
                            headingTitle={props.homePagePreview.headingTitle}
                            afterTitle={props.homePagePreview.afterTitle}
                            heroImage={props.homePagePreview.heroImage}
                        />
                    </div>
                </div>
                <button className="waves-effect waves-light btn" onClick={()=>{window.alert("изменения приняты хДД")}} >Применить изменения</button>
            </div>
    )
}