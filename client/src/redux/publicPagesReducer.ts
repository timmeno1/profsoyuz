// reducer for public view of pages Home, About and Join

const initialHomePageState = {
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
}

const initialAboutPageState = {
    x: "abc"
}

const initialJoinPageState = {
        members: [
            {
                id: "", 
                name: "", 
                email: "",
                birthDate: "", 
                homeAddress: "", 
                phoneNumber: "", 
                workPlace: "",
                beforeWorkPlace: ""
            }
        ]
}


export const homePageReducer = (state = initialHomePageState, action:any) => {
    switch (action.type) {
        default: return state
    }
}

export const aboutPageReducer = (state = initialAboutPageState, action:any) => {
    switch (action.type) {
        default: return state
    }
}

export const joinPageReducer = (state = initialJoinPageState, action:any) => {
    switch (action.type) {
        case "SUBMIT_DATA": 
            return {
                ...state, 
                joinPage: { 
                    members: [...state.members, action.newMember ], 
                }}
        default: return state
    }
}
