# Convergence_Node.js

Requirements:
  1. Use Node.js
  
    - Yes, (Overall Tech Stacks are Node.js, Express, MongoDB)
  
  2. A User should be able to create "todo" items, which can be viewed (read) by all users.
  
    - Yes, (Every user can access to a list of todos without any crendentials)
  
  3. Only the owner of a todo item can update or delete a todo item
  
    - Yes, (Only original composer can access with token and writer verification process)
  
  4. A user can use the REST API to search todo items by different filters. (e.g. description, category - up to you)
  
    - Yes, (Users can put sort criteria and pagination logic src/middlewares/query.js)
  
  5. A login endpoint with simple authentication logic
  
    - Yes, (User token must be authenticated with jwt verification src/middlewares/privateAccess.js)
  
  6. Validation and error handling where it is considered appropriate
  
    - Yes, (Parameters are to be validated through src/middlewares/validate.js, and errors are passed to src/middlewares/error.js)
  
Bonus:
  1. Use GraphQL
  
    - Processing...
  
  2. Database connection/configuration setup (DB engine of choice - again, no hosted DB is expected to be provided)
  
    - Yes, (Once the server app starts, it connects database url src/utils/database.js)
