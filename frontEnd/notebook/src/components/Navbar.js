import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    let history = useNavigate();
    const handleClick = () => {
        localStorage.removeItem('token');
        history('/login');
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="#">Navbar</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/about">About <span className="sr-only">(current)</span></Link>
                        </li>

                    </ul>

                    {!localStorage.getItem('token') ? <form className="d-flex">
                        <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                        <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
                    </form> : <button className="btn btn-primary" onClick={handleClick}>Logout</button>}
                </div>
            </nav >
        </>
    )
}

export default Navbar