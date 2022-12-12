 # CarCar

 Team:

 Will Howe - Service
 Jacob Sullenszino - Sales

 ## How to Run this Application:
1. Open the following applications:
- Docker Desktop
- a terminal (Powershell if using Windows)

You may have to wait a minute for Docker to fully load up

2. Input thse commands into the terminal:
mkdir "projects"
cd projects
git clone https://gitlab.com/JacobSz001/project-beta2
docker container prune -f
docker volume prune -f
docker image prune -f
docker network prune -f
docker volume create beta-data
docker compose build
docker compose up

3. Wait about 2-4 minutes (approx.)

4. Open a new tab and put this link in a Chrome browser: http://localhost:3000/

5. The website is ready. Have fun and don't stress out.


 ## Application Diagram

 Put image or link to application diagram here. Identify your VOs here in the diagram.


 ## Services
GHI: localhost:3000 (React Front End)
Inventory API: http://localhost:8100/
Sales API: http://localhost:8090/
Service API: http://localhost:8080/


 ## API Documentation
Inventory API links:
1. Manufacturer List/Create: http://localhost:8100/api/manufacturers/
{
  "name": "Chrysler"
}

2. Vehicle Models List/Create: http://localhost:8100/api/models/
{
  "name": "Sebring",
  "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
  "manufacturer_id": 1
}
3. Automobiles List/Create: http://localhost:8100/api/automobiles/
 {
  "color": "red",
  "year": 2011,
  "vin": "1C3C2AN120174",
  "model_id": 1
}


Sales API links:
1. Sales Person List/Create: http://localhost:8090/api/sales_rest/sales_person/
   Dumby data:
{
  "name": "Mario",
  "employee_id": "65349053"
}

2. Customer List/Create:  http://localhost:8090/api/sales_rest/customer/
   Dumby Data:
   {
    "name": "Samus",
    "address": "5566 ave",
    "phone": "2065554783"
}

3. Sales List/Create: http://localhost:8090/api/sales_rest/sales
   Dumby Data:
{
  "auto": "/api/automobiles/1C3C2AN120174/",
  "sales_person": "1",
	"customer": "1",
	"price": "9488"
}


 ## Value Objects

 If you didn't identify the VOs in your diagram, then identify them here.