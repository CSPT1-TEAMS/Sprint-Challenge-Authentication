<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
*Middleware adds more functionality, or extends what we do, but to have more control in what we do to the data. In our case we added an ```Authenticate``` middleware to see if the token we are given is in fact a correct token.

*Bcrypt
bcrypt will hash, or encrypt whatever value you have given it. For now we use Strings so it will hash a string however many SALT_ROUNDS we tell it to has

*JWT/ Sessions
Almost like sessions, where sessions will pass a cookie to the browser(only making it temporary) to access; in our case stored data. JWT acts exactly the same way, giving us a token instead of a cookie. 

2.  What does bcrypt do in order to prevent attacks?
Bcrypt lets us hash/ encrypt data.

3.  What are the three parts of the JSON Web Token?
header (Authorization in our case). key(payload). signtature(```jwt.sing(payload,SECRET,options)```)