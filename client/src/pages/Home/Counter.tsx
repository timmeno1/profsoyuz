import AnimatedNumber from "react-animated-numbers"

type CountersType = {
    counters: {
        members: number,
        solvedProblems: number
    }
}


export const Counters = (props:CountersType) => {
    


    return (
        <div className={"countersBlock row container"} >
            <div className={"membersCounter col s12 m6"} >
                <div className={"counterLabel"}>Количество участников: </div>
                
                <AnimatedNumber
                    fontStyle={{ fontSize: 32 }}
                    animateToNumber={props.counters.members}
                    config={{ tension: 89, friction: 40 }}
                    animationType={"calm"}
                />
            </div>
            <div className={"solvedCounter col s12 m6"} >
                <div className={"counterLabel"}>Количество решенных проблем: </div>
                <AnimatedNumber
                    fontStyle={{ fontSize: 32 }}
                    animateToNumber={props.counters.solvedProblems}
                    config={{ tension: 89, friction: 40 }}
                    animationType={"calm"}
                />
            </div>
        </div>
    )
}