import {  useState } from "react";
import Papa from 'papaparse';

function FileInput({dataLoaded}){
    const [csvFile, setCSVFIle] = useState(null);


    function handleFileChange(e){
        setCSVFIle(e.target.files[0]);
    }

    const parseCSV = () => {
        if(csvFile){
            Papa.parse(csvFile, {
                complete: (result) => {
                    dataLoaded(result.data);
                },
                header: true,
            });
        }
    };


    return(
        <div className="fileInput-container">
            <label htmlFor="upload">Choose File</label>
            <input id="upload" type="file" accept=".csv" onChange={handleFileChange}></input><br />
            <button onClick={parseCSV}>Analyze Scores</button>
        </div>
    );
}

export default FileInput;