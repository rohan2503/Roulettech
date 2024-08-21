import React, { useState, useEffect } from 'react';
import RecipeList from './RecipeList';
import AddRecipeModal from './AddRecipeModal';
import RecipeDetailModal from './RecipeDetailModal';

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
      <h1>Recipe List</h1>
      <button className="add-recipe-btn" onClick={() => setShowAddModal(true)}>Add Recipe</button>
      <RecipeList recipes={recipes} onRecipeClick={handleRecipeClick} />
      {showAddModal && (
        <AddRecipeModal 
          onAddRecipe={handleAddRecipe} 
          onClose={() => setShowAddModal(false)} 
        />
      )}
      {selectedRecipe && (
        <RecipeDetailModal 
          recipe={selectedRecipe} 
          onClose={() => setSelectedRecipe(null)} 
        />
      )}
    </div>
  );
};

export default RecipeApp;