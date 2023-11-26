import React from "react";

export default function Computer() {
    return (
<div style={{ display: 'flex', flexDirection: 'row', padding: '20px' }}>
  {/* Első oszlop */}
  <div style={{ marginRight: '20px' }}>
    <h1 style={{ marginBottom: '20px', marginTop: '55px', marginLeft:'100px'}}>Telefonok</h1>

    <div className="container-fluid listBox" style={{ border: '1px solid #ddd', borderRadius: '30px', width: '500px', marginLeft: '200px' }}>
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
            <p>Ár: 300.000 Ft</p>
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
                <img src="/art/6s2.jpeg" style={{ maxWidth: '150px', height: '100px', marginRight: '20px' }} alt="iphone 13" />
                <h1>Iphone 6s</h1>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', width: '100%', padding: '2px', marginTop: '3px' }}>
          <div style={{ flex: 1, padding: '0 10px' }}>
            <p>64 GB-os 80%-os akkumulátor</p>
          </div>
          <div style={{ flex: 1, padding: '0 10px', textAlign: 'right' }}>
            <p>Ár: 50.000Ft</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

          );
}
