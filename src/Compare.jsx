import React, { useState } from "react";
import Select from "react-select";


function Compare({data}){
    const headers = Object.keys(data[0]);
    const [show, setShow] = useState(false);
    const [persons, setPersons] = useState([null, null]);
    const personNames = data.map((person) => ({
        label: person.Name,
        value: person,
    }));

    const handleSelectPerson = (person, index) => {
        let p = persons;
        p[index] = person;
        setPersons(p)
    }

    const showComparison = () => {
        if(!persons.includes(null)){
            setShow(!show);
        }
        else{
            setShow(false);
        }
    }


    return(
        <div>
            <Select className="basic-single" classNamePrefix="select" defaultValue={persons[0]} isSearchable={true} name="personOne" options={personNames} onChange={(person) => handleSelectPerson(person, 0)}/>
            <Select className="basic-single" classNamePrefix="select" defaultValue={persons[1]} isSearchable={true} name="personOne" options={personNames} onChange={(person) => handleSelectPerson(person, 1)}/>
            <button onClick={() => showComparison}>Compare Scores</button>
        </div>
    )
}
export default Compare