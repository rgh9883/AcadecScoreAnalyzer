import React, { useState } from 'react'
import FileInput from './assets/FileInput.jsx'

function App() {
  const [csvData, setCSVData] = useState(null);

  function handleCSVData(data){
    setCSVData(data);
    console.log(data);  
  }

  return (
    <>
      <FileInput data={handleCSVData}/>

    </>
  )
}

export default App
