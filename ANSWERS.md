<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.

- **Middleware** is software that acts like a bridge between a database (or operating system) 
  and applications. In my own experience here in Lambda School middleware has been implemented
  as a simple function (or a group of functions), usually written in their own file and then 
  exported, that intercepts either the request or the response data and then does something
  with that data before passing it along to the application.

- **Cookies** are small files stored on a user's computer. They hold a small amount of data particular to 
  a client and a website, and can be accessed by either the server or the client. Cookies hold data in key/value
  pairs, and are set with either JavaScript or by the server using an HTTP header. Cookies can be insecure 
  as users can easily manipulate their content. (One should always validate cookie data) Cookies are normally 
  used to preserve login state, where a username and special hash are sent from the client, and the server 
  checks them against the database to determine access.

2.  What does bcrypt do in order to prevent attacks?

3.  What are the three parts of the JSON Web Token?
