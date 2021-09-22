import React, {useEffect} from 'react'
import M from 'materialize-css'


type MediaType = {
    media: Array<string>,
    video?: string
}

export const Media = (props:MediaType) => {

    useEffect(() => {
        M.AutoInit();
      });

    return (
        <div className={"section container"}>
            <div className={"mediaBlock row"}>
                {
                    props.media.map( (media, i) => {
                        return (
                            <div key={i} className={"col s12 m6 l4 mediaItem"}>
                                <img className={"materialboxed responsive-img"} src={media} alt={"Media 1"} />
                            </div>
                        )
                    })
                }       
            </div>
            {props.video ? <div className="video-container"><iframe title="kutak" src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0" frameBorder="0"></iframe></div> : <div className="video-container"><iframe title="kutak2"  src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0" frameBorder="0"></iframe></div>}
        </div>
    )
}