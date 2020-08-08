import React from 'react';
import styles from './Recipe.module.css';
const Recipe =(props)=>
{
 return(
<div className={styles.recipe}>
   <h1>{props.title}</h1>
   <h4>Calories:{props.calories.toFixed(2)}</h4>
   <h6>{props.ingredients.map(ingredient =>(

           <li>{ingredient.text}</li>

        ))} </h6>
    <img className={styles.img} src={props.image} />
</div>

    )

}
export default Recipe