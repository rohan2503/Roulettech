# Django Recipe Project

## Overview

This Django-based web application allows users to create, view, and manage recipes. It provides a RESTful API for recipe management, including features such as listing recipes, adding new recipes, and viewing recipe details.

## Features

- Create new recipes with title, cuisine type, ingredients, and instructions
- View a list of all recipes
- View details of individual recipes
- Update existing recipes
- Delete recipes
- API endpoints for all CRUD operations

## Technology Stack

- Backend: Django 3.2+
- Database: SQLite (default Django database)
- API: Django Rest Framework
- Frontend: React (separate repository)

## Prerequisites

- Python 3.8+
- pip
- virtualenv (recommended)

## Setup and Installation

1. Clone the repository:
   ```
   git clone https://github.com/rohan2503/Roulettech.git
   cd django-recipe-project
   ```

2. Create and activate a virtual environment:
   ```
   python3 -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. Install the required packages:
   ```
   pip install -r requirements.txt
   ```

4. Apply migrations:
   ```
   python manage.py migrate
   ```

5. Create a superuser:
   ```
   python manage.py createsuperuser
   ```

6. Run the development server:
   ```
   python manage.py runserver
   ```

## API Endpoints

- `GET /api/recipes/`: List all recipes
- `POST /api/recipes/`: Create a new recipe
- `GET /api/recipes/{id}/`: Retrieve a specific recipe
- `PUT /api/recipes/{id}/`: Update a specific recipe
- `DELETE /api/recipes/{id}/`: Delete a specific recipe

## Data Validation

The application includes the following validations:

- Title: Must be at least 4 characters long
- Cuisine: Must be selected from a predefined list
- Ingredients: Must include both ingredient name and quantity
- Instructions: Each step must be at least 10 words long

## Deployment

This project is designed to be deployed on AWS using a 3-tier architecture. The architecture includes:

1. Presentation Tier:
   - Amazon Route 53 for DNS management
   - Amazon CloudFront as a CDN
   - Elastic Load Balancer to distribute traffic
   - EC2 instances in an Auto Scaling group for web servers

2. Application Tier:
   - EC2 instances in an Auto Scaling group for the Django application

3. Data Tier:
   - Amazon RDS for the database (Note: Currently using SQLite, but can be migrated to RDS)
   - Amazon S3 for storing static files and media

Additional components include Amazon VPC for network isolation, AWS IAM for access management, and Amazon CloudWatch for monitoring.

For detailed deployment instructions, please refer to AWS documentation.

## Contact

Your Name - rohangowdahy@gmail.com

Project Link: https://github.com/rohan2503/Roulettech.git