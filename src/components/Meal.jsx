import React from "react";

const Meal = ({meal}) => {
    return (
        <div className="col-md-3 col-sm-4 col-6 mb-2">
            <div className="card">
                <img src={meal.strMealThumb} alt=""/>
                <div className="card-body">
                    <h5 className="card-title">
                        {meal.strMeal}
                    </h5>
                </div>
            </div>
        </div>
    )
}

export default Meal