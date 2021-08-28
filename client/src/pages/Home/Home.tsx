import React from 'react'
import { Divider } from '../../common/Divider'
import { Counters } from './Counter'
import { Features } from './Features'
import { Media } from './Media'
import { PageHero } from './PageHero'



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