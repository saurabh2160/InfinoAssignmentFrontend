import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Context from '../context/context'

const OutputTable = () => {
    //this will get document id from path params
    const { id } = useParams()
    const { data, getdocument } = useContext(Context)

    useEffect(() => {
        getdocument(id)
        // eslint-disable-next-line
    }, [])
    const { oldvalues, newvalues } = data
    return (
        <div className='container w-50 h-100 mt-5 border shadow '>
            <div className='container w-100 p-3'>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className='text-center'>Old-values</th>
                            <th className='text-center'>Updated-Values</th>
                        </tr>
                    </thead>
                    <tbody>
                        {oldvalues.map((x, i) => {
                            return <tr key={i}>
                                <td className='text-center'>{x}</td>
                                <td className='text-center'>{newvalues[i]}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default OutputTable
