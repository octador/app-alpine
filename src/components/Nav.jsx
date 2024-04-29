import React from 'react'
import { Link } from 'react-router-dom'
// import logoAlpine from '../asset/configurateur/logo/pngwing.com_1.png'
import logoAlpineBlanc from '../asset/sources-homepage/logo/logo-white.png';


function Nav() {
  return <nav className="navbar fixed-top bg-slate-900 ">
    <div className="container-fluid">
      <Link className="navbar-brand" href="#" ><img src={logoAlpineBlanc} alt=""style={{ height : '16px'}} /></Link>
      <button className="navbar-toggler bg-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon "></span>
      </button>
      <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Alpine</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='http://localhost:3000/'>Home</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#configurator">Configurator</a>
            </li>
          
          </ul>
        
        </div>
      </div>
    </div>
  </nav>
}

export default Nav