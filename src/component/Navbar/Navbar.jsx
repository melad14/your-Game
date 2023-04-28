import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../images/logo.png";

export default function Navbar({ userData, logOut }) {

  return <>
    <nav className="navbar navbar-expand-lg navbar-bg-color shadow-lg py-3 ">
      <div className="container ">
        <Link className="navbar-brand text-white text-decoration-none" to="/">
          <img src={logo} className="navbar-logo" alt="" />
          <span className="logo-text">Game Over</span>
        </Link>
        <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
          <span className="navbar-toggler-icon text-white"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {userData?<ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="all"
                >
                  All
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-white"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Platforms
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="Platforms/pc">
                      pc
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="Platforms/browser">
                      browser
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-white"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sort-by
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="sort-by/release-date">
                      release date
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="sort-by/popularity">
                      popularity
                    </Link>
                  </li>
                  <li></li>
                  <li>
                    <Link className="dropdown-item" to="sort-by/alphbetical">
                      alphabetical
                    </Link>
                  </li>
                  <li></li>
                  <li>
                    <Link className="dropdown-item" to="sort-by/relevance">
                      relevance
                    </Link>
                  </li>
                </ul>
              </li>
              
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle text-white" role="button" data-bs-toggle="dropdown"aria-expanded="false">
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="Category/racing">
                      racing
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="Category/sports">
                      sports
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="Category/social">
                      social
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="Category/shooter">
                      shooter
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="Category/openworld">
                      open world
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="Category/zombie">
                      zombie
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="Category/fantasy">
                      fantasy
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="Category/actionrbg">
                      action-rbg
                    </Link>
                    <Link className="dropdown-item" to="Category/action">
                      action
                    </Link>
                    <Link className="dropdown-item" to="Category/fight">
                      fight
                    </Link>
                    <Link className="dropdown-item" to="Category/battle">
                      battle Royale
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
           : null}

          {localStorage.getItem("userToken") ? (
            <div className="ms-auto">
              <button
                className="btn btn-outline-primary text-white"
                onClick={logOut}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="ms-auto">
              <Link className="text-decoration-none" to={"/login"}>
                <span className="text-muted fw-bold me-3 mouse-pointer">
                  Login
                </span>
              </Link>
              <Link
                className="btn btn-outline-primary text-white text-decoration-none"
                to={"/Registration"}
              >
                Join Free
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  </>

  //   return <>
  //   <nav className="navy navbar navbar-expand-lg bg-transparent navbar-dark mb-3  ">
  //   <div className="container-fluid">
  //     <a className="navbar-brand" href="#">Game over</a>
  //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  //       <span className="navbar-toggler-icon"></span>
  //     </button>
  //     <div className="collapse navbar-collapse" id="navbarSupportedContent">

  //       {userData?<ul className="navbar-nav me-auto mb-2 mb-lg-0">
  //         <li className="nav-item">
  //           <Link className="nav-link active" aria-current="page" to='home'>Home</Link>
  //         </li>
  //         <li className="nav-item">
  //           <Link className="nav-link" to='all'>all</Link>
  //         </li>
  //         <li className="nav-item dropdown">
  //           <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  //             platforms
  //           </a>
  //           <ul className="dropdown-menu">
  //             <li><Link className="dropdown-item" href="#">Action</Link></li>
  //             <li><Link className="dropdown-item" href="#">Another action</Link></li>
  //             <li><Link className="dropdown-item" href="#">Something else here</Link></li>
  //        </ul>
  //         </li>
  //         <li className="nav-item dropdown">
  //           <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  //             sort-by
  //           </a>
  //           <ul className="dropdown-menu">
  //             <li><Link className="dropdown-item" href="#">Action</Link></li>
  //             <li><Link className="dropdown-item" href="#">Another action</Link></li>
  //             <li><Link className="dropdown-item" href="#">Something else here</Link></li>
  //        </ul>
  //         </li>
  //         <li className="nav-item dropdown">
  //           <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  //             category
  //           </a>
  //           <ul className="dropdown-menu">
  //             <li className="dropdown-item"><Link  href="#">Action</Link></li>
  //             <li className="dropdown-item"><Link href="#">Another action</Link></li>
  //             <li className="dropdown-item"><Link href="#">Something else here</Link></li>
  //        </ul>
  //         </li>

  //       </ul>:''}


  //     </div>
  //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
  //       <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
  //         {userData?<li className="nav-item">
  //          <button onClick={logOut} className='btn btn-outline-primary bg-transparent p-0 mx-1'><a className="nav-link active" aria-current="page" href='#' >logout</a></button> 
  //         </li>:<>
  //         <li className="nav-item">
  //           <Link className="nav-link active" aria-current="page" to='login'>login</Link>
  //         </li>
  //         <li className="nav-item">
  //                  <button className='btn btn-outline-primary bg-transparent p-0 '> <Link className="nav-link active" aria-current="page" to='registration'>join free</Link></button>

  //         </li>
  //         </>}


  //       </ul>

  //     </div>
  //   </div>
  // </nav>
  //   </>


}
