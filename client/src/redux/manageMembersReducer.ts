// reducer for managing Members
// reducer for public view of pages Home, About and Join

const initialState = {
    homePage: {},
    aboutPage: {}, 
    joinPage: {
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
}

export const homePageReducer = (state = initialState, action:any) => {
    switch (action.type) {
        default: return state
    }
}

export const aboutPageReducer = (state = initialState, action:any) => {
    switch (action.type) {
        default: return state
    }
}

export const joinPageReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case "SUBMIT_DATA": 
            return {
                ...state, 
                joinPage: { 
                    members: [...state.joinPage.members, action.newMember ], 
                }}
        default: return state
    }
}
