import React from 'react'
import { useSelector } from 'react-redux'
import RecentContactCard from './RecentContactCard'

function Recent() {
    const allContacts = useSelector(state => state.allContacts)
    const recentCalls = useSelector(state => state.recentCalls)

    let arr = []
    for(let i=recentCalls.length-1;i>=0;i--)
    {
        let currId = recentCalls[i].id
        let currContact = {}
        allContacts.forEach(contact => {
            if(contact.id === currId) {
                currContact = contact
            }
        })
        arr.push(<RecentContactCard name={currContact.name} mobile={currContact.mobile} isFav={currContact.isFav} id={currContact.id} timestamp={recentCalls[i].time}/>)
    }
    return (
        <div>
            {
                arr.map(e => e)
            }
        </div>
    )
}

export default Recent
