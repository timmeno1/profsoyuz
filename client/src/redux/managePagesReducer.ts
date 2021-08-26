// reducer for managing Home, About and Join pages

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

export const manageHomePageReducer = (state = initialState, action:any) => {
    switch (action.type) {
        default: return state
    }
}

export const manageAboutPageReducer = (state = initialState, action:any) => {
    switch (action.type) {
        default: return state
    }
}

export const manageJoinPageReducer = (state = initialState, action:any) => {
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
