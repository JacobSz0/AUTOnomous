from django.shortcuts import render

from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from .models import SalesPerson, Customer, Sale, AutoVO
import json
from django.http import JsonResponse
from common.json import ModelEncoder

class AutoVODetailEncoder(ModelEncoder):
    model = AutoVO
    properties = ["color", "import_href"]

class SalesPersonListEncoder(ModelEncoder):
    model = SalesPerson
    properties = ["name", "id"]

class CustomerListEncoder(ModelEncoder):
    model = Customer
    properties = ["name", "id"]

class SaleListEncoder(ModelEncoder):
    model = Sale
    properties = ["price", "id", "sales_person", "auto", "customer"]

    def get_extra_data(self, o):
        return {"auto": o.auto.vin, "sales_person": o.sales_person.name, "customer": o.customer.name}


@require_http_methods(["GET", "POST"])
def api_list_sales_person(request):
    if request.method == "GET":
        sales_person=SalesPerson.objects.all()
        return JsonResponse(
            {"sales_person": sales_person},
            encoder=SalesPersonListEncoder,
        )
    else:
        content = json.loads(request.body)
        sales_person = SalesPerson.objects.create(**content)
        return JsonResponse(
            sales_person,
            encoder=SalesPersonListEncoder,
            safe=False,
        )


@require_http_methods(["GET", "POST"])
def api_list_customer(request):
    if request.method == "GET":
        customer=Customer.objects.all()
        return JsonResponse(
            {"customer": customer},
            encoder=CustomerListEncoder,
        )
    else:
        content = json.loads(request.body)
        customer = Customer.objects.create(**content)
        return JsonResponse(
            customer,
            encoder=CustomerListEncoder,
            safe=False,
        )


@require_http_methods(["GET", "POST"])
def api_list_sales(request, auto_vo_id=None):
    if request.method == "GET":
        if auto_vo_id is not None:
            sale = Sale.objects.filter(auto=auto_vo_id)
        else:
            sale=Sale.objects.all()
        return JsonResponse(
            {"sale": sale},
            encoder=SaleListEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            auto_href = content["auto"]
            auto = AutoVO.objects.get(import_href=auto_href)
            content["auto"] = auto

            sales_person = SalesPerson.objects.get(id=content["sales_person"])
            content["sales_person"] = sales_person

            customer = Customer.objects.get(id=content["customer"])
            content["customer"] = customer

        except AutoVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid stuff"},
                status=400,
            )
        sale = Sale.objects.create(**content)
        return JsonResponse(
            sale,
            encoder=SaleListEncoder,
            safe=False,
        )

@require_http_methods(["POST"])
def sales_by_id(request, auto_vo_id=None):
    content = json.loads(request.body)
    if auto_vo_id is not None:
        sale = Sale.objects.filter(auto=auto_vo_id)
    else:
        sale=Sale.objects.filter(sales_person=content["sales_person"])
    return JsonResponse(
        {"sale": sale},
        encoder=SaleListEncoder,
    )