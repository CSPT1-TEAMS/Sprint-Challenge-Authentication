<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.

    Middleware is used to intercept and change the functionality of the request object. It can be used to protect routes and ensure that certain requirements are met before a request can be completed.
    Sessions is server side storage of information to aid in authentication.
    bcrypt is a library used to hash passwords for database saving; this allows a password to be linked to a user without storing the plain text password which could then be discovered through nefarious code.
    JWT is defined as json web token; it's a hash that is attached to a request to autheniticate a user which then can be used to allow users to access restricted content; as long as coded requirements are met.

2.  What does bcrypt do in order to prevent attacks?
    bcrypt takes a plain text password and applies it to a complicated hashing algorithm; adding characters and masking the password so that it cannot be easily decyphered without being ran through the proper compare function. 

3.  What are the three parts of the JSON Web Token?
    JWT consists of a payload, secret, and signature.
