import React, {useEffect, useState} from 'react'
import Loading from "./Loading"
import Error from "./Error"
import Meal from "./Meal"

import {URL} from "../data"

const Meals = ({country}) => {

    const [isLoading, setIsLoading] = useState(true)
    const [meals, setMeals] = useState(null)
    const [error, setError] = useState(false)

    useEffect(() => {
        setIsLoading( true )
        setTimeout( () => {
            fetch(`${URL}filter.php?a=${country}`)
                .then(response => response.json())
                .then(data => {
                    setMeals( data.meals )
                    setIsLoading( false )
                })
                .catch(error => {
                    setError( error.message )
                })
        }, 1000 )
    }, [country]);



    const renderMeals = () => {
        if (isLoading && !error) {
            return (<Loading />)
        } else if (error) {
            return (<Error message={error} />)
        } else
            return (meals.map((meal) => (<Meal key={meal.idMeal} meal={meal}/>)))
    }

    return (
        <div className="container">
            <div className="row">
                {renderMeals()}
            </div>
        </div>
    )
}

export default Meals