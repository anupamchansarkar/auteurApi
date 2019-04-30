from django.urls import path, re_path

from . import views

urlpatterns = [
    path('authentication/register', views.register),
    path('authentication/token', views.token),
    path('user', views.user),
    re_path(r'^user/(?P<user_id>[0-9a-f]+)$', views.user),
    re_path('folder/(?P<folder_id>[0-9a-f]+)$', views.folder),
]
