import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ThemeSelector from './component/ThemeSelector';
import { useState } from 'react';

// Pages
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import Create from './pages/create/Create';
import Recipes from './pages/recipes/Recipes';

// Components 
import Navbar from './component/Navbar';

function App() {
  // We use the useState hook to set the default color
  const [color, setColor] = useState('#2f233d');

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ThemeSelector setColor={setColor} />
        <Switch>
          <Route exact path="/">
            <Home color={color} />
          </Route>
          <Route path="/search" >
            <Search color={color} />
          </Route>
          <Route path="/create" >
            <Create color={color} />
          </Route>
          <Route path="/recipes/:id">
            <Recipes color={color} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div >
  )
}

export default App;