from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^index/$', views.index, name='index'),
    url(r'^search_form/$', views.search_form, name='search_form'),
    url(r'^search/$', views.search),
    url(r'^demo/$', views.demo, name='demo'),
    url(r'^addition/$', views.addition, name='addition'),
    url(r'^rootroom/$', views.rootroom, name='rootroom'),
    url(r'^listdata/$', views.listdata, name='listdata'),
    url(r'^data_edit/(?P<pk>[0-9]+)/edit/$', views.data_edit, name='data_edit'),
]
