import React, { useState } from 'react'
import jsonData from '../data.json'
import Request from './Request'

function RequestList() {
    const [requestData, setRequestData] = useState(jsonData)

    const tableRows = requestData.map((request) => {
        return (
            <tr>
                <td>{request.cassette}</td>
                <td>{request.block}</td>
                <td>{request.surname}</td>
                <td>{request.tests}</td>
                <td>{request.spares}</td>
                <td>{request.comments}</td>
                <td>{request.pathologist}</td>
            </tr>
        )
    })

    const addRows = (data) => {
        const updatedRequestData = [...requestData]
        updatedRequestData.push(data)
        setRequestData(updatedRequestData)
    }

    return (
        <div className="list-container">
            <Request func={addRows} />
            <div>
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
                            <th>Complete?</th>
                        </tr>
                    </thead>
                    <tbody>{tableRows}</tbody>
                </table>
            </div>
            
        </div>
    )
}

export default RequestList
