import React from 'react'; 

const Recipe = ({title, calories, image, ingredients }) => {
    return(
        <div>

            <h1>{title}</h1>
            <ol>
                
            </ol>
            <p>{calories}</p>
            <img src={image} alt="" />
        </div>
    );
}

export default Recipe;