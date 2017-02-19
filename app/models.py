from django.db import models

class Word(models.Model):
    russia = models.CharField(max_length=255)
    english = models.CharField(max_length=255)
    buttons = models.CharField(max_length=255, null=True)

    def __str__(self):
        return self.russia