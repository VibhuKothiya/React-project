import React from 'react'
import { Link } from 'react-router-dom'
import img from '../img/Logo.jpg'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/logo.PNG?raw=true" style={{width:'60px'}}></img></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to='/' class="nav-link active" aria-current="page" >Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/About' class="nav-link" >About</Link>
                        </li> 
                        <li class="nav-item">
                            <Link to='/Contact' class="nav-link" >Contact</Link>
                        </li> 
                        <li class="nav-item">
                            <Link to='/Features' class="nav-link" >Features</Link>
                        </li>                                           
                        
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
