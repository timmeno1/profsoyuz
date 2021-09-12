import React from 'react'

export const ManagePagesAbout = () => {
    
    console.log("about")
    return (
        <div className=" row">
            <div className=" row"><h5>Главный Заголовок</h5></div>

            <div className="col s11 m11 l5 ">
                <div className="row">
                    <div className="input-field col s10">
                        <i className="bi bi-person-circle prefix"></i>
                        <input
                            onChange={
                                (e: any) => {
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
                        <textarea 
                            id="heroPageTitle" 
                            className="materialize-textarea" 
                            onChange={(e:any)=>{
                                console.log('huyak')
                        }}/>
                        <label htmlFor="heroPageTitle">Подзаголовок</label>
                    </div>
                </div>
                <div className="row">
                    <div className="file-field  input-field col s10">

                        <div className="btn">
                            <span>File</span>
                            <input type="file"  onChange={()=>{
                                    console.log('huyak')
                            }}/>
                        </div>
                        <div className="file-path-wrapper">
                            <input className="file-path validate" type="text" placeholder="Изображение" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col s11 m11 l5 offset-l1 overlay-hidden">
                <div className="overlay-scroll materialboxed">
                    about
                    </div>
            </div>
                    
        </div>  
    )
}