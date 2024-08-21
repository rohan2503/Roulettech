# Generated by Django 5.1 on 2024-08-21 22:51

import django.core.validators
import recipes.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recipe',
            name='cuisine',
            field=models.CharField(choices=[('italian', 'Italian'), ('mexican', 'Mexican'), ('indian', 'Indian'), ('chinese', 'Chinese'), ('american', 'American'), ('french', 'French'), ('japanese', 'Japanese'), ('thai', 'Thai'), ('greek', 'Greek'), ('spanish', 'Spanish'), ('other', 'Other')], max_length=100),
        ),
        migrations.AlterField(
            model_name='recipe',
            name='ingredients',
            field=models.TextField(validators=[recipes.models.validate_ingredients]),
        ),
        migrations.AlterField(
            model_name='recipe',
            name='instructions',
            field=models.TextField(validators=[recipes.models.validate_steps]),
        ),
        migrations.AlterField(
            model_name='recipe',
            name='title',
            field=models.CharField(max_length=200, validators=[django.core.validators.MinLengthValidator(4, 'Title must be at least 4 characters long.')]),
        ),
    ]
