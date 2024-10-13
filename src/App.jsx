import React, { useState } from 'react'
import FileInput from './FileInput.jsx'
import Rankings from './Rankings.jsx';

function App() {
  const [csvData, setCSVData] = useState(null);
  const [showAllScores, setShowAllScores] = useState(false);

  const handleCSVData = (data) => {
    setCSVData(data);
    console.log("Parsed Data:", data);
  };

  return (
    <>
      <div>
        {showAllScores && <Rankings data={csvData}></Rankings>}
        <FileInput dataLoaded={handleCSVData}/>
        {csvData && 
          <button onClick={() => setShowAllScores(!showAllScores)}>Show All Scores</button>
        }
        
        
      </div>
    </>
  )
}

export default App
