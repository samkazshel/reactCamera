import React from 'react';
import { saveAs } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  var loadFile = function(event){
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
  }
  const saveFile = () => {
    var file = document.getElementById('output');
    saveAs(
      file,
      "image.png"
    )
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
        
        {/* upload box for the files, presented the option of using the main camera or the file explorer */}
        <input type="file" accept='image/*' name='image' id='file' onChange={loadFile}/>
        <button onClick={saveFile}>Download</button>
    </div>
  );
}

export default App;
