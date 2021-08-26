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

export const Home = (props:any) => {

    return (
        <div>
            <PageHero 
                headingTitle={props.homePage.headingTitle} 
                afterTitle={props.homePage.afterTitle} 
                heroImage={props.homePage.heroImage} 
                />
            <Features features={props.homePage.features}/>
            <Divider />
            <Counters counters={props.homePage.counters}/>
            <Divider />
            <Media media={props.homePage.media}/>
        </div>
    )
}