import React from 'react'

const createLink = (text:string) => {
    let link, newText

    if (text.search(/https?:\/\//)) {
        const urlRegex = /(https?:\/\/[^ ]*)/
        let result = text.match(urlRegex)
        if(result) {
            newText = text.replace(/(https?:\/\/[^ ]*)/, "")
            link = React.createElement(
                'a', 
                {'href': result[0], 'target':'_blank', 'referer': 'no-referer'},  
                result[0].replace(/(https?:\/\/)/, "").replace(/(\/[^ ]*)/, ""))
            return {link: link, text: newText}
        }
    }
    return null
}

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
                    const linkExist = createLink(feature.text)
                    return (

                        <div key={i} className="col s12 m4">
                            <div className="icon-block">
                                <h2 className="center brown-text "><i className={`bi ${feature.icon}`}></i></h2>
                                <h5 className="center brake-word">{feature.textHeader}</h5>

                                <p className="light brake-word">{ linkExist ? linkExist.text : feature.text} {linkExist? linkExist.link : null}  </p>
                            </div>
                        </div>
                    )
                })
            }
        </div>

    </div>
    )
}