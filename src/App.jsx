import React, { useState } from 'react'
import FileInput from './FileInput.jsx'
import Rankings from './Rankings.jsx';
import Compare from './Compare.jsx';
import Medals from './Medals.jsx';

function App() {
  const [csvData, setCSVData] = useState(null);
  const [showAllScores, setShowAllScores] = useState(false);
  const [showText, setShowText] = useState("Show Rankings")

  const handleCSVData = (data) => {
    setCSVData(data);

  };

  return (
    <>
        <FileInput dataLoaded={handleCSVData}/>
        {csvData && 
          <button onClick={() => {
            setShowAllScores(!showAllScores);
            showAllScores ? setShowText("Show Rankings") : setShowText("Hide Rankings");
          }}>{showText}</button>
        }
        {showAllScores && <Rankings data={csvData} />}
        {csvData && <Compare data={csvData} />}
        {csvData && <Medals data={csvData} />}
    </>
  )
}

export default App
