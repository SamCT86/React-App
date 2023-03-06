import { useFetch } from '../../hooks/useFetch';
import { useLocation } from 'react-router-dom';

// Components
import ReciepeList from '../../component/RecipeList';


export default function Search() {
    // Get the url query search string and parse it into a query object 
    const queryString = useLocation().search;
    const queryParams = new URLSearchParams(queryString);
    const query = queryParams.get('q');

    // Create the url to fetch
    const url = 'http://localhost:3000/recipes?q=' + query;

    const { data: recipes, error, isPending } = useFetch(url);

    return (
        <div>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            <h1>Searched Recepie</h1>
            {recipes && <ReciepeList recipes={recipes} />}
        </div>
    )
}
