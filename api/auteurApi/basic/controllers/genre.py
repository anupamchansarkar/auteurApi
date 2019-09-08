from django.core.validators import validate_email
from django.core.files.storage import FileSystemStorage
from django.conf import settings
from .base import Base

from basic.models.genres import Genres

class Genre(Base):
    
    def __init__(self, request):
        super().__init__(request)

    def get(self):
        genre_obj = Genres()
        genre_list = genre_obj.get_list()
        r = {"genre":genre_list}
        return self.response(r)