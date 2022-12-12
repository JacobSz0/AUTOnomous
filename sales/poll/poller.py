import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "sales_project.settings")
django.setup()

# Import models from sales_rest, here.
# from sales_rest.models import Something
from sales_rest.models import AutoVO

def get_auto():
    response = requests.get("http://inventory-api:8000/api/automobiles/")
    content = json.loads(response.content)
    for auto in content["autos"]:
        AutoVO.objects.update_or_create(
            import_href=auto["href"],
            defaults={"vin":auto["vin"]},
        )


def poll():
    while True:
        print('Sales poller polling for data')
        try:
            get_auto()
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(60)


if __name__ == "__main__":
    poll()
