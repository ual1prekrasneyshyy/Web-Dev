from django.http import JsonResponse
from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from api.serializers import CompaniesSerializer, VacanciesSerializer

from api.models import Company, Vacancy


# Create your views here.
#cbv
class CompaniesListAPIView(APIView):
    def get(self, request):
        companies = Company.objects.all()
        serializer = CompaniesSerializer(companies, many=True)
        return Response(serializer.data)


#cbv
class CompanyDetailsAPIView(APIView):
    def get_company(self, company_id):
        try:
            return Company.objects.get(pk=company_id)
        except Company.DoesNotExist as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, company_id):
        company = self.get_company(company_id)
        serializer = CompaniesSerializer(company)
        return Response(serializer.data)


#fbv
def get_top_ten_vacancies(request):
    vacancies = Vacancy.objects.all().order_by('-salary')[:10]
    serializer = VacanciesSerializer(vacancies, many=True)
    return JsonResponse(serializer.data, safe=False)
