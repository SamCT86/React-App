import { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

// Styles
import './Create.css';

export default function Create() {
    const [title, setTitle] = useState('')
    const [method, setMethod] = useState('')
    const [cookingTime, setCookingTime] = useState('')
    const [newIngredient, setNewIngredient] = useState('')
    const [ingredients, setIngredients] = useState([])
    const history = useHistory()

    const inputRef = useRef(null);

    // We want to use the useFetch hook to post data to the db.json file
    const { postData, data } = useFetch('http://localhost:3000/recipes', 'POST');

    // redirect the user back to home when the data is posted
    useEffect(() => {
        if (data) {
            history.push('/');
        }
    }, [data, history])

    // We want to submit the data and insert it into the db.json file where the recipes are stored
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !ingredients.length || !method || !cookingTime) {
            alert('Please fill out all fields!');
            return;
        }
        try {
            postData({ title, ingredients, method, cookingTime: cookingTime + 'minutes' });
        } catch (error) {
            console.log(error);
        }
    };



    const handleAdd = (e) => {
        e.preventDefault();
        if (newIngredient.trim() === '') {
            // Do nothing if the ingredient is empty
            return;
        }
        if (ingredients.includes(newIngredient)) {
            // Alert the user if the ingredient already exists
            alert('This ingredient already exists!');
            return;
        }
        setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
        setNewIngredient('');
        inputRef.current.focus();
    };

    return (
        <div className='create'>
            <h1 className='page-title'>Add a New Recipe</h1>

            <form onSubmit={handleSubmit}>
                <label>
                    <span>Specify Your TItle</span>
                    <input
                        type="text"
                        onChange={e => setTitle(e.target.value)}
                        value={title}
                        required
                    />
                </label>

                <label>
                    <span>Recipe Ingredients:</span>
                    <div className="ingredients">
                        <input
                            type="text"
                            onChange={(e) => setNewIngredient(e.target.value)}
                            value={newIngredient}
                            ref={inputRef}
                        />
                        <button onClick={handleAdd} className="btn">Add</button>
                    </div>
                </label>
                <p>Current Ingredients: {ingredients.map(ingredient => <em key={ingredient}> {ingredient},</em>)} </p>

                <label>
                    <span>Recipe Method:</span>
                    <textarea
                        onChange={(e) => setMethod(e.target.value)}
                        value={method}
                        required
                    />
                </label>

                <label>
                    <span>Cooking Time:</span>
                    <input
                        type="number"
                        onChange={(e) => setCookingTime(e.target.value)}
                        value={cookingTime}
                        required
                    />
                </label>

                <button className='btn'>Submit</button>
            </form>
        </div>
    )
}
