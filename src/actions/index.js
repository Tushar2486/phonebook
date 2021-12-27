export function new_contact(contact) {
    return {
        type: 'NEW_CONTACT',
        payload: contact
    }
}

export function toggle_fav(id) {
    return {
        type: 'TOOGLE_FAV',
        payload: id
    }
}

export function changeName(name) {
    return {
        type: 'CHANGE_NAME',
        payload: name
    }
}

export function changeMobile(mobile) {
    return {
        type: 'CHANGE_MOBILE',
        payload: mobile
    }
}

export function changeEmail(email) {
    return {
        type: 'CHANGE_EMAIL',
        payload: email
    }
}

export function changeBirthday(bday) {
    return {
        type: 'CHANGE_BIRTHDAY',
        payload: bday
    }
}

export function add_recent(obj) {
    return {
        type: 'ADD_RECENT',
        payload: obj
    }
}