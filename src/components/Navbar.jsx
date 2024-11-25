import React from 'react'

function Navbar({setCategory}) {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><span className='badge  bg-dark fs-5'>NewsMalayalam</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <a className="nav-link" onClick={()=>setCategory("technology")}>Technology</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={()=>setCategory("buisness")}>Buisness</a>
                            </li>                            <li className="nav-item">
                                <a className="nav-link" onClick={()=>setCategory("health")}>Health</a>
                            </li>                            <li className="nav-item">
                                <a className="nav-link"onClick={()=>setCategory("sports")}>Sports</a>
                            </li>                            <li className="nav-item">
                                <a className="nav-link" onClick={()=>setCategory("")}>Science</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={()=>setCategory("entertainment")}>Entertainmen</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar