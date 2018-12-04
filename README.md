# Oseven-Login-App
Using AngularJS framework, Bootstrap 4 and Sass to build a Web-APP with two pages:
- Login
- Employees

The "Login" page will have a form with two inputs
"username" and "password"
and a "Login" button.

The credentials ("username" and "password") will be sent with a 
POST call to "src/login.json". 
Also i use a GET call to "src/login.json" in order to login.

After the login the user will be redirect to the "Employees" page and a 
GET call has to be sent to "src/employees.json" for retrieve the list of employees.

Selecting one of the menu-items ("All", "Platform", "Apps", "Management") in the left sidebar
the list will be filtered by "Team" so I will be able to see only the members of the selected team.

In order to start with the project follow those steps: 

## 1
This will create the node_modules directory in your current directory (if one doesn’t exist yet)
and will download the package to that directory.
```
$ npm install
```
## 2
Grunt will automatically process your Sass files every time you make a change and save this files.
```
$ grunt watch
```
## 3
Start a connect web server.
```
$ grunt connect
```

## 4
The app is now running. So you must see the login page use 
{
    "username": "admin",
    "password": "admin"
}
