import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar bg-dark shadow-lg">
                <div className="container-fluid">
                    <Link to='/'>
                        <span className="navbar-brand mb-0 h1 text-white bg-dark ps-2">Infino</span>
                    </Link>
                </div>
            </nav >
        </div >
    )
}

export default Navbar
