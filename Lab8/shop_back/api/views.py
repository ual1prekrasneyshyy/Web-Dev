from django.http import JsonResponse
from django.shortcuts import render

from api.models import Product


# Create your views here.
def products_list():
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)
