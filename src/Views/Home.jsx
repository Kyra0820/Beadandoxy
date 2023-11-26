import React from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <React.Fragment>
      <div style={{ display: 'flex', height: '100vh' }}>
        {/* Sidebar */}
        <div className="sidebar" style={{ width: '200px', backgroundColor: '#f0f0f0', padding: '10px' }}>
          <Link to="/phone">Telefon</Link>
          <Link to="/pc">Számítógép</Link>
          <Link to="/headphones">Fülhallgató</Link>
          <Link to="/hardver">Hardver</Link>
          <Link to="/tv">TV</Link>
          <Link to="/other">Egyéb</Link>
        </div>

        {/* Main content area */}
        <div style={{ flex: 1, padding: '20px' }}>
          {/* Title "Legújabb hirdetések" */}
          <h1 style={{ marginBottom: '20px', marginLeft: '250px', marginTop: '55px' }}>Legújabb hirdetések</h1>

          {/* Content */}
          <div className="container-fluid listBox" style={{ border: '1px solid #ddd', borderRadius: '30px', width: '500px',marginLeft: '250px' }}>
  <div className="d-flex flex-column col-lg-10 mx-auto align-items-start">
    <div className="d-flex justify-content-between w-100 align-items-center title-bar">
      <div className="d-flex align-items-center color-2 fs-30 fw-300 text-uppercase">
        <span className="playground-icon"></span>
        <div style={{ height: '100px' }} className="d-flex align-items-center color-2 fs-30 fw-300 text-uppercase">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/art/iphone8.jpeg" style={{ maxWidth: '150px', height: '100px', marginRight: '20px' }} alt="iphone 13" />
            <h1>Iphone 13</h1>
          </div>
        </div>
      </div>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', width: '100%', padding: '2px', marginTop: '3px' }}>
      <div style={{ flex: 1, padding: '0 10px' }}>
        <p>512 GB-os 100%-os akkumulátor</p>
      </div>
      <div style={{ flex: 1, padding: '0 10px', textAlign: 'right' }}>
        <p>Ár: 300.000Ft</p>
      </div>
    </div>
  </div>
</div>


          
        </div>
      </div>
    </React.Fragment>
  );
}
