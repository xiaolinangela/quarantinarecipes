from recipes.models import Recipe
from rest_framework import viewsets, permissions
from .serializers import RecipeSerializer

# Recipe Viewset


class RecipeViewSet(viewsets.ModelViewSet):

    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = RecipeSerializer

    def get_queryset(self):
        return self.request.user.recipes.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
