import React, {useEffect, useState} from "react"
import {URL} from '../data'
import Loading from "./Loading";
import Country from "./Country";

const Countries = () => {

    const [countries, setCountries] = useState(null)
    const [error, setError] = useState(false)

    const renderCountries = () => {
        if ( !countries ) return (<Loading />);
        return countries.map(country => (<Country key={country.strArea}  country={country} />))
    }

    useEffect(() => {
        fetch(`${URL}list.php?a=list`)
            .then(response => response.json())
            .then(data => {
                setCountries( data.meals )
            })
            .catch(error => {
                setError( error.message )
            })
    }, []);


    return (
        <div className="row">
            {renderCountries()}
        </div>
    )
}

export default Countries