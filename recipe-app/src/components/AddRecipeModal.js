import React, { useState } from 'react';

const AddRecipeModal = ({ onAddRecipe, onClose }) => {
  const [newRecipe, setNewRecipe] = useState({
    title: '',
    cuisine: '',
    ingredients: '',
    instructions: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddRecipe(newRecipe);
    setNewRecipe({ title: '', cuisine: '', ingredients: '', instructions: '' });
  };

  return (
    <div className="modal">
      <h2>Add New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Recipe Title"
          value={newRecipe.title}
          onChange={(e) => setNewRecipe({...newRecipe, title: e.target.value})}
          required
        />
        <input
          type="text"
          placeholder="Cuisine"
          value={newRecipe.cuisine}
          onChange={(e) => setNewRecipe({...newRecipe, cuisine: e.target.value})}
          required
        />
        <textarea
          placeholder="Ingredients (one per line)"
          value={newRecipe.ingredients}
          onChange={(e) => setNewRecipe({...newRecipe, ingredients: e.target.value})}
          required
        />
        <textarea
          placeholder="Instructions"
          value={newRecipe.instructions}
          onChange={(e) => setNewRecipe({...newRecipe, instructions: e.target.value})}
          required
        />
        <div>
          <button type="submit">Add Recipe</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeModal;