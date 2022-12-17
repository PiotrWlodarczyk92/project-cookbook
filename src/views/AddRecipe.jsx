import { useEffect, useState } from "react";
import '../styles/AddRecipe.scss'

const getRecipes = () => {
    const recipes = localStorage.getItem("recipes")
    if(getRecipes){
        return JSON.parse(recipes)
    } else {
        return []
    }
}

export default function AddRecipe() {

    const [name, setName] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [description, setDescription] = useState('')
        

    const [recipes,setRecipes] = useState([])


function handleSubmit(event){
    event.preventDefault()
    let recipe={
        name,
        ingredients,
        description
    }
    setRecipes([...recipes, recipe]);
    setName('')
    setIngredients('')
    setDescription('')
}

useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes))
}, [recipes ])

    return (
        <div className="wrapper">
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label>Nazwa przepisu</label>
                <input type="text" placeholder="Tu dodaj nazwę przepisu" onChange={(e) => setName(e.target.value)} value={name} />
                <label>Składniki</label>
                <input type="textarea" placeholder="Tu dodaj składniki" onChange={(e) => setIngredients(e.target.value)} value={ingredients} />
                <label>Przygotowanie</label>
                <input type="textarea" placeholder="Tu dodaj przepis" onChange={(e) => setDescription(e.target.value)} value={description} />
                <button type='submit'>Zapisz</button>
            </form>
        </div>
        <div className="recipes-container">
                {recipes.map((recipe) => (<div className="single-recipe">                   
                    <h1>{recipe.name}</h1>
                    <br></br>
                    <h2>Składniki:</h2>
                    <p>{recipe.ingredients}</p>
                    <br></br>
                    <h2>Przygotowanie:</h2>
                    <p>{recipe.description}</p>
                </div>
                ))}
        </div>
        </div>
    )
}