import React, { useState } from 'react';
import { BiMenu } from 'react-icons/bi'
import Modal from './components/modal'
import Side from './components/sidebar'

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showSide, setShowSide] = useState(false);
  
  return (
    <div className="App">
      <button className="side-btn" onClick={() => setShowSide(true)}><BiMenu /></button>
      <Side showSide={showSide} closeSide={() => setShowSide(false)}/>
      <button className="modal-btn" onClick={() => setShowModal(true)}>Show Modal</button>
      {showModal && <Modal closeModal={() => setShowModal(false)}/>}
    </div>
  );
}

export default App;