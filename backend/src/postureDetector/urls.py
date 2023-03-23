from django.urls import path

from .views import runner

urlpatterns = [
    path('', runner, name='runner'),
]