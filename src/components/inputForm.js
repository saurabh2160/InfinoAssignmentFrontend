import React, { useContext, useState } from 'react'
import Context from '../context/context'

const InputForm = () => {
    const { valueUpdate } = useContext(Context)
    const [userinput, setuserinput] = useState({ link: '', number: 0 })

    const onsubmit = (e) => {
        e.preventDefault()
        valueUpdate(userinput.link, userinput.number)
    }
    const onchange = (e) => {
        setuserinput({ ...userinput, [e.target.name]: e.target.value })
    }
    // console.log(userinput);
    return (
        <div className='container w-50 h-100 mt-5 border shadow'>
            <form className='container w-100 p-5' onSubmit={onsubmit}>
                <div className="mb-3">
                    <label forhtml="link" className="form-label">Sheet-link</label>
                    <input type="text" className="form-control mb-4" id="link" name='link' aria-describedby="link" required minLength={5} onChange={onchange} />
                </div>
                <div className="mb-3">
                    <label forhtml="number" className="form-label">Number</label>
                    <input type="text" className="form-control mb-4" id="number" name='number' aria-describedby="number" required onChange={onchange} />
                </div>
                <button type="submit" className="btn btn-primary shadow-lg">Submit</button>
            </form>
        </div>
    )
}

export default InputForm
