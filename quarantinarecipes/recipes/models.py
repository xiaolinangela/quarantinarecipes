from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Recipe(models.Model):
    name = models.CharField(max_length=100)
    ingredients = models.TextField()
    instructions = models.TextField()
    image = models.ImageField(upload_to='recipe_image', blank=True)
    owner = models.ForeignKey(
        User, related_name="recipes", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
