import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'


const Countries = () => {
    const [countries,setCountries] = useState([]);
    const [visitedCountry,setVisitedCountry] = useState([]);
    const [visitedFlags,setVisitedFlags] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])

    const handleVisitedCountry = country =>{
        console.log('Add this to your visited country');
        const newVisitedCountries = [...visitedCountry,country];
        setVisitedCountry(newVisitedCountries);

    }

    const handleVisitesFlags = flag =>{
       const newVisitedFlag = [...visitedFlags,flag];
       setVisitedFlags(newVisitedFlag);
    }
    
    return (
        <div>
            <h3>Countries:{countries.length}</h3>
            <div>
                <h5>Visited Country:{visitedCountry.length}</h5>
                <ul>
                     {
                        visitedCountry.map(country => <li key={country.cca2}>{country.name.common}</li>)
                     }
                </ul>
            </div>
            <div className="flag-container">
                {
                    visitedFlags.map((flag,idx) => <img key={idx} src={flag}></img>)
                }

            </div>
          
           <div  className="country-container">
           {
            countries.map(country => <Country key={country.cc3} handleVisitedCountry={handleVisitedCountry} handleVisitesFlags ={handleVisitesFlags } country={country}></Country>)
           }
           </div>
        </div>
    );
};

export default Countries;