import { Link } from 'react-router-dom';

// Styles 
import './RecipeList.css';


export default function ReciepeList({ recipes, color }) {
    // Check if there are any reciepes to show when searching
    if (recipes.length === 0) { return <p className='error'>No recipes to found...</p> }

    return (
        <div className='recipe-list'>
            {recipes.map(recipe => (
                <div className='card' key={recipe.id} style={{ backgroundColor: color }}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.cookingTime} to make.</p>
                    <div>{recipe.method.substring(0, 100)}</div>
                    <Link to={`/recipes/${recipe.id}`} style={{ '--link-background-color': color }}>View Recipe</Link>
                </div>
            ))}
        </div>
    )
}
