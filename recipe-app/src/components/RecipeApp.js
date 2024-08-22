import React, { useState, useEffect } from 'react';
import RecipeList from './RecipeList';
import AddRecipeModal from './AddRecipeModal';
import RecipeDetail from './RecipeDetail';

const API_URL = 'http://localhost:8000/api/recipes/'; // Adjust this URL if your Django server is running on a different port

const RecipeApp = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const handleAddRecipe = async (newRecipe) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRecipe),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const addedRecipe = await response.json();
      setRecipes([...recipes, addedRecipe]);
      setShowAddModal(false);
    } catch (error) {
      console.error('Error adding recipe:', error);
    }
  };

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <div className="recipe-app">
      <header className="app-header">
        <svg className="logo" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <rect width="80" height="90" x="10" y="5" fill="#FFF" stroke="#000" strokeWidth="5"/>
          <line x1="25" y1="20" x2="75" y2="20" stroke="#000" strokeWidth="5"/>
          <line x1="25" y1="40" x2="75" y2="40" stroke="#000" strokeWidth="5"/>
          <line x1="25" y1="60" x2="75" y2="60" stroke="#000" strokeWidth="5"/>
          <line x1="25" y1="80" x2="75" y2="80" stroke="#000" strokeWidth="5"/>
        </svg>
        <h1 className="app-title">Cook Book</h1>
      </header>
      <div className="content-wrapper">
        <div className="recipe-list-container">
          <button className="add-recipe-btn" onClick={() => setShowAddModal(true)}>Add Recipe</button>
          <RecipeList recipes={recipes} onRecipeClick={handleRecipeClick} />
        </div>
        <div className="recipe-detail-container">
          {selectedRecipe ? (
            <RecipeDetail recipe={selectedRecipe} />
          ) : (
            <p>Select a recipe to view details</p>
          )}
        </div>
      </div>
      {showAddModal && (
        <AddRecipeModal 
          onAddRecipe={handleAddRecipe} 
          onClose={() => setShowAddModal(false)} 
        />
      )}
    </div>
  );
};

export default RecipeApp;