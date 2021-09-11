import React, { useState } from 'react'
import { Home } from '../Home/Home'
import { PageHero } from '../Home/PageHero'

export const ManagePagesHome = () => {

    const [ homePagePreview, setHomePagePreview ] = useState({
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
    console.log("home")
    return (
        <div className=" row">
            <div className="section row card">
                <h5>Главный Заголовок</h5>
                <div className="col s6">
                        <div className="row">
                            <div className="input-field col s10">
                                <i className="bi bi-person-circle prefix"></i>
                                <input
                                    onChange={
                                        (e:any) => {
                                            console.log('huyak')
                                    }} 
                                    placeholder="" 
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
                                <textarea id="heroPageTitle" className="materialize-textarea"></textarea>
                                <label htmlFor="heroPageTitle">Подзаголовок</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="file-field  input-field col s10">
                                
                                <div className="btn">
                                    <span>File</span>
                                    <input type="file" />
                                </div>
                                <div className="file-path-wrapper">
                                    <input className="file-path validate" type="text" placeholder="Изображение" />
                                </div>
                            </div>
                        </div>
                </div>
                <div className="col s6">
                                    <PageHero headingTitle={homePagePreview.headingTitle} afterTitle={homePagePreview.afterTitle} heroImage={homePagePreview.heroImage}/>
                </div>
                
            
            </div>      
        </div>  
    )
}