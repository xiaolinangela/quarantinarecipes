from django.urls import path
from .views import index, RecipeDetailView

urlpatterns = [
    path('', index),
    path('recipes/new', RecipeDetailView.as_view()),
    path('recipes/detail/<int:pk>', RecipeDetailView.as_view()),
    path('recipes/edit/<int:pk>', RecipeDetailView.as_view()),
    path('recipes/delete/<int:pk>', RecipeDetailView.as_view()),
    path('register', index),
    path('login', index)
]
