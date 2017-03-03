from django.shortcuts import render, redirect, HttpResponseRedirect, get_object_or_404
from django.http import HttpResponse
from app.models import Word
import random
from .forms import WordForm
from django.shortcuts import render_to_response

def index(request):
    db = list(Word.objects.all())
    random.shuffle(db)

    buttons = []
    russia = []
    english = []

    for x in db:
        russia.append(x.russia)
        english.append(x.english)
        buttons.append(x.buttons)

    ruwords = ' '.join(russia)
    enwords = ' '.join(english)
    stackbut = ' '.join(buttons)

    print(len(db), ' <-- amount verbs in db')

    return render(request, 'app/index.html', {'ruwords': ruwords,
    'enwords': enwords,
    'stackbut': stackbut,
    })

def addition(request):
    amount = Word.objects.all()
    if request.method == "POST":
        form = WordForm(request.POST)
        # print(form.as_p())
        # en = form['english']
        if form.is_valid():
            form.save()
            return redirect('/addition')
    else:
        form = WordForm        
    return render(request, 'app/addition.html', {'form': form, 
    'amount': len(amount)})

def search_form(request):
    return render_to_response('app/search_form.html')

def data_edit(request, pk):
    amount = Word.objects.all()
    some = get_object_or_404(Word, pk=pk)
    if request.method == "POST":
        form = WordForm(request.POST, instance=some)
        if form.is_valid():
            form.save()
            return redirect('/listdata', pk=some.pk)
    else:
        form = WordForm(instance=some)        
    return render(request, 'app/addition.html', {'form': form, 'amount': len(amount)})
            

def search(request):
    db = Word.objects.all()
    list_db = []
    for ru in db:
        list_db.append(ru.russia)
    errors = []
    if 'q' in request.GET:
        q = request.GET['q']
        print(type(q), 'i am q') 
        if not q:
            errors.append('Enter a search term')
        elif len(q) > 15:
            errors.append('Please you entered too much characters')
        elif 'q' not in list_db:
            errors.append("Not found") 
        else:
            data_ = Word.objects.filter(russia__icontains=q)
            return render_to_response('app/result.html',
                {'data_': data_, 'query': q})
    return render_to_response('app/rootroom.html', {'errors': errors})

def demo(request):
    number = 0
    if request.method == "POST":
        count = request.POST['something']
        number += 1
        print(count, 'I am count')
        return render(request, 'app/demo.html', {'count': count, 'number': number})
    else:
        return render(request, 'app/demo.html', {'number': number})

def rootroom(request):
    return render(request, 'app/rootroom.html')

def listdata(request):
    data = Word.objects.all()
    return render(request, 'app/listdata.html', {'data': data})

def delete_data(request, pk):
    some = get_object_or_404(Word, pk=pk)
    return render(request, 'app/delete_data.html', {"some": some})