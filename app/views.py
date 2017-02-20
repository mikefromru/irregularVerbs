from django.shortcuts import render, redirect, HttpResponseRedirect
from django.http import HttpResponse
from app.models import Word
import random


def index(request):
    obj = list(Word.objects.all())
    random.shuffle(obj)

    russia = []
    english = []
    buttons = []

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
    'enwords': enwords,
    'stackbut': stackbut,
})