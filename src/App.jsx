import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss'
import './index.scss'

import Header from './components/Header';
import Dashboard from './views/Dashboard';
import MyRecipes from './views/MyRecipes';
import AddRecipe from './views/AddRecipe';
import Search from './views/Search';


function App() {

  return (  
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />}>
        <Route path="/my-recipes" element={<MyRecipes/>} />
          <Route path="/add-recipe" element={<AddRecipe/>} />
          <Route path="/search" element={<Search/>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
