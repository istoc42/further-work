function Request() {
    return (
        <div>
            <div className="form-container">
                <h3>New Histology Request</h3>
            
                    <div>
                        <label htmlFor="cassette">Cassette ID: </label>
                        <input type="text" id="cassette" placeholder="(Scan slide barcode)" />
                    </div>
            
                    <div>
                        <label htmlFor="block">Block ID: </label>
                        <input type="text" id="block" placeholder="(If multiple blocks)" />
                    </div>
            
                    <div>
                        <label htmlFor="surname">Surname: </label>
                        <input type="text" id="surname" />
                    </div>
            
                    <div>
                        <label htmlFor="tests">Tests required: </label>
                        <input type="text" id="tests" />
                    </div>
            
                    <div>
                        <label htmlFor="spares">Spares on case?</label>
                        <input type="checkbox" id="spares-checkbox"/>
                    </div>
                    <div>
                        <label htmlFor="comments">Comments: </label>
                        <input type="text" id="comments" />
                    </div>
                    <div>
                        <label htmlFor="pathologist">Pathologist: </label>
                        <select className="pathologist" id="pathologist">
                            <option value="null"> </option>
                            <option value="path-1">Pathologist 1</option>
                            <option value="path-2">Pathologist 2</option>
                            <option value="path-3">Pathologist 3</option>
                        </select>
            
                    </div>
            
                    <div className="btns">
                        <button className="submit">Submit</button>
                        <button className="cancel">Cancel</button>
                    </div>
            </div>
        </div>
    )
}

export default Request
