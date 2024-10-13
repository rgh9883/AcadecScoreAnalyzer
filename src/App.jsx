import React, { useState, useEffect } from 'react'
import FileInput from './FileInput.jsx'
import Rankings from './Rankings.jsx';
import Compare from './Compare.jsx';
import Medals from './Medals.jsx';

function App() {
  const [csvData, setCSVData] = useState(null);
  const [showAllScores, setShowAllScores] = useState(false);
  const [viewingOther, setViewingOther] = useState(true);
  const [showCompare, setShowCompare] = useState(false);
  const [showMedals, setShowMedals] = useState(false);

  const handleCSVData = (data) => {
    setCSVData(data);
  };

  return (
    <>
        <FileInput dataLoaded={handleCSVData}/>
        {csvData && viewingOther &&
          <button onClick={() => {
            setShowAllScores(!showAllScores);
            setViewingOther(!viewingOther);
          }}>View Rankings</button>
        }
        {showAllScores && !viewingOther && <Rankings data={csvData} />}
        {csvData && viewingOther &&
          <button onClick={() => {
            setShowCompare(!showCompare);
            setViewingOther(!viewingOther);
          }}>Compare 2 Students</button>
        }
        {showCompare && !viewingOther && <Compare data={csvData} />}
        {csvData && viewingOther &&
          <button onClick={() => {
            setShowMedals(!showMedals);
            setViewingOther(!viewingOther);
          }}>View Medal Winners</button>
        }
        {showMedals && !viewingOther && <Medals data={csvData} />}
    </>
  )
}

export default App
