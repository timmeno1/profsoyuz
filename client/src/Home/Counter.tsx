import React from 'react'
import AnimatedNumber from "react-animated-numbers"

export const Counters = () => {



    return (
        <div className={"countersBlock row container"} >
            <div className={"membersCounter col s12 m6"} >
                <div className={"counterLabel"}>Количество участников: </div>
                <AnimatedNumber
                    fontStyle={{ fontSize: 32 }}
                    animateToNumber={376}
                    config={{ tension: 89, friction: 40 }}
                    animationType={"calm"}
                />
            </div>
            <div className={"solvedCounter col s12 m6"} >
                <div className={"counterLabel"}>Количество решенных проблем: </div>
                <AnimatedNumber
                    fontStyle={{ fontSize: 32 }}
                    animateToNumber={531}
                    config={{ tension: 89, friction: 40 }}
                    animationType={"calm"}
                />
            </div>
        </div>
    )
}