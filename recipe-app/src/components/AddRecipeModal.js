import React, { useState } from 'react';
import { 
  validateTitle, 
  validateCuisine, 
  validateIngredients, 
  validateInstructions, 
  sanitizeInput,
  CUISINE_CHOICES 
} from '../validations';

const AddRecipeModal = ({ onAddRecipe, onClose }) => {
  const [newRecipe, setNewRecipe] = useState({
    title: '',
    cuisine: '',
    ingredients: '',
    instructions: '',
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {
      title: validateTitle(newRecipe.title),
      cuisine: validateCuisine(newRecipe.cuisine),
      ingredients: validateIngredients(newRecipe.ingredients),
      instructions: validateInstructions(newRecipe.instructions),
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const sanitizedRecipe = {
        title: sanitizeInput(newRecipe.title),
        cuisine: newRecipe.cuisine,
        ingredients: sanitizeInput(newRecipe.ingredients),
        instructions: sanitizeInput(newRecipe.instructions),
      };
      onAddRecipe(sanitizedRecipe);
      setNewRecipe({ title: '', cuisine: '', ingredients: '', instructions: '' });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewRecipe(prev => ({ ...prev, [name]: value }));
    // Clear the error when the user starts typing
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  return (
    <div className="modal">
      <h2>Add New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="title"
            placeholder="Recipe Title"
            value={newRecipe.title}
            onChange={handleChange}
            required
          />
          {errors.title && <p className="error">{errors.title}</p>}
        </div>
        <div>
          <select
            name="cuisine"
            value={newRecipe.cuisine}
            onChange={handleChange}
            required
          >
            <option value="">Select Cuisine</option>
            {CUISINE_CHOICES.map(choice => (
              <option key={choice.value} value={choice.value}>
                {choice.label}
              </option>
            ))}
          </select>
          {errors.cuisine && <p className="error">{errors.cuisine}</p>}
        </div>
        <div>
          <textarea
            name="ingredients"
            placeholder="Ingredients (one per line, include quantity, e.g., 'Flour: 2 cups')"
            value={newRecipe.ingredients}
            onChange={handleChange}
            required
          />
          {errors.ingredients && <p className="error">{errors.ingredients}</p>}
        </div>
        <div>
          <textarea
            name="instructions"
            placeholder="Instructions (each step on a new line, at least 10 words per step)"
            value={newRecipe.instructions}
            onChange={handleChange}
            required
          />
          {errors.instructions && <p className="error">{errors.instructions}</p>}
        </div>
        <div>
          <button type="submit">Add Recipe</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeModal;