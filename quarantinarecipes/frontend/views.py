from django.shortcuts import render
from django.views.generic.detail import DetailView
# Create your views here.
from recipes.models import Recipe
from django.contrib.auth.models import User


def index(request):
    return render(request, 'frontend/index.html')


class RecipeDetailView(DetailView):
    model = Recipe
    template_name = 'frontend/index.html'


class UerDetailView(DetailView):
    model = User
    template_name = 'frontend/index.html'
