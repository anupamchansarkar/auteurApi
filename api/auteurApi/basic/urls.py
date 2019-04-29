from django.urls import path

from . import views

urlpatterns = [
    path('authentication/register', views.register),
    path('authentication/token', views.token),
    path('user', views.user),
]
