from django.urls import path

from api.views import products_list

urlpatterns = [
    path('products', products_list)
]