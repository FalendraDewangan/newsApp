import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar(props) {

    const handleOnClick = () => {
        let country = document.getElementById('country').value
        let ln = document.getElementById('language').value
        let sb = document.getElementById('sort').value
        let q = document.getElementById('q').value

        props.setProps(q,country, ln, sb)
    }

    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg " style={{ "backgroundColor": "#e3f2fd" }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><b>News</b></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">General</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/technology">Technology</Link>
                            </li>

                        </ul>

                        <select name="country" id='country' >
                            <option value="in" onClick={handleOnClick}>Country</option>
                            <option value="in" onClick={handleOnClick}>India</option>
                            <option value="us" onClick={handleOnClick}>America</option>
                            <option value="au" onClick={handleOnClick}>Australia</option>
                            <option value="ca" onClick={handleOnClick}>Canada</option>
                            <option value="eg" onClick={handleOnClick}>Egypt</option>
                        </select>
                        <select name="language" id='language' >
                            <option value="en" onClick={handleOnClick}>Language</option>
                            <option value="en" onClick={handleOnClick}>English</option>
                            <option value="ar" onClick={handleOnClick}>Ar</option>
                            <option value="pt" onClick={handleOnClick}>Pt</option>
                        </select>
                        <select name="sort" id='sort' >
                            <option value="popularity" onClick={handleOnClick}>Sort By</option>
                            <option value="Popularity" onClick={handleOnClick}>Popularity</option>
                            <option value="publishedAt" onClick={handleOnClick}>Published At</option>
                        </select>
                        <input  type="text" placeholder="Search" id='q' onChange={handleOnClick}/>

                    </div>
                </div>
            </nav>
        </>
    )
}