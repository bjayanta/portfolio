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
        # delete data
        if(request.GET.get('method') == 'delete' and request.GET.get('id')):
            row = ContactModel.objects.filter(id=request.GET.get('id'))
            row.delete()

        # edit
        if(request.GET.get('method') == 'edit' and request.GET.get('id')):
            row = ContactModel.objects.filter(id=request.GET.get('id')).get()
            return render(request, 'edit.html', {'title': 'Edit', 'record': row})

            # row.update(
            #     name = request.POST['name'],
            #     email = request.POST['email'],
            #     address = request.POST['address'],
            #     city = request.POST['city'],
            #     zipcode = request.POST['zipcode']
            # )

        # get data from db
        # record = ContactModel.objects.all()
        record = ContactModel.objects.order_by('-id')

        # return to view
        return render(request, 'contact.html', {'title': 'Contact', 'record': record})

    def post(self, request):
        # edit
        if(request.GET.get('method') == 'edit' and request.GET.get('id')):
            row = ContactModel.objects.filter(id=request.GET.get('id'))
            row.update(
                name = request.POST['name'],
                email = request.POST['email'],
                address = request.POST['address'],
                city = request.POST['city'],
                zipcode = request.POST['zipcode']
            )
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
