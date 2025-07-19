import React from 'react';
import img from './assets/logo_black.png'

const App = () => {
  return <div className="container">
    <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>
      <img src={img} style={{ width: "100px" }} />
      <p style={{ fontSize: "24px", textDecoration: "underline" }}>Alrize Nex Cell</p>
    </div>
    <div style={{ textAlign: "center", paddingBottom: "100px" }}>
      <p style={{ marginBottom: "12px", fontSize: "21px" }}>Introducing</p>
    </div>
    <div style={{ height: "100px" }}>
      <a href='https://www.instagram.com/anc.alrize?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D' className='button'>Our Instagram</a>
    </div>
  </div>;
};

export default App;
