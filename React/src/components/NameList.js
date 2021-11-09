import React from 'react'

function NameList() {
    const names = ['sujnan','gowda']
    const nameLists = names.map(name=><h2>{name}</h2>)
    const person = [
        {
            id:1,
            name:'sujnan'
        },
        {
            id:2,
            name:'gowda'
        }
    ]
    const personList = person.map(p => <h5>Iam {p.name} with id as {p.id}</h5>)
    return (
        //<div>{nameLists}</div>
        <div>{personList}</div>
    )
}
export default NameList