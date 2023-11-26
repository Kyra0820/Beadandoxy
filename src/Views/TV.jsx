import React from "react";

export default function Computer() {
    return (
<div style={{ display: 'flex', flexDirection: 'row', padding: '20px' }}>
  {/* Első oszlop */}
  <div style={{ marginRight: '20px' }}>
    <h1 style={{ marginBottom: '20px', marginTop: '55px', marginLeft:'100px'}}>Televíziók</h1>

    <div className="container-fluid listBox" style={{ border: '1px solid #ddd', borderRadius: '30px', width: '500px', marginLeft: '200px' }}>
      <div className="d-flex flex-column col-lg-10 mx-auto align-items-start">
        <div className="d-flex justify-content-between w-100 align-items-center title-bar">
          <div className="d-flex align-items-center color-2 fs-30 fw-300 text-uppercase">
            <span className="playground-icon"></span>
            <div style={{ height: '100px' }} className="d-flex align-items-center color-2 fs-30 fw-300 text-uppercase">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src="/art/lgtv1.avif" style={{ maxWidth: '150px', height: '100px', marginRight: '20px' }} alt="iphone 13" />
                <h1>Lg tv</h1>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', width: '100%', padding: '2px', marginTop: '3px' }}>
          <div style={{ flex: 1, padding: '0 10px' }}>
            <p>Eladó Oled LG Tv</p>
          </div>
          <div style={{ flex: 1, padding: '0 10px', textAlign: 'right' }}>
            <p>Ár: 150.000 Ft</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Második oszlop */}
  <div style={{ width: '500px' }}>
    <h1 style={{ marginBottom: '20px', marginTop: '126px' }}></h1>

    <div className="container-fluid listBox" style={{ border: '1px solid #ddd', borderRadius: '30px' }}>
      <div className="d-flex flex-column col-lg-10 mx-auto align-items-start">
        <div className="d-flex justify-content-between w-100 align-items-center title-bar">
          <div className="d-flex align-items-center color-2 fs-30 fw-300 text-uppercase">
            <span className="playground-icon"></span>
            <div style={{ height: '100px' }} className="d-flex align-items-center color-2 fs-30 fw-300 text-uppercase">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src="/art/samsung1.avif" style={{ maxWidth: '150px', height: '100px', marginRight: '20px' }} alt="iphone 13" />
                <h1>Samsung tv</h1>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', width: '100%', padding: '2px', marginTop: '3px' }}>
          <div style={{ flex: 1, padding: '0 10px' }}>
            <p>Eladó Samsung qled tv</p>
          </div>
          <div style={{ flex: 1, padding: '0 10px', textAlign: 'right' }}>
            <p>Ár: 200.000 Ft</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

          );
}
