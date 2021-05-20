import React, {Fragment, useState} from "react"
import Meals from "./Meals";
import Countries from "./Countries";

export const countryContext = React.createContext();

const App = () => {

    const [country, setCountry] = useState(null)

    const changeCountry = (data) => {
        setCountry( data )
    }

    const renderMeals = () => {
        if (country)  {
            return (
                <section className="container">
                    <Meals country={country} />
                </section>
            )
        }
    }

    return (
        <Fragment>
            <countryContext.Provider value={{changeCountry}}>
                <section className="container my-5">
                    <Countries />
                </section>
            </countryContext.Provider>
            { renderMeals() }
        </Fragment>
    )
}

export default App