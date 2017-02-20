from django.shortcuts import render, redirect, HttpResponseRedirect
from django.http import HttpResponse
from app.models import Word
import random


def index(request):
    obj = list(Word.objects.all())

    russia = []
    english = []
    buttons = []

    error = 0
    right = 0
    not_correct = 0
    amount_points = 0

    random.shuffle(obj)

    for x in obj:
        russia.append(x.russia)
        english.append(x.english)
        buttons.append(x.buttons)
    someDict = {
    'ru': russia,
    'en': english,
    'but': buttons
    }

    ruwords = ' '.join(someDict.get('ru'))
    enwords = ' '.join(someDict.get('en'))
    stackbut = ' '.join(someDict.get('but'))

    return render(request, 'app/index.html', {'ruwords': ruwords,
     'right': right,
     'error': error,
     'enwords': enwords,
     'stackbut': stackbut,
     })