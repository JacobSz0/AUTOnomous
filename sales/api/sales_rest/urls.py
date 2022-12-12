from django.urls import path
from .views import (
    api_list_sales_person,
    api_list_customer,
    api_list_sales,
    api_list_AutoVO
)

urlpatterns = [
    path("sales_rest/sales_person/", api_list_sales_person, name='api_list_sales_person'),
    path("sales_rest/customer/", api_list_customer, name='api_list_customer'),
    path("sales_rest/sales/", api_list_sales, name='api_list_sales'),
    path("sales_rest/autovo/", api_list_AutoVO, name='api_list_AutoVO')
]