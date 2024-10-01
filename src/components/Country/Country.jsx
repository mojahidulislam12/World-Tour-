import { useState } from 'react';
import './Country.css'

const Country = ({country,handleVisitedCountry,handleVisitesFlags }) => {
    const {name,flags,population,area,cca3} = country;
    const [visited,setVisited] = useState(false);
    const handelVisited = () =>{
        setVisited(!visited);
    }
   
   
    return (
        <div className={`country ${visited && 'visited'}` }>
            <h3 style={{color: visited ? 'red' : 'black'}}>Name :{name.common}</h3>
            <img src={flags.png} />
            <p>Area :{area}SQ</p>
            <p>Population : {population}</p>
            <p>Code :{cca3}</p>
            <button onClick={ () =>handleVisitedCountry(country)}>Mark Visited</button> 
            <button onClick={()=>handleVisitesFlags (country.flags.png)}>Add flag</button>
            <button onClick={handelVisited}>{ visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I have visited this country ' : 'I want to visited'}
            

        
        </div>
    );
};

export default Country;