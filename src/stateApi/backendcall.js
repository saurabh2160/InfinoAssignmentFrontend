import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Context from '../context/context'

const BackendState = (props) => {
    const nav = useNavigate()
    const [data, setdata] = useState({ oldvalues: [], newvalues: [] })

    //send data to backend api
    const valueUpdate = async (link, number) => {
        const response = await fetch("http://localhost:4000/sheetupdate", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "link": link,
                "number": number
            })
        })
        const json = await response.json()
        console.log(json);
        if (json.status === true) {

            nav(`updatedvalues/${json.data._id}`)

        } else {
            return alert(json.msg)
        }

    }

    //fetching data from backend
    const getdocument = async (id) => {
        const response = await fetch(`http://localhost:4000/getdocument/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const json = await response.json()

        if (json.status === true) {
            setdata({ oldvalues: json.data.sheetData.oldValues, newvalues: json.data.sheetData.newValues })
        } else {
            return alert(json.msg)
        }

    }
    return (
        <Context.Provider value={{ valueUpdate, getdocument, data }}>
            {props.children}
        </Context.Provider>
    )
}

export default BackendState
