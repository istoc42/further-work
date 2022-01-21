import React, { useState } from 'react'
import jsonData from '../data.json'
import Request from './Request'
import { v4 as uuidv4} from 'uuid'

function RequestList() {
    const [requestData, setRequestData] = useState(jsonData)

    const tableRows = requestData.map((request) => {
        return (
            <tr key={uuidv4()}>
                <td>{request.cassette}</td>
                <td>{request.block}</td>
                <td>{request.surname}</td>
                <td>{request.tests}</td>
                <td>{request.spares}</td>
                <td>{request.comments}</td>
                <td>{request.pathologist}</td>
                <td>{request.timestamp}</td>
                <td><input type="checkbox" name="printed" id="printed" /></td>
            </tr>
        )
    })

    const addRows = (data) => {
        const updatedRequestData = [...requestData]
        updatedRequestData.push(data)
        setRequestData(updatedRequestData)
    }

    return (
        <div>
            <Request func={addRows} />
            <div className="list-container">
                <div>
                    <hr></hr>
                    <h3>Current Requests</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Cassette ID</th>
                                <th>Block ID</th>
                                <th>Surname</th>
                                <th>Tests Required</th>
                                <th>Spares on Case</th>
                                <th>Comments</th>
                                <th>Pathologist</th>
                                <th>Date and Time</th>
                                <th>Printed?</th>
                            </tr>
                        </thead>
                        <tbody>{tableRows}</tbody>
                    </table>
                    <hr></hr>
                </div>
        
            </div>
    </div>
    )
}

export default RequestList
