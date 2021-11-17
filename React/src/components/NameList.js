import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'abdul',
            age: 30,
            skill: 'react'
        },
        {
            id: 1,
            name: 'ansari',
            age: 30,
            skill: 'flutter'
        },
        {
            id: 1,
            name: 'tanveer',
            age: 30,
            skill: 'java'
        },
        {
            id: 1,
            name: 'pran',
            age: 30,
            skill: 'spring'
        }
    ]



    /* const names = ['abdul', 'ansari', 'tanveer', 'dxc','react']
    const namesList = names.map(name => <h2>{name}</h2>) */
    const personList = persons.map(person => (<Person human = {person}></Person>))

    return (
        <div>{personList}</div>
    )
}

export default NameList
