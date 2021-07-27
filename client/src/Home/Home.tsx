import React from 'react'
import { Devider } from '../common/Devider'
import { Counters } from './Counter'
import { Features } from './Features'
import { Media } from './Media'
import { PageHero } from './PageHero'


let obj = {
    PageHero: {
        heroText: "Профсоюз",
        heroImg: ""
    },
    Features: [
        {
            icon: "bi-calendar3",
            textHeader: "textHeader",
            text: "tralalala"
        },
        {
            icon: "bi-shield-check",
            textHeader: "textHeader",
            text: "tralalala"
        },
        {
            icon: "bi-watch",
            textHeader: "textHeader",
            text: "tralalala"
        }
    ],
    Counters: {
        members: 357,
        solvedProblems: 539
    },
    Media: {
        photos: [],
        video: ""
    }
}

export const Home = () => {
    
    console.log("have called")

    //M.toast({html: 'I am a toast!'})


    return (
        <div>
            <PageHero />
            <Features features={obj.Features}/>
            <Devider />
            <Counters />
            <Devider />
            <Media />
        </div>
    )
}