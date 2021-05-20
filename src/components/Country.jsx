import React, {useContext} from 'react'
import {countryContext} from "./App"

const Country = ({country}) => {
    const cntx = useContext(countryContext);
    return (
        <div className="col-6 col-sm-4 col-md-3">
            <button
                type="button"
                onClick={
                    () => {
                        cntx.changeCountry(country.strArea)
                    }
                }
                className="btn btn-outline-success my-1 w-100"
            >{country.strArea}</button>
        </div>
    )
}

export default Country