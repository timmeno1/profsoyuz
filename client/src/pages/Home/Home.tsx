import React from 'react'
import { Divider } from '../../common/Divider'
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
    

    // use it for render counter when it would be seen
    //useEffect(() => {
    //    window.addEventListener('scroll', () => {
    //        if(window.pageYOffset >= 200) {
    //            console.log("pageYoffset works")
    //        }
    //    });
    //})


    return (
        <div>
            <PageHero />
            <Features features={obj.Features}/>
            <Divider />
            <Counters />
            <Divider />
            <Media />
        </div>
    )
}