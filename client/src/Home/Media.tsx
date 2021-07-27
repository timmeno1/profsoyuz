import React from 'react'

export const Media = () => {

    document.addEventListener('DOMContentLoaded', ()=>{

        var elems = document.querySelectorAll('.materialboxed');
        M.Materialbox.init(elems);
    })

    return (
        <div className={"section container"}>
            <div className={"mediaBlock row"}>
                <div className={"col s12 m6 l4 mediaItem"}>
                    <img className={"materialboxed responsive-img"} src={"https://loremflickr.com/800/640"} alt={"Media 1"} />
                </div>
                <div className={"col s12 m6 l4 mediaItem"}>
                    <img className={"materialboxed responsive-img"} src={"https://loremflickr.com/800/640"} alt={"Media 1"} />
                </div>
                <div className={"col s12 m6 l4 mediaItem"}>
                    <img className={"materialboxed responsive-img"} src={"https://loremflickr.com/800/640"} alt={"Media 1"} />
                </div>
                <div className={"col s12 m6 l4 mediaItem"}>
                    <img className={"materialboxed responsive-img"} src={"https://loremflickr.com/800/640"} alt={"Media 1"} />
                </div>
                <div className={"col s12 m6 l4 mediaItem"}>
                    <img className={"materialboxed responsive-img"} src={"https://loremflickr.com/800/640"} alt={"Media 1"} />
                </div>
                <div className={"col s12 m6 l4 mediaItem"}>
                    <img className={"materialboxed responsive-img"} src={"https://loremflickr.com/800/640"} alt={"Media 1"} />
                </div>
            </div>
        </div>
    )
}