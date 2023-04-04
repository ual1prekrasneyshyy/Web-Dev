from django.http import JsonResponse
from django.shortcuts import render

from api.models import Product, Category


# Create your views here.
def get_products_list(request):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)


def get_product_by_id(request, id):
    product = Product.objects.get(id=id)
    return JsonResponse(product.to_json())


def get_categories_list(request):
    categories = Category.objects.all()
    categories_json = [c.to_json() for c in categories]
    return JsonResponse(categories_json, safe=False)


def get_category_by_id(request, id):
    category = Category.objects.get(id=id)
    return JsonResponse(category.to_json())


def get_products_list_by_category_id(request, id):
    category = Category.objects.get(id=id)
    products = category.product_set.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)


