import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.min.js";

export default function Navbar() {
  return (
    <>
      <header>
        <div className="navbarcolor">
          <div className="container-fluid pt-2 pt-sm-0">
            <div className="row align-items-center text-white justify-content-between">
              <div className="col-auto text-uppercase logo order-1">
                <div className="icon-text-container">
                  <img src="/art/icon1.png" className="logo" alt="logo" />
                  <strong>
                    Tech<br></br>Terasz
                  </strong>
                  <Link to="/" className="nav-link">
                    Kezdőlap
                  </Link>
                </div>
              </div>

              <div className="col-12 col-xxl order-4 order-xxl-3">
                <nav className="navbar navbar-expand-xxl navbar-light font-20 pb-0">
                  <div className="collapse navbar-collapse justify-content-around pb-3" id="hidemenu">
                    
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
