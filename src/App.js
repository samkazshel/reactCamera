import React, {Component} from 'react';
import './App.css';
import camera from './camera.js';


function App() {

  camera.startCamera();

  return (
    <div className="App">
      <label>Capture an Image: 
      </label>
      <button onClick={camera.takeSnapshot()}> Capture Image </button>
      {/* <input accept='image/*' id="icon-button-file" type="file"
        capture="environment" /> */}
        
    </div>
  );
}

export default App;
