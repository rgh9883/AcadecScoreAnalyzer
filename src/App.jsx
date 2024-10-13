import React, { useState, useEffect } from 'react'
import FileInput from './FileInput.jsx'
import Rankings from './Rankings.jsx';
import Compare from './Compare.jsx';
import Medals from './Medals.jsx';

function App() {
  const [csvData, setCSVData] = useState(null);
  const [showAllScores, setShowAllScores] = useState(false);
  const [rankText, setRankText] = useState("Show Rankings")
  const [viewingOther, setViewingOther] = useState(false);
  const [showCompare, setShowCompare] = useState(false);
  const [showMedals, setShowMedals] = useState(false);
  const [compText, setCompText] = useState("Compare 2 Students");
  const [medalText, setMedalText] = useState("View Medal Winners");

  const handleCSVData = (data) => {
    setCSVData(data);
  };


  return (
    <>  

        {!viewingOther && <FileInput dataLoaded={handleCSVData}/>}
        {csvData && (!viewingOther || showAllScores) &&
          <button onClick={() => {
            setShowAllScores(!showAllScores);
            setViewingOther(!viewingOther);
            showAllScores ? setRankText("Show Rankings") : setRankText("Close Rankings");
          }}>{rankText}</button>
        }
        {showAllScores && viewingOther && <Rankings data={csvData} />}
        {csvData && (!viewingOther || showCompare) &&
          <button onClick={() => {
            setShowCompare(!showCompare);
            setViewingOther(!viewingOther);
            showCompare ? setCompText("Compare 2 Students") : setCompText("Exit Compare");
          }}>{compText}</button>
        }
        {showCompare && viewingOther && <Compare data={csvData} />}
        {csvData && (!viewingOther || showMedals) &&
          <button onClick={() => {
            setShowMedals(!showMedals);
            setViewingOther(!viewingOther);
            showMedals ? setMedalText("View Medal Winners") : setMedalText("Close Medal Winners");
          }}>{medalText}</button>
        }
        {showMedals && viewingOther && <Medals data={csvData} />}
    </>
  )
}

export default App
