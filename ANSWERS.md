<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
-   Express is a middleware framework of function calls with access to the request and response objects in an application. These function execute code, make changes to the req and res objetcs. end the req-res cycle and call the next function.
-   -Sessions in express are cookie based middle that can be stored on the server or the client. It stores session data on the client within a cookie while storing only a session identintifier within a server
-   -bcrypt is a library that hashes passwords in an app.
-   -JWT allows us to securely transmit information between two parties as a JSON object.

2.  What does bcrypt do in order to prevent attacks?
-bcrypt hashes passwords, making the nearly impossible to crack.

3.  What are the three parts of the JSON Web Token?
- A JWT has a Header, a payload, and a signature. The header has two parts, a hashing algorithm and the type of token. The payload contains claims which are statements about an entity and other data. There are three types of claims: Registed, public and private. Registered claims are predefined and not mandatory. Some of them are iss(issuer), exp (expiration time), sub (subject), aud (audience). Public claims are identified at will and private claims are created to share information betwwen parties that agree on using them.
