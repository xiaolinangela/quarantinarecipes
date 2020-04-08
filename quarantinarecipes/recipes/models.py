from django.db import models

# Create your models here.


class Recipe(models.Model):
    name = models.CharField(max_length=100)
    ingredients = models.TextField()
    instructions = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
