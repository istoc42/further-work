import React, { useState } from 'react'

export default function Request(props) {

    function handleEnter(e) {
        if(e.keyCode === 13) {
            const form = e.target.form;
            const index = Array.prototype.indexOf.call(form, e.target);
            form.elements[index + 1].focus()
            e.preventDefault()
        }
    }
    
    let date = new Date().toLocaleString()

    const [cassette, setCassette] = useState('')
    const [block, setBlock] = useState('')
    const [surname, setSurname] = useState('')
    const [tests, setTests] = useState('')
    const [spares, setSpares] = useState('')
    const [comments, setComments] = useState('')
    const [pathologist, setPathologist] = useState('')
    const [timestamp, setTimestamp] = useState(date)

    const changeCassette = (e) => {
        setCassette(e.target.value)
    }

    const changeBlock = (e) => {
        setBlock(e.target.value)
    }

    const changeSurname = (e) => {
        setSurname(e.target.value)
    }

    const changeTests = (e) => {
        setTests(e.target.value)
    }

    const changeSpares = (e) => {
        setSpares(e.target.value)
    }

    const changeComments = (e) => {
        setComments(e.target.value)
    }

    const changePathologist = (e) => {
        setPathologist(e.target.value)
    }

    
    const changeTimestamp = (e) => {
        setTimestamp(date)
    }

    const clearState = (e) => {
        setCassette('')
        setBlock('')
        setSurname('')
        setTests('')
        setSpares('')
        setComments('')
        setPathologist('')
    }

    const handleCancel = (e) => {
        clearState()
    }

    const transferValue = (e) => {
        e.preventDefault();
        changeTimestamp()
        const val = {
          cassette,
          block,
          surname,
          tests,
          spares,
          comments,
          pathologist,
          timestamp
        };
        props.func(val)
        handleCancel()

    }
    return (
        <div>    
            <form className="form-container" onSubmit={transferValue}>
                <h3>New Histology Request</h3>
            
                    <div>
                        <label htmlFor="cassette">Cassette ID: </label>
                        <input name="cassette" type="text" id="cassette" placeholder="(Scan slide barcode)" required maxLength="11" autoFocus autoComplete="off" onKeyDown={handleEnter} onChange={changeCassette}/>
                    </div>
            
                    <div>
                        <label htmlFor="block">Block ID: </label>
                        <input name="block" type="text" id="block" placeholder="(If multiple blocks)" autoComplete="off" onKeyDown={handleEnter} onChange={changeBlock}/>
                    </div>
            
                    <div>
                        <label htmlFor="surname">Surname: </label>
                        <input name="surname" type="text" id="surname" required autoComplete="off" onKeyDown={handleEnter} onChange={changeSurname}/>
                    </div>
            
                    <div>
                        <label htmlFor="tests">Tests required: </label>
                        <input name="tests" type="text" id="tests" required autoComplete="off" onKeyDown={handleEnter} onChange={changeTests}/>
                    </div>
            
                    <div>
                        <label htmlFor="spares">Spares on case?</label>
                        <select name="spares" className="spares" onChange={changeSpares} onKeyDown={handleEnter}>
                            <option value="null"> </option>
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="comments">Comments: </label>
                        <input name="comments" type="text" id="comments" autoComplete="off" onKeyDown={handleEnter} onChange={changeComments}/>
                    </div>
                    <div>
                        <label htmlFor="pathologist">Pathologist: </label>
                        <select name="pathologist" className="pathologist" id="pathologist" required onKeyDown={handleEnter} onChange={changePathologist}>
                            <option selected value=""> -- Select Pathologist -- </option>
                            <option value="Jon Oxley">Jon Oxley</option>
                            <option value="Mo Khan">Mo Khan</option>
                            <option value="Richard Daly">Richard Daly</option>
                        </select>
            
                    </div>
            
                    <div className="btns">
                        <button type="submit" className="submit" >Submit</button>
                        <button type='reset' className="cancel" onClick={handleCancel}>Clear</button>
                    </div>

                   
            </form>
        </div>
    )
}
