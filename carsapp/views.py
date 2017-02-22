from django.shortcuts import render

# Create your views here.
def get_index(request):
    return render(request, "index.html")

def get_front(request):
    return render(request, "frontpage1.html")

def get_cards(request):
    return render(request, "cards.html")

def get_quiz(request):
    return render(request, "quiz.html")
