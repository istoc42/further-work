import React, { useState } from 'react'



export default function Request(props) {
    const [submitting, setSubmitting] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitting(true)

        setTimeout(() => {
            setSubmitting(false)
      }, 3000)}

    const [cassette, setCassette] = useState('')
    const [block, setBlock] = useState('')
    const [surname, setSurname] = useState('')
    const [tests, setTests] = useState('')
    const [spares, setSpares] = useState('')
    const [comments, setComments] = useState('')
    const [pathologist, setPathologist] = useState('')

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

    const clearState = () => {
        setCassette('')
        setBlock('')
        setSurname('')
        setTests('')
        setSpares('')
        setComments('')
        setPathologist('')
    }

    const transferValue = (event) => {
        event.preventDefault();
        const val = {
          cassette,
          block,
          surname,
          tests,
          spares,
          comments,
          pathologist
        };
        props.func(val)
        clearState()

    }
    return (
        <div>    
            <form className="form-container" onSubmit={handleSubmit}>
                <h3>New Histology Request</h3>
            
                    <div>
                        <label htmlFor="cassette">Cassette ID: </label>
                        <input name="cassette" type="text" id="cassette" placeholder="(Scan slide barcode)"   required autoFocus onChange={changeCassette}/>
                    </div>
            
                    <div>
                        <label htmlFor="block">Block ID: </label>
                        <input name="block" type="text" id="block" placeholder="(If multiple blocks)"  onChange={changeBlock}/>
                    </div>
            
                    <div>
                        <label htmlFor="surname">Surname: </label>
                        <input name="surname" type="text" id="surname" required onChange={changeSurname}/>
                    </div>
            
                    <div>
                        <label htmlFor="tests">Tests required: </label>
                        <input name="tests" type="text" id="tests" required onChange={changeTests}/>
                    </div>
            
                    <div>
                        <label htmlFor="spares">Spares on case?</label>
                        <select name="spares" className="spares" onChange={changeSpares}>
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="comments">Comments: </label>
                        <input name="comments" type="text" id="comments"  onChange={changeComments}/>
                    </div>
                    <div>
                        <label htmlFor="pathologist">Pathologist: </label>
                        <select name="pathologist" className="pathologist" id="pathologist"  required onChange={changePathologist}>
                            <option value="null"> </option>
                            <option value="path-1">Pathologist 1</option>
                            <option value="path-2">Pathologist 2</option>
                            <option value="path-3">Pathologist 3</option>
                        </select>
            
                    </div>
            
                    <div className="btns">
                        <button type="submit" className="submit" onClick={transferValue} >Submit</button>
                        <button className="cancel">Cancel</button>
                    </div>

                    {submitting &&
                        <div className='submitting'>
                            Submitting form...
                        </div>
                    }
            </form>
        </div>
    )
}
