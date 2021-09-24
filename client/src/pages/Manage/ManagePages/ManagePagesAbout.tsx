import React, {useEffect, useRef, useState} from 'react'
import { AboutUs } from '../../About/About'

export const ManagePagesAbout = (props:any) => {

    const aboutPageFileRef = useRef<HTMLInputElement>(null)

    const textArea = document.getElementById('#aboutPageText')
    
    const [aboutPagePreview, setAboutPagePreview] = useState({
        img: "https://loremflickr.com/400/300",
        heading: "О нас",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;"
    })


    useEffect(() => {

        if(textArea) {
            M.textareaAutoResize( textArea )
        }

        M.updateTextFields()
        return () => {
            
        }
    })
    
    console.log("about")
    return (
        <div className=" row">
                
                <div className="row custom-section">
                    <div className=" row"><h5>О нас</h5></div>

                        <div className="col s12 m12 l6 ">
                            <div className="row">
                                        <div className="input-field col s10">
                                            <i className="bi bi-person-circle prefix"></i>
                                            <input
                                                onChange={
                                                    (e: any) => {
                                                        //@ts-ignore
                                                        setAboutPagePreview({...aboutPagePreview, heading: e.currentTarget.value})
                                                    }}
                                                value={ aboutPagePreview.heading }
                                                id="aboutPageHeader"
                                                type="text"
                                                className="validate"
                                            />
                                            <label htmlFor="aboutPageHeader">Заголовок</label>
                                        </div>
                                    </div>
                            <div className="row">
                                        <div className="input-field col s10">
                                            <i className="bi bi-person-circle prefix"></i>
                                            <textarea 
                                                id="aboutPageText" 
                                                className="materialize-textarea" 
                                                value={ aboutPagePreview.text }
                                                onChange={(e:any)=>{
                                                    //@ts-ignore
                                                    setAboutPagePreview({...aboutPagePreview, text: e.currentTarget.value})
                                            }}/>
                                            <label htmlFor="aboutPageText">Текст</label>
                                        </div>
                                    </div>
                            <div className="row">
                                <div className="file-field  input-field col s10">

                                    <div className="btn">
                                        <span>File</span>
                                        <input type="file" ref={aboutPageFileRef} onChange={()=>{
                                            if(aboutPageFileRef && aboutPageFileRef.current && aboutPageFileRef.current.files){
                                                let fileLocalUrl = URL.createObjectURL(aboutPageFileRef.current.files[0])
                                                console.log(fileLocalUrl)
                                                setAboutPagePreview({...aboutPagePreview, img: fileLocalUrl })
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
                                <AboutUs aboutPage={{
                                    img:aboutPagePreview.img,
                                    text:aboutPagePreview.text,
                                    heading:aboutPagePreview.heading
                                }}
                                            
                                />
                            </div>
                        </div>
                        <button className="waves-effect waves-light btn" onClick={()=>{window.alert("изменения приняты хДД")}} >Применить изменения</button>
                    </div>
            </div>

    )
}