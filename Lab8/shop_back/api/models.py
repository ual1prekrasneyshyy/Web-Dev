from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=255, default='')
    price = models.FloatField(default=0.0)
    description = models.TextField(default='')
    count = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'is_active': self.is_active
        }


class Category(models.Model):
    name = models.CharField(max_length=255, default='')

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }
