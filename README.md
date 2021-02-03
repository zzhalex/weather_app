## Notes

_Please do not supply your name or email address in this document. We're doing our best to remain unbiased._

### Date

The date you're submitting this.

Jan 20, 2020 

### Location of deployed application

If applicable, please provide the url where we can find and interact with your running application.

https://intense-shore-79252.herokuapp.com/ 

### Time spent

How much time did you spend on the assignment? Normally, this is expressed in hours.

7 hours

### Assumptions made

Use this section to tell us about any assumptions that you made when creating your solution.

Requirement: Building a web application with a weather search function, including user interface and authentication

Scope:
  * Open weather API for the data source
  * API for the search function and token
  * User interface with basic login/logout function and search function
  * Web hosting

Schedule: within 5 days

Technology: Node, Express, JWT, React, Axios, Material UI, Heroku

Architecutre: Rest API, SPA


### Shortcuts/Compromises made

If applicable. Did you do something that you feel could have been done better in a real-world application? Please
let us know.

* Testing. I only wrote few test functions with mocha and did the API test with the postman. The test functions for the rest API, function and react are needed for the real production.
* The check of input to avoid danger string get in server and database.
* The authentication should be better. There is one user with a hardcoded username and password in this application. No token update function. No database was used for the whole process. 
* Comment on code
* More specified error handling on the client-side



### Stretch goals attempted

If applicable, use this area to tell us what stretch goals you attempted. What went well? What do you wish you
could have done better? If you didn't attempt any of the stretch goals, feel free to let us know why.

1. React user interface
2. Service development, token, weather API 
3. Testing 
4. Deployment

Deployment went well. I could do better on the back end service development and testing. Because the node ecosystem is very powerful, the front end development is smooth. Also, material-UI is a fantastic library, it helps a lot in the UI design and style. But I could still do better on the user interface, such as UI transition, etc.


### Instructions to run assignment locally

If applicable, please provide us with the necessary instructions to run your solution.

```sh
$ git clone 
$ cd weather_app
$ npm install
$ npm start
```
Verify the app by navigating to your server address in your preferred browser.

```sh
127.0.0.1:3000
```

If you want to run the react server

```sh
$ cd my-app 
$ npm install
$ npm start
```
Press Y to run the app on the port 3001

Verify the app by navigating to your server address in your preferred browser.

```sh
127.0.0.1:3001
```

### What did you not include in your solution that you want us to know about?

Were you short on time and not able to include something that you want us to know
about? Please list it here so that we know that you considered it.

I was trying to import the state management to the front end solution. However, because the UI is not complicated, I only use the callback function to do the communication among components.		

### Other information about your submission that you feel it's important that we know if applicable.

None

### Your feedback on this technical challenge

Have feedback for how we could make this assignment better? Please let us know.

It’s a good chance to refresh some skills.

### The feedback and suggestions from XXX 

"Overall, I thought this was a really strong take home test submission for an intermediate engineer. Their README and code are both pretty clear. It would have been great to see some more tests, or to see how they would handle storing user credentials, but as that's a stretch goal I think the solution they have in place is fine. 

One recommendation: including a collection of the requests they used to test the application in Postman could be pretty useful in the future, and would show off if they tested the application comprehensively."

