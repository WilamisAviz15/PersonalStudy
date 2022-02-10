from django.shortcuts import render
from django.http import HttpResponse
from .models import Room
from .forms import RoomForm
# Create your views here.

# rooms = [
#     {'id':1, 'name':'Lets learning python!'},
#     {'id':2, 'name':'Design with me!'},
#     {'id':3, 'name':'Frontend developers!'},
# ]

def home(request):
    rooms = Room.objects.all()
    context = {'rooms': rooms}
    return render(request, 'base/home.html', context)

def room(request, pk):
    room = Room.objects.get(id=pk)
    context = {'room':room}
    return render(request, 'base/room.html', context)

def createRoom(request):
    form = RoomForm()
    if request.method == 'POST':
        print(request.POST)
        
    context = {'form': form}
    return render(request, 'base/room_form.html', context)
