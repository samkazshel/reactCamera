import React from 'react';
import './App.css';

function App() {

  var loadFile = function(event){
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
  }

  const hSubmit = function(event){
    event.preventDefault();

    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());

    console.log( { value });
    
    }

  return (
    <div className="App">
      <form class ="form" id="seizureForm">
      {/* label for the page*/}
      <p><label for="file"> Take Image </label></p>
      {/* <input accept='image/*' id="icon-button-file" type="file"
        capture="environment" /> */} 
        {/* This is the original method commented out */}
        {/*output element for the image uploaded*/} 
        <p>
        <label>Seizure Number: </label>
        <input type = "text"/>
        </p>
        <p>
        <label>Seizure Details:  </label>
        <textarea name="seizure-content" rows="2" cols="20"></textarea>
        </p>
        
        <p><img id="output" width="200"/></p>
        
        {/* upload box for the files, presented the option of using the main camera or the file explorer */}
        <input type="file" accept='image/*' name='image' id='file' onChange={loadFile} />
        <p>
          <input type = "submit" value = "Submit" onSubmit={hSubmit}/>
        </p>
        </form>
    </div>
  );
}

export default App;
