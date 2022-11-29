# cs465-fullstack
CS-465 Full Stack Development with MEAN

This was the final project for CS465. The fictional client Travlr Getaways was in need of a working prototype of its travel website. They needed a customer site that dynamically displays their travel listings from a database and an admin site to manage the travel listings. 

# Development

The entire project was developed with the MEAN stack using the MVC architectural pattern. 

MongoDB - The NoSQL database used to store trip and user data.  An object data modeling library called Mongoose was used to make the schema for the data and seed the database.

Express - This Node.js framework was used to set up the application and manage routes for the API. This framework was used alongside Handlebars to dynamically render HTML templates to the customer site. 

Angular - This framework was used to create the admin SPA. By using this framework, the admin page is loaded one time with mostly everything necessary to display information. This allows for a fast and responsive user experience that causes little strain to the server.

Node.js - This is a runtime environment that allowed the application to run on JavaScript. 

Security - The API endpoints are secured by using Passport and JWT. User credentials are stored within the MongoDB database with passwords undergoing one-way encryption by being salted and hashed. 
