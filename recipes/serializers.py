# recipes/serializers.py
from rest_framework import serializers
from .models import Recipe

class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = ['id', 'title', 'cuisine', 'ingredients', 'instructions', 'created_at', 'updated_at']
        read_only_fields = ['created_at', 'updated_at']