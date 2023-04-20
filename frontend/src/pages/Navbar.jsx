import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='navbar-div'>
            <div class="d-flex bd-highlight">
                <div class="p-2 w-100 bd-highlight">
                    <div className="anitrack-logo-div">
                        <Link to='/'>
                            <h1 className='anitrack-logo-name'>ANITRACK</h1>
                        </Link>
                    </div>
                </div>

                <div class="p-2 flex-shrink-1 bd-highlight">
                    <div className='navbar-right'>
                        <h1 className='navbar-about'>
                            <button>
                                <Link to='/about' className='navbar-about zoom' style={{ textDecoration: "none" }}>
                                    About
                                </Link>
                            </button>
                        </h1>
                        <div className='navbar-img-div'>
                            <img src='src\assets\pngfind.com-person-icon-png-532960.png' className='navbar-profile-img'></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
