import React from 'react';

const RecipeDetailModal = ({ recipe, onClose }) => {
  if (!recipe) return null;

  return (
    <div className="modal">
      <h2>{recipe.title}</h2>
      <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
      <div>
        <strong>Ingredients:</strong>
        <ul>
          {recipe.ingredients.split('\n').map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div>
        <strong>Instructions:</strong>
        <p>{recipe.instructions}</p>
      </div>
      <p><strong>Created:</strong> {new Date(recipe.created_at).toLocaleString()}</p>
      <p><strong>Last Updated:</strong> {new Date(recipe.updated_at).toLocaleString()}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default RecipeDetailModal;