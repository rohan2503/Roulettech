export const CUISINE_CHOICES = [
    { value: 'italian', label: 'Italian' },
    { value: 'mexican', label: 'Mexican' },
    { value: 'indian', label: 'Indian' },
    { value: 'chinese', label: 'Chinese' },
    { value: 'american', label: 'American' },
    { value: 'french', label: 'French' },
    { value: 'japanese', label: 'Japanese' },
    { value: 'thai', label: 'Thai' },
    { value: 'greek', label: 'Greek' },
    { value: 'spanish', label: 'Spanish' },
    { value: 'other', label: 'Other' },
  ];
  
  export const validateTitle = (title) => {
    if (!title || title.length < 4) {
      return "Title must be at least 4 characters long.";
    }
    if (title.length > 200) {
      return "Title must not exceed 200 characters.";
    }
    return "";
  };
  
  export const validateCuisine = (cuisine) => {
    if (!CUISINE_CHOICES.some(choice => choice.value === cuisine)) {
      return "Please select a valid cuisine.";
    }
    return "";
  };
  
  export const validateIngredients = (ingredients) => {
    const lines = ingredients.split('\n');
    for (let line of lines) {
      if (!line.trim()) continue; // Skip empty lines
      if (!/^.+:\s*\d+.*$/.test(line)) {
        return "Each ingredient must have a name and quantity (e.g., 'Flour: 2 cups').";
      }
    }
    return "";
  };
  
  export const validateInstructions = (instructions) => {
    const steps = instructions.split('\n');
    for (let step of steps) {
      if (!step.trim()) continue; // Skip empty lines
      if (step.split(/\s+/).length < 10) {
        return "Each step should be at least 10 words long.";
      }
    }
    return "";
  };
  
  export const sanitizeInput = (input) => {
    // Remove any HTML tags
    return input.replace(/<[^>]*>?/gm, '');
  };