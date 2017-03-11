from django.contrib import admin
from . models import Word

class SearchRussianWord(admin.ModelAdmin):
    search_fields = ('russia',)

admin.site.register(Word, SearchRussianWord)
