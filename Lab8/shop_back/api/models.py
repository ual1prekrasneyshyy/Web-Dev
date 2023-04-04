from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=255, default='')
    price = models.FloatField(default=0.0)
    description = models.TextField(default='')
    count = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)


class Category(models.Model):
    name = models.CharField(max_length=255, default='')
