import React, { use, useState } from 'react';
import Country from '../country/country';
import './Countries.css'


const Countries = ({countriesPromise}) => {
    const [visitedCountries,setVisitedCountries]= useState([])
    const [visitedFlags,setVisitedFlags]= useState([])
    const handleVisitedFlags = (flag)=> {
        // console.log('visited flags added',flag)
       
        const newVisitedFlags = [...visitedFlags,flag ]
        setVisitedFlags(newVisitedFlags)
        // console.log(visitedFlags);
    }
    const handleVisitedCountries = (Country) => {
        console.log('visited countries added',Country)
        const newVisitedCountries = [...visitedCountries,Country]
        setVisitedCountries(newVisitedCountries)
        // console.log(visitedCountries);
        // setVisitedCountries(visitedCountries.push(Country.name.common)) //not working
    }
    const countries= use(countriesPromise)
    // console.log(countries)
    return (
        <div >
            <h1>Traveling countries {countries.length}</h1>
            <h2>Traveled so far : {visitedCountries.length}</h2>
            <ol>
                {
                    
                    visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                }
            </ol>
            <div className='visited-flags-container'>
                {
                    visitedFlags.map((flag,i) => <img key={i} src={flag} alt=""  /> )
                    
                    
                }
                
                {/* <img src={} alt="" /> */}
            </div>
            <div className='countries'>
            {
                countries.map(country =><Country 
                    key={country.cca3}
                    handleVisitedCountries={handleVisitedCountries} 
                    handleVisitedFlags={handleVisitedFlags}
                    country={country}></Country>)
            }
            </div>
        </div>
    );
};


export default Countries;