import React from 'react';

const RecipeList = ({ recipes, onRecipeClick }) => {
  return (
    <ul className="recipe-list">
      {recipes.map((recipe) => (
        <li key={recipe.id} onClick={() => onRecipeClick(recipe)}>
          {recipe.title}
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;