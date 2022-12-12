from django.urls import path

from .views import (
    api_list_technicians,
    api_list_appointments,
    api_list_VINVO,
)

urlpatterns = [
    path("technicians/", api_list_technicians, name="api_list_technicians"),
    path("appointments/", api_list_appointments, name="api_list_appointments"),
    path("vin/", api_list_VINVO, name="api_list_VINVO"),
]

