import { useState } from "react";

function Medals({data}){
    const getMedalists = (students, eventName) => {
        const sortedData = students.map((student) => ({name : student.Name, score: parseInt(student[eventName])})).sort((a,b) => b.score - a.score);

        const medalists = {gold: [], silver: [], bronze: []};
        let currentMedal = "gold";
        for(let i = 0; i < sortedData.length; i++){
            if(i === 0){
                medalists.gold.push(sortedData[i]);
            }
            else if(sortedData[i].score === sortedData[i - 1].score){
                medalists[currentMedal].push(sortedData[i]);
            }
            else if(currentMedal === "gold"){
                currentMedal = "silver";
                medalists.silver.push(sortedData[i]);
            }
            else if(currentMedal === "silver"){
                currentMedal = "bronze";
                medalists.bronze.push(sortedData[i]);
            }
            else{
                break;
            }
        }
        return medalists;
    }

    const headers = Object.keys(data[0]);
    const events = headers.filter((header) => !["Team", "Div", "Name"].includes(header));
    console.log(events);


    return(
        <div className="medals-container">
            <h2>Medals</h2>
            {events.map((eventName, index) => {
                const medalists = getMedalists(data, eventName);
                return (
                    <div key={index}>
                        <h3>{eventName}:</h3>
                        <table className="inner-table">
                            <thead>
                                <tr>
                                    <th>Medal</th>
                                    <th>Name</th>
                                    <th>Score</th>
                                </tr>
                            </thead>
                            <tbody>
                                {medalists.gold.map((student, idx) => (
                                    <tr key={idx}>
                                        <td>🥇 Gold</td>
                                        <td>{student.name}</td>
                                        <td>{student.score}</td>
                                    </tr>
                                ))}
                                {medalists.silver.map((student, idx) => (
                                    <tr key={idx}>
                                        <td>🥈 Silver</td>
                                        <td>{student.name}</td>
                                        <td>{student.score}</td>
                                    </tr>
                                ))}
                                {medalists.bronze.map((student, idx) => (
                                    <tr key={idx}>
                                        <td>🥉 Bronze</td>
                                        <td>{student.name}</td>
                                        <td>{student.score}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                );
            })}
        </div>
    )
}
export default Medals