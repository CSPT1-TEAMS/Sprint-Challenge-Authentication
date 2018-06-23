<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
Middleware is a program that intercepts the data coming from the client before it gets to the server and does <e>something</e> before potentially sending it on it's way to the server.

Sessions is a type of middleware that creates a cookie, saved on a server, that can authenticate if a user has been to the site/logged in (whatever it wants to keep track of).  

bcrypt is a middleware that hashes data to make it secure.  It goes through x amounts of rounds through the hashing algorithm to make it even more secure.  For reasons unknown to man, these rounds are called SALT.

JWTs are similar to sessions in that they keep track if a visitor is authorized (logged in/has visited before).  They differ, though, in that they are kept on the client-side in a token, rather than in a cookie saved on the server.  

2.  What does bcrypt do in order to prevent attacks?
bcrypt is a middleware that hashes data to make it secure.  It goes through x amounts of rounds to make it even more secure.  Hashed passwords cannot be un-hashed.  Passwords are checked by running the inputted, plain-text guess into the same hashing function and seeing if the two hashed passwords match.  Hashing functions must be idempotent so that given the same input, the result will always be the same.

3.  What are the three parts of the JSON Web Token?
header.payload.signature

The header contains, among other possible things, the authentication token.

The payload is the actual data being sent.

The signature is a combined string with the header, payload, and secret used to decrypt the info.
