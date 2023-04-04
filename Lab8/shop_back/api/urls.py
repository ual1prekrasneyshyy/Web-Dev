from django.urls import path

from api import views

urlpatterns = [
    path('products/', views.get_products_list),
    path('products/<int:id>/', views.get_product_by_id),
    path('categories/', views.get_categories_list),
    path('categories/<int:id>/', views.get_category_by_id),
    path('categories/<int:id>/products/', views.get_products_list_by_category_id)

]