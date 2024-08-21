# recipes/models.py
from django.db import models

class Recipe(models.Model):
    title = models.CharField(max_length=200)
    cuisine = models.CharField(max_length=100)
    ingredients = models.TextField()
    instructions = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title