from django.shortcuts import render
from django.views import View

# Create your views here.
class Home(View):
    def get(self, request):
        return render(request, 'index.html', {'title': 'Home'})
    
    def post(self, request):
        pass

class Contact(View):
    def get(self, request):
        return render(request, 'contact.html', {'title': 'Contact'})

    def post(self, request):
        data = {
            'title': 'Contact',
            'name': request.POST['fullname'],
            'email': request.POST['email'],
            'message': request.POST['message'],
        }

        return render(request, 'contact.html', data)
