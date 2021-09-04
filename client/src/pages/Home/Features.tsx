import React from 'react'

type FeaturesType = {
    icon: string
    textHeader: string
    text: string
}
type FeaturesPropsType = {
    features : Array<FeaturesType>
}

export const Features = (props:FeaturesPropsType) => {
    
    return (
        <div className="section container">

        <div className="row">
            {
                props.features.map((feature, i) => {
                    return (

                        <div key={i} className="col s12 m4">
                            <div className="icon-block">
                                <h2 className="center brown-text"><i className={`bi ${feature.icon}`}></i></h2>
                                <h5 className="center">{feature.textHeader}</h5>

                                <p className="light">{feature.text}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>

    </div>
    )
}