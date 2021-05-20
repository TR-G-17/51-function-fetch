import React, {useEffect, useState} from 'react'
import Loading from "./Loading"
import Error from "./Error"
import Meal from "./Meal"

const Meals = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [meals, setMeals] = useState(null)
    const [error, setError] = useState(false)

    useEffect(() => {
        setTimeout( () => {
            fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Japanese')
                .then(response => response.json())
                .then(data => {
                    setMeals( data.meals )
                    setIsLoading( false )
                })
                .catch(error => {
                    setError( error.message )
                })
        }, 1000 )
    }, []);


    useEffect(() => {
        console.log( error )
    }, [error]);


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