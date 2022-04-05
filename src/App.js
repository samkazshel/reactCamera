import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  var loadFile = function(event){
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
  }
  return (
    <div className="App">
      {/* label for the page*/}
      <p><label for="file"> Take Image </label></p>
      {/* <input accept='image/*' id="icon-button-file" type="file"
        capture="environment" /> */} 
        {/* This is the original method commented out */}
        
        {/*output element for the image uploaded*/} 
        <p><img id="output" width="200"/></p>

        <input type="file" accept='image/*' name='image' id='file' onChange={loadFile} />
    </div>
  );
}

export default App;
