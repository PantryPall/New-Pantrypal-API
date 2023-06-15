# New-Pantrypal-API
this the Updated API is a backend service that provides endpoint to retrieve data for Pantrypal App

## EndPoint ##
### Getting Started ###
  * Method : GET
  * EndPoint : /
  * Description : Giving developers that the API endpoint is running on the server
  * Response : JSON that send the message succes

### Getting All Bahan ###
  * Method : GET
  * EndPoint : /Dashboard/bahan/all
  * Description : Getting all data bahan to knowing the database server is connected and to serving the model for Mobile Developer
  * Response : JSON that send all list data from bahan

### Getting Bahan according to money ###
  * Method : POST
  * EndPoint : /Dashboard/bahan/
  * Parameter : Harga as Integer (required)
  * Description : Getting all data bahan according to the user input their nominal budget
  * Response : JSON that send list data with selection and condition from input

### Getting Recipe according to the category ###
  * Method : POST
  * EndPoint : /Dashboard/resep/category
  * Parameter : category as string (Terjangkau, Murah, Mahal) (required)
  * Description : Getting list data of recipes according to the category the user is inputed
  * Response : JSON that send list data recipe based on user input

### Getting Recipe according to the loves parameters ###
  * Method : POST
  * EndPoint : /Dashboard/resep/loves
  * Parameter : Loves as integer (required)
  * Description : Getting list data of recipes according to the love the recipe have
  * Response : JSON that send list data recipe based on user input

-----

to build the connection on database server you can change the host, user, password and database in config folder, and you can add other database in the config folder.

  
