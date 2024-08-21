from rest_framework import serializers
from .models import Recipe, CUISINE_CHOICES
from django.core.validators import MinLengthValidator
import re

class RecipeSerializer(serializers.ModelSerializer):
    title = serializers.CharField(
        max_length=200,
        validators=[MinLengthValidator(4, "Title must be at least 4 characters long.")]
    )
    cuisine = serializers.ChoiceField(choices=CUISINE_CHOICES)
    
    class Meta:
        model = Recipe
        fields = ['id', 'title', 'cuisine', 'ingredients', 'instructions', 'created_at', 'updated_at']
        read_only_fields = ['created_at', 'updated_at']

    def validate_ingredients(self, value):
        ingredients = value.split('\n')
        for ingredient in ingredients:
            if not re.match(r'^.+:\s*\d+.*$', ingredient):
                raise serializers.ValidationError('Each ingredient must have a name and quantity (e.g., "Flour: 2 cups").')
        return value

    def validate_instructions(self, value):
        steps = value.split('\n')
        for step in steps:
            if len(step.split()) < 10:
                raise serializers.ValidationError('Each step should be at least 10 words long.')
        return value

    def validate(self, data):
        # Additional cross-field validations can be added here if needed
        return data