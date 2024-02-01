# Api Wave: Project details


### Models

***
***

### User Admin

* id (UUIDD)
* user_name
* name
* password
* email (unique)

***

### Client

* id(UUID)
* cuit
* name
* dni
* address
* phone
* user_name
* password

***

### Patient

* id (UUID)
* name
* dni
* phone
* address
* email (unique)

***
***

## Routes

### ***User Admin***

#### *user/list (get)*
    List of all registered users
#### *user/details/:id (get)*
    Details of a specific user
#### *user/create (post)*
    Create a new user
#### *user/delete/:id (put)*
    Logical deletion of the user
#### *user/update/:id (put)*
    Update some user information

***
### ***Client***

#### *client/list (get)*
    List of all registered client
#### *client/details/:id (get)*
    Details of a specific client
#### *client/create (post)*
    Create a new client
#### *client/delete/:id (put)*
    Logical deletion of the client
#### *client/update/:id (put)*
    Update some client information

***
### ***Patient***

#### *patient/list (get)*
    List of all registered patient
#### *patient/details/:id (get)*
    Details of a specific patient
#### *patient/create (post)*
    Create a new patient
#### *patient/delete/:id (put)*
    Logical deletion of the patient
#### *patient/update/:id (put)*
    Update somepatient information




