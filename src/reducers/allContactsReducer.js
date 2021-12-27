export function allContactsReducer(state = [
    {
        id: 0,
        mobile: "9999999999",
        name: "Virat Kohli",
        birthday: "25/05/1990",
        email: "vkohli@gmail.com",
        isFav: false
    },
    {
        id: 1,
        mobile: "9090909090",
        name: "Rohit Sharma",
        birthday: "27/07/1987",
        email: "rsohli@gmail.com",
        isFav: false
    },
    {
        id: 2,
        mobile: "9696969696",
        name: "Sachin Tendulkar",
        birthday: "30/10/1989",
        email: "st@yahoo.in",
        isFav: false
    }
],action) {
    switch(action.type) {
        case 'NEW_CONTACT' :
          return [...state, {...action.payload, isFav:false, id: (state? state[state.length-1].id+1:0)}]
        case 'TOOGLE_FAV' :
            let copyState = [...state]
            state.forEach((element, i) => {
                if(action.payload === element.id) {
                    copyState[i].isFav = !state[i].isFav
                }
            })
            return copyState
        default:
           return state

    }
}