from django.db import models
from django.urls import reverse

# Create your models here.

class Inventory_vinVO(models.Model):
    import_href = models.CharField(max_length=100, unique=True)
    vin = models.CharField(max_length=210)


class Technician(models.Model):
    name = models.CharField(max_length=100)
    employee_number = models.IntegerField(unique=True)

    def get_api_url(self):
        return reverse("api_show_technician", kwargs={"pk": self.pk})

    def __str__(self):
        return self.name


class Appointments(models.Model):
    vin = models.CharField(max_length=17)
    customer_name = models.CharField(max_length=100)
    date = models.DateTimeField()
    technician_name = models.ForeignKey(
        Technician,
        related_name="technician",
        on_delete=models.CASCADE
        )
    reason = models.CharField(max_length=200)
    in_inventory = models.BooleanField()

    def get_api_url(self):
        return reverse("api_show_appointments2", kwargs={"pk": self.pk})

    def __str__(self):
        return self.name



