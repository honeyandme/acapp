from django.urls import path
from game.views import index,begin

urlpatterns = [
    path("",index,name="index"),
    path("play/",begin,name="begin"),
]

