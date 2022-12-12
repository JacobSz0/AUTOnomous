from django.db import models
from django.urls import reverse

class AutoVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True)
    color = models.CharField(max_length=200)


class SalesPerson(models.Model):
    name=models.CharField(max_length=200)
    employee_id=models.IntegerField(unique=True)

    def get_api_url(self):
        return reverse("api_show_sales_person", kwargs={"pk": self.pk})

    def __str__(self):
        return self.name

    class Meta:
        ordering = ("name",)


class Customer(models.Model):
    name=models.CharField(max_length=200)
    address=models.CharField(max_length=200)
    phone=models.CharField(max_length=12)

    def get_api_url(self):
        return reverse("api_show_customer", kwargs={"pk": self.pk})

    def __str__(self):
        return self.name

    class Meta:
        ordering = ("name",)


class Sale(models.Model):
    auto = models.ForeignKey(
    AutoVO,
    related_name="auto",
    on_delete=models.CASCADE
    )

    sales_person = models.ForeignKey(
        SalesPerson,
        related_name="saler",  # do not create a related name on State
        on_delete=models.CASCADE,
    )

    customer = models.ForeignKey(
        Customer,
        related_name="cust_name",
        on_delete=models.CASCADE
    )

    price = models.IntegerField()

    def get_api_url(self):
        return reverse("api_show_sale", kwargs={"pk": self.pk})

    def __str__(self):
        return self.name
