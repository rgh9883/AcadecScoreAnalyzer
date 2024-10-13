import { useState } from "react";


function Rankings({data}){

    const headers = Object.keys(data[0]);

    return(
        <div>
        <h2>Rankings</h2>
        <table>
            <thead>
            <tr>
                {headers.map((header, index) => (
                <th key={index}>{header}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.map((person, index) => (
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