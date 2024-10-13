import React, { useEffect, useState } from "react";
import Select from "react-select";


function Compare({data}){
    const headers = Object.keys(data[0]);
    const [show, setShow] = useState(false);
    const [buttonText, setButtonText] = useState("Compare Scores")
    const [persons, setPersons] = useState([null, null]);
    const personNames = data.map((person) => ({
        label: person.Name,
        value: person,
    }));

    const handleSelectPerson = (person, index) => {
        let p = persons;
        p[index] = person;
        setPersons(p);
        setShow(false);
    }



    return(
        <div className="compare-container">
            <Select className="basic-single" classNamePrefix="select" defaulstValue={persons[0]} isSearchable={true} name="personOne" options={personNames} onChange={(person) => handleSelectPerson(person, 0)}/>
            <Select className="basic-single" classNamePrefix="select" defaultValue={persons[1]} isSearchable={true} name="personOne" options={personNames} onChange={(person) => handleSelectPerson(person, 1)}/>
            <button onClick={() => {
                if(!persons.includes(null)){
                    {show ? setButtonText("Compare Scores") : setButtonText("Hide Comparison");
                        setShow(!show);
                }} }}>{buttonText}</button>           
            {show && 
                <table>
                    <thead>
                        <tr>
                            {headers.map((header, index) => (
                                <th key={index}>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                    {persons.map((person, index) => (
                        <tr key={index}>
                            {headers.map((header, index) => (
                                    <td key={index}>{person.value[header]}</td>
                            ))}
                        </tr>
                    ))}
                    <tr>{
                        headers.map((header, index) => (
                        <td key={index}>
                            {
                                header !== "Name" ? ["Team", "Div"].includes(header) ? "N/A" : Number(persons[0].value[header]) - Number(persons[1].value[header]) : "Difference"
                            }
                        </td>))
                    }</tr>
                    </tbody>
                </table>
            }
        </div>
    )
}
export default Compare