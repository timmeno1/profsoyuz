import React from 'react'
import { connect } from 'react-redux'

type AboutUsPropsType = {
    aboutPage: {
        heading: string,
        text: string
    }
}


const AboutUs = (props: AboutUsPropsType) => {
    return (
        <div className="container">
            <div className="section">

            <div className="row">
                <div className="col s12 center">
                <h3><i className="mdi-content-send brown-text"></i></h3>
                <h4>{props.aboutPage.heading}</h4>
                <p className="left-align light">{props.aboutPage.text}</p>
                </div>
            </div>

            </div>
        </div>    
    )
}

type mstpType = (state:any) => AboutUsPropsType

const mapStateToProps:mstpType = (state:any) => ({aboutPage: state.aboutPage})

export const AboutUsContainer = connect(mapStateToProps, {})(AboutUs)