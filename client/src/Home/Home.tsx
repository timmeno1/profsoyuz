import React from 'react'
import { Counters } from './Counter'
import { Features } from './Features'
import { Media } from './Media'
import { PageHero } from './PageHero'

export const Home = () => {
    
    console.log("have called")

    //M.toast({html: 'I am a toast!'})

    return (
        <div>
            <PageHero />
            <Features />
            <Counters />
            <Media />
        </div>
    )
}