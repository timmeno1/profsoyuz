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
    heading: "О нас",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;"
}

export type MemberType = {
    id: string, 
    name: string, 
    email: string, 
    birthDate: string,  
    homeAddress: string, 
    phoneNumber: string, 
    workPlace: string,
    beforeWorkPlace: string
}

const initialJoinPageState = {
        members: [
            {
                id: "1", 
                name: "initial state", 
                email: "asd@qwe.123",
                birthDate: "16.09.91", 
                homeAddress: "26, 2th Avenue st. Colombo", 
                phoneNumber: "123123123123", 
                workPlace: "workplace",
                beforeWorkPlace: "beforeWorkPlace"
            }
        ]
}

const pageFooterInitialState = {
    heading: "Footer Content",
    infoText: "You can use rows and columns here to organize your footer content.",
    socialHeading: "Обратная связь",
    social: {
      facebook: {
        link: "#!",
        text: "Facebook"
      },
      telegram: {
        link: "#!",
        text: "Telegram"
      },
      whatsapp: {
        link: "#!",
        text: "Whatsapp"
      },
      kakao: {
        link: "#!",
        text: "Kakao"
      },
    },
    copyright: "2021 Copyright Text"
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

export const pageFooter = (state = pageFooterInitialState, action:any) => {
    switch (action.type) {
        default: return state
    }
}

export const joinPageReducer = (state = initialJoinPageState, action:any) => {
    switch (action.type) {
        case "SUBMIT_DATA": 
            action.newMember.id = "123123" // adding new id, maybe on backend
            return {
                ...state, 
                members: [...state.members, action.newMember ] 
            }
        default: return state
    }
}



export const submitJoinData = (newMember:MemberType) => {
    return {
        type: "SUBMIT_DATA",
        newMember: newMember
    }
}