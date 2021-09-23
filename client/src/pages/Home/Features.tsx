import React from 'react'
//@ts- '--downlevelIteration'

const createLink = (text:string) => {
    let link, textPart, textRest, pointer = text.search(/https?:\/\//)
    
    

    if (pointer) {
        const urlRegex = /(https?:\/\/[^ ]*)/g
        let result = text.match(urlRegex)
        if(result) {

            textPart = text.replace(/(https?:\/\/[^ ]*)/, "")
            textRest = textPart.slice(pointer, textPart.length)
            textPart = textPart.slice(0, pointer)
            link = React.createElement(
                'a', 
                {'href': result[0], 'target':'_blank', 'referer': 'no-referer'},  
                result[0].replace(/(https?:\/\/)/, "").replace(/(\/[^ ]*)/, ""))

            return {link: link, textPart: textPart, textRest:textRest }
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

                                <p className="light brake-word">
                                    { linkExist ? linkExist.textPart : feature.text} 
                                    {linkExist? linkExist.link : null} 
                                    { linkExist ? linkExist.textRest : null} 
                                </p>
                            </div>
                        </div>
                    )
                })
            }
        </div>

    </div>
    )
}