import React, {useEffect} from 'react'
import M from 'materialize-css'


type MediaType = {
    media: Array<string>
}

export const Media = (props:MediaType) => {

    useEffect(() => {
        M.AutoInit();
      });

    return (
        <div className={"section container"}>
            <div className={"mediaBlock row"}>
                {
                    props.media.map( media => {
                        return (
                            <div className={"col s12 m6 l4 mediaItem"}>
                                <img className={"materialboxed responsive-img"} src={media} alt={"Media 1"} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}