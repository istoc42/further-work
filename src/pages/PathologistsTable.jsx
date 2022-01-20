import React, { useState } from 'react'
import pathData from '../pathdata.json'
import { v4 as uuidv4} from 'uuid'
import AddPathologist from '../components/AddPathologist'

function PathologistsTable(props) {
    const [pathologistData, setPathologistData] = useState(pathData)

    

    const pathTableRows = pathologistData.map((pathologist) => {
        return (
            <tr key={uuidv4()}>
                <td>{pathologist.id}</td>
                <td>{pathologist.name}</td>
            </tr>
        )
    })

    const addPathRows = (data) => {
        const updatedPathologistData = [...pathologistData]
        updatedPathologistData.push(data)
        setPathologistData(updatedPathologistData)
    }


    return (
        <div className="path-table">
            <h1>Pathologist table</h1>

            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Pathologist Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pathTableRows}
                    </tbody>
                </table>
            </div>

        <AddPathologist func={addPathRows} />
            
        </div>
    )
}

export default PathologistsTable
