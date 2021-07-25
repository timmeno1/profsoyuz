import React from 'react'
import AnimatedNumber from "react-animated-numbers"

export const Counters = () => {



    return (
        <div className={"countersBlock"} >
            <div className={"membersCounter"} >
                <span>Количество участников: </span>
                <AnimatedNumber
                    fontStyle={{ fontSize: 40 }}
                    animateToNumber={376}
                    config={{ tension: 89, friction: 40 }}
                    animationType={"calm"}
                />
            </div>
            <div className={"solvedCounter"} >
                <span>Количество решенных проблем: </span>
                <AnimatedNumber
                    fontStyle={{ fontSize: 40 }}
                    animateToNumber={531}
                    config={{ tension: 89, friction: 40 }}
                    animationType={"calm"}
                />
            </div>
        </div>
    )
}