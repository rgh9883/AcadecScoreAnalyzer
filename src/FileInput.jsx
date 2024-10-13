import { useEffect, useState } from "react";
import Papa from 'papaparse';

function FileInput({DataLoaded}){
    const [csvFile, setCSVFIle] = useState(null);


    function handleFileChange(e){
        setCSVFIle(e.target.files[0]);
    }

    const parseCSV = () => {
        if(csvFile){
            Papa.parse(csvFile, {
                complete: (result) => {
                    data(result.data);
                },
                header: true,
            });
            console.log("Finished Parsing")
        }
    };


    return(
        <div>
            <input type="file" accept=".csv" onChange={handleFileChange}></input>
            <button onClick={() => parseCSV}>Analyze Scores</button>
        </div>
    );
}

export default FileInput;