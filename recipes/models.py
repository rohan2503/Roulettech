from django.db import models
from django.core.validators import MinLengthValidator, MinValueValidator
from django.core.exceptions import ValidationError
import re

def validate_ingredients(value):
    ingredients = value.split('\n')
    for ingredient in ingredients:
        if not re.match(r'^.+:\s*\d+.*$', ingredient):
            raise ValidationError('Each ingredient must have a name and quantity (e.g., "Flour: 2 cups").')

def validate_steps(value):
    steps = value.split('\n')
    for step in steps:
        if len(step.split()) < 10:
            raise ValidationError('Each step should be at least 10 words long.')

CUISINE_CHOICES = [
    ('italian', 'Italian'),
    ('mexican', 'Mexican'),
    ('indian', 'Indian'),
    ('chinese', 'Chinese'),
    ('american', 'American'),
    ('french', 'French'),
    ('japanese', 'Japanese'),
    ('thai', 'Thai'),
    ('greek', 'Greek'),
    ('spanish', 'Spanish'),
    ('other', 'Other'),
]

class Recipe(models.Model):
    title = models.CharField(
        max_length=200, 
        validators=[MinLengthValidator(4, "Title must be at least 4 characters long.")]
    )
    cuisine = models.CharField(max_length=100, choices=CUISINE_CHOICES)
    ingredients = models.TextField(validators=[validate_ingredients])
    instructions = models.TextField(validators=[validate_steps])
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    def clean(self):
        super().clean()
        # Additional cross-field validations can be added here if needed