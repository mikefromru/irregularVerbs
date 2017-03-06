from django import forms
from .models import Word

class WordForm(forms.ModelForm):
    class Meta:
        model = Word
        fields = ('russia', 'english', 'buttons')

    # def clean(self):
        # obj = Word.objects.all()
        # bar = self.cleaned_data.get('russia')
        # s = []
        # for x in obj:
        #     s.append(x.russia)
        # if bar in s:
        #     raise forms.ValidationError('You have already had this')

        # if len(self.cleaned_data.get('buttons').split()) != 6:
        #     raise forms.ValidationError('You must enter only six words')
        # return self.cleaned_data
