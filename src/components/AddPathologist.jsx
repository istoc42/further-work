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

    const clearState = () => {
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

                <div className="path-btn-container">
                    <div>
                        
                        <button className="editBtn">Edit Pathologist</button>
                        <p style={{ color: 'orange'}}>Edit function not in place</p>
                        
                    </div>


                    <div>
                        <button className="removeBtn">Remove Pathologist</button>
                        <p style={{ color: 'red'}}>Remove function not in place</p>
                    </div>
                </div>
            </div>
        )

}