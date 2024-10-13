import React, { useState } from 'react'
import FileInput from './FileInput.jsx'

function App() {
  const [csvData, setCSVData] = useState(null);

  const handleCSVData = (data) => {
    setCSVData(data);
    console.log("Parsed Data:", data);
  };

  return (
    <>
      <div>
        {csvData && (
          <div>
            <h2>CSV Data</h2>
            <pre>{csvData[5].Math}</pre>
          </div>
        )}
        <FileInput dataLoaded={handleCSVData}/>
      </div>
    </>
  )
}

export default App
