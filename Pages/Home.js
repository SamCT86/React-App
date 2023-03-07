import RecipeList from '../../component/RecipeList';
import { useFetch } from '../../hooks/useFetch';

export default function Home() {
    const { data: recipes, isPending, error } = useFetch('http://localhost:3000/recipes');

    return (
        <div>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {recipes && (
                <div className='recipes'>
                    <RecipeList recipes={recipes} />
                </div>
            )}
        </div>

    )
}
