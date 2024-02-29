import React, { useState } from 'react';
import Navbar from './component/Navbar';
import Card from './component/Card';
import Footer from './component/Footer';
import { data } from './data'
import Count from './component/Count';

function App() {


  return (
    <>
      <Navbar />
      {/* <div className="row">
        <Card data={data} />        
      </div> */}
      <Count />
      <Footer />
    </>
  )
}
export default App;
