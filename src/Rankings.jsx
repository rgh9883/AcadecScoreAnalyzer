import { useState, useEffect } from "react";


function Rankings({data}){
    const headers = Object.keys(data[0]);
    const [sortedBy, setSortedBy] = useState("Team");
    const [sortedData, setSortedData] = useState(data);
    function handleSortData(header){
        setSortedBy(header);
    }

    useEffect(() => {
        setSortedData(() => [...sortedData].sort((a,b) => {
            switch(sortedBy){
                case "Name":
                    return a[sortedBy].localeCompare(b[sortedBy]);
                
                case "Team":
                    if(a[sortedBy].localeCompare(b[sortedBy]) == 0){
                        return a["Div"].localeCompare(b["Div"]) == 0 ? Number(b["Total"]) - Number(a["Total"]) : a["Div"].localeCompare(b["Div"]);
                    }
                    return a[sortedBy].localeCompare(b[sortedBy]);

                case "Div":
                    if(a[sortedBy].localeCompare(b[sortedBy]) == 0){
                        return Number(b["Total"]) - Number(a["Total"]);
                    }
                    return a[sortedBy].localeCompare(b[sortedBy]);
                
                default:
                    return Number(b[sortedBy]) - Number(a[sortedBy]);

            }
        }));
    }, [sortedBy]);
    

    return(
        <div>
        <h2>Rankings</h2>
        <table>
            <thead>
            <tr>
                {headers.map((header, index) => (
                <th key={index} onClick={() => handleSortData(header)}>{header}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {sortedData.map((person, index) => (
                <tr key={index}>
                {headers.map((header, index) => (
                    <td key={index}>{person[header]}</td>
                ))}
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    )
}
export default Rankings