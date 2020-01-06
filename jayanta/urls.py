from django.urls import path, include
from jayanta.views import Home, Contact

urlpatterns = [
    path('', Home.as_view(), name='home'),
    path('contact/', Contact.as_view(), name='contact'),
]
