import React, { useState } from 'react'

export default function Pathologist(props) {
    const [id, setId] = useState(4)
    const [name, setName] = useState('')

    const changeId = () => {
        setId(id + 1)
    }

    const changeName = (e) => {
        setName(e.target.value)
    }

    const clearState = (e) => {
        setName('')
    }

    const transferValue = (e) => {
        e.preventDefault();
        changeId()
        const val = {
            id,
            name
        }
        props.func(val)
        clearState('')
    }

        return(
            <div className="add-path-container">
                <label htmlFor="name">Pathologist Name: </label>
                <input type="text" className='new-path-input' onChange={changeName}></input>
                <button className="addBtn" onClick={transferValue}>Add Pathologist</button>
            </div>
        )

}