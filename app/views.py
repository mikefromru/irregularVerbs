from django.shortcuts import render, redirect, HttpResponseRedirect
from django.http import HttpResponse
from app.models import Word
import random

def index(request):
    obj = list(Word.objects.all())
    random.shuffle(obj)

    buttons = []
    russia = []
    english = []

    for x in obj:
        russia.append(x.russia)
        english.append(x.english)
        buttons.append(x.buttons)

    ruwords = ' '.join(russia)
    enwords = ' '.join(english)
    stackbut = ' '.join(buttons)

    print(len(obj), ' <-- amount verbs in db')

    return render(request, 'app/index.html', {'ruwords': ruwords,
    'enwords': enwords,
    'stackbut': stackbut,
    # 'ri': ri,
    # 'er': er,
    })

def demo(request):
    return render(request, 'app/demo.html')
    