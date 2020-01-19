from django.shortcuts import render, redirect
from django.views import View
from jayanta.models import Contact as ContactModel

# Create your views here.
class Home(View):
    def get(self, request):
        return render(request, 'index.html', {'title': 'Home'})
    
    def post(self, request):
        pass

class Contact(View):
    def get(self, request):
        # get data from db
        # record = ContactModel.objects.all()
        record = ContactModel.objects.order_by('-id')

        # return to view
        return render(request, 'contact.html', {'title': 'Contact', 'record': record})

    def post(self, request):
        if(request.method == 'POST'):
            if(request.GET.get('method') == 'edit'):
                row = ContactModel.objects.filter(id=request.GET.get('id'))
                row.update(
                    name = request.POST['name'],
                    email = request.POST['email'],
                    address = request.POST['address'],
                    city = request.POST['city'],
                    zipcode = request.POST['zipcode']
                )
            elif(request.GET.get('method') == 'delete'):
                row = ContactModel.objects.filter(id=request.GET.get('id'))
                row.delete()
            else:
                # set data from form
                data = ContactModel(
                    name = request.POST['name'],
                    email = request.POST['email'],
                    address = request.POST['address'],
                    city = request.POST['city'],
                    zipcode = request.POST['zipcode']
                )

                # insert data
                data.save()

        # return to view
        return redirect('/contact')
