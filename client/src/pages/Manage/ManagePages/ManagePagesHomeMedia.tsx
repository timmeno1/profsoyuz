import React from 'react'
import { Media } from '../../Home/Media'


// TODO props types, make logic to add, delete and select media(photos and url) to the front page

export const ManagePagesHomeMedia = (props:any) => {

    return (
        <div className="custom-section">
                <div className=" row"><h5>Фото и видео</h5></div>
                <div className="row">
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
                                <Media media={props.homePagePreview.media} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )

}