from rest_framework import serializers

from api.models import Company, Vacancy


class VacanciesSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
    description = serializers.CharField()
    salary = serializers.FloatField()
    company_name = serializers.CharField(source='company.name')


class CompaniesSerializer(serializers.ModelSerializer):
    vacancies = VacanciesSerializer(many=True)

    class Meta:
        model = Company
        fields = ('id', 'name', 'description', 'city', 'address', 'vacancies')
