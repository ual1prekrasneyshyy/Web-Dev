from django.db import models


# Create your models here.
class Company(models.Model):
    name = models.CharField(max_length=255, default='')
    description = models.TextField(default='')
    city = models.CharField(default='Almaty', max_length=40)
    address = models.TextField(default='')

    class Meta:

