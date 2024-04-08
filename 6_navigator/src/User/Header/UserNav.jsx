import React from 'react'
import { Link } from 'react-router-dom'
import Data from './NavData'

const UserNav = () => {
  
    
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">User</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                        {
                            Data.map((val,ind) => {
                                return (
                                    <li class="nav-item">
                                        <Link to={`${val.link}`} class="nav-link active" aria-current="page">{val.title}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
  )
}

export default UserNav
