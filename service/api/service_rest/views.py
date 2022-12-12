from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from common.json import ModelEncoder
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
import json
from .models import Technician, Appointments, Inventory_vinVO

class Inventory_vinVOEncoder(ModelEncoder):
    model = Inventory_vinVO
    properties = [
        "import_href",
        "vin",
    ]

class TechniciansListEncoder(ModelEncoder):
    model = Technician
    properties = [
        "name",
        "id",
    ]

class AppointmentsListEncoder(ModelEncoder):
    model = Appointments
    properties = [
        "vin",
        "customer_name",
        "date",
        "technician_name",
        "reason",
        "in_inventory",
        "id",
    ]

    def get_extra_data(self, o):
        return {"technician_name": o.technician_name.id}


# Create your views here.

def api_list_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechniciansListEncoder
            )
    else:
        content = json.loads(request.body)
        technicians = Technician.objects.create(**content)
        return JsonResponse(
            technicians,
            encoder=TechniciansListEncoder,
            safe=False
        )

def api_list_appointments(request):
    if request.method == "GET":
        appointments = Appointments.objects.all()
        return JsonResponse(
            {"appointments":appointments},
            encoder=AppointmentsListEncoder
        )
    else:
        content = json.loads(request.body)
        try:
            technician = Technician.objects.get(id=content["technician_name"])
            content["technician_name"] = technician

        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid stuff"},
                status=400,
            )


        appointments = Appointments.objects.create(**content)
        return JsonResponse(
            {"appointments":appointments},
            encoder=AppointmentsListEncoder,
            safe=False
        )



def api_list_VINVO(request):
    if request.method == "GET":
        vin = Inventory_vinVO.objects.all()
        return JsonResponse(
            {"vin":vin},
            encoder=Inventory_vinVOEncoder
        )
    else:
        content = json.loads(request.body)
        vin = Inventory_vinVO.objects.create(**content)
        return JsonResponse(
            {"vin":vin},
            encoder = Inventory_vinVOEncoder
        )

