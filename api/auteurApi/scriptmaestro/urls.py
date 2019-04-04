from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='scriptmaestro-home'),
    path('about/', views.about, name='scriptmaestro-about'),
]
