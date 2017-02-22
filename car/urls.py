"""car URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from carsapp import views
from django.contrib.staticfiles import views as static_views

urlpatterns = [
    url(r'^admin/', include( admin.site.urls)),
    url(r'^$', views.get_index),
    url(r'^front/', views.get_front),
    url(r'^cards/', views.get_cards),
    url(r'^quiz/', views.get_quiz),
    url(r'^static/(?P<path>.*)$', static_views.serve),
]
