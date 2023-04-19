from django.urls import path

from api.views import CompaniesListAPIView, CompanyDetailsAPIView, get_top_ten_vacancies

urlpatterns = [
    path('companies/', CompaniesListAPIView.as_view()),
    path('companies/<int:company_id>/', CompanyDetailsAPIView.as_view()),
    path('vacancies/top_ten/', get_top_ten_vacancies)
]