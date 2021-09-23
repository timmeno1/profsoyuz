import React, { useEffect, useState } from 'react'
import M from 'materialize-css'
import { ManagePagesHomeFeatures } from './ManagePagesHomeFeatures'
import { ManagePagesHomeHero } from './ManagePagesHomeHero'
import { ManagePagesHomeMedia } from './ManagePagesHomeMedia'


// TODO надо добавить 
export const ManagePagesHome = () => {


    const [homePagePreview, setHomePagePreview] = useState({
        headingTitle: "Профсоюз",
        afterTitle: "Защита прав на работе",
        heroImage: "https://loremflickr.com/1905/1080",
        features: [
            {
                textHeader: "Speeds up development",
                text: "We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.",
                icon: "bi-calendar3"
            },
            {
                textHeader: "User Experience Focused",
                text: "By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.",
                icon: "bi-shield-check"
            },
            {
                textHeader: "Easy to work with",
                text: "We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.",
                icon: "bi-watch"
            }

        ],
        counters: {
            members: 276,
            solvedProblems: 417
        },
        media: [
            "https://loremflickr.com/800/640",
            "https://loremflickr.com/800/640",
            "https://loremflickr.com/800/640",
            "https://loremflickr.com/800/640",
            "https://loremflickr.com/800/640",
            "https://loremflickr.com/800/640"
        ]
    })
    



    useEffect(() => {
    
        const materialBoxElements = document.querySelectorAll('.materialboxed')
        if(materialBoxElements) {
            const MaterialBoxes = M.Materialbox.init(materialBoxElements, {  })
            // used some proto stuff to prevent closing materialbox on scroll for parallax effect on PageHero
            if(MaterialBoxes.length) {
                let protoOfMaterialbox = Object.getPrototypeOf(MaterialBoxes[0])
                protoOfMaterialbox._handleWindowScroll = () => {return null}    
            }
        }


        const modals = document.querySelectorAll('.modal');
        M.Modal.init(modals, {preventScrolling:false});
    })

    console.log("home")
    return (
        <div className=" row">
            
            <ManagePagesHomeHero  homePagePreview={homePagePreview} setHomePagePreview={setHomePagePreview} />
            <ManagePagesHomeFeatures homePagePreview={homePagePreview} setHomePagePreview={setHomePagePreview} />
            <ManagePagesHomeMedia homePagePreview={homePagePreview} />
        
        </div>
    )
}