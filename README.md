#Lessurl

##Installation

###for Django

Django requires these modules:

`pip install djangorestframework `

`pip install django-cors-headers`

`pip install djangorestframework-jwt`

then to run the server 

``

###for Angular 2

`npm install`

`npm start`

##About the code

django provides a REST API to reduce urls the main routes are

- POST localhost:8000/reducer/ with a long url to generate the short URL code
- GET localhost:8000/reducer/:shorturl to obtain the long url for redirection

it also implements JWT authentication:

- POST localhost:8000/users/register/ to register a new user with username, email and password
- POST localhost:8000/login/ to obtain JWT token given the username and password

with JWT token in headers, these functionalities are enable:

- POST localhost:8000/reducer/ now link the shortUrl generated to the user
- GET localhost:8000/stats shows the shortUrls linked to you and how many times they were reached

you can access the admin webstite at this url: localhost:8000/admin
you can login with this superuser: 

- username: admin 
- password: adminadmin

Angular provides a simple web interface to access these requests, I had no time to add CSS so it is a bit ugly..

Let me know if you have any question about the code!





