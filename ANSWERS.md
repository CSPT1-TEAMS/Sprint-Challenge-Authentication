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
  checks them against the database to determine access. Cookies are also used in **session** creation.

- **Sessions** to me seem kind of similar to cookies in that some user-specific data gets stored on the client, 
  but the similarity ends there; each user gets a session id which is then sent back to the server for 
  validation. 

- **bcrypt** To my understanding bcrypt is just a password-hashing function. It was designed by Niels Provos 
  and David Mazieres and is based on the Blowfish cipher--which is really cool by the way. bcrypt uses 
  symmetrical encryption; the same key is used for both encryption and decryption. The Blowfish cipher, 
  as its name suggests, uses variable key lengths from 32 bits up to 448 bits. I don't completely understand
  just what the hell that means, but I've checked out some diagrams on the Internet and it seems like some
  pretty cool stuff. Word.

- **JWT** stands for JSON Web Token. Per my understanding JWTs are used to verify that the data was sent
  by an authentic sourse. A JWT is really just a string in the format of header.payload.signature. Based on
  notes taken from what I've read about JWTs, the header and the payload are both encoded and both of those are
  passed to a hashing function which generates a signature based on the header and the payload plus a secret key
  that both the server and the client have. The signature is used to authenticate the user. My understanding 
  gets fuzzy after that.

2.  What does bcrypt do in order to prevent attacks?
- Cryptographic password hashes can be susceptible to brute-force attacks and hash-collision attacks, or two 
  different strings producing the same cryptographic hash. bcrypt makes brute-force attacks slower and minimizes
  hash collision using a technique called *key stretching*. bcrypt uses *x* amount of rounds for encrypting to 
  make the hash more secure. Pretty cool stuff!

3.  What are the three parts of the JSON Web Token?
