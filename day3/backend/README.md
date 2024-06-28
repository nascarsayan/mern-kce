### Step by Step

The idea here is to replicate the behaviour of `json-server` using `express` and `node.js`.

1. Creating a new Node.js project
    1. Run `npm init` to create a new package.json file in the current directory.
    2. Add some dummy console.log code in a file `index.js` in the current directory.
    3. Add a new script `"start": "node index.js",` in the `package.json` file.
    4. Run `npm start` to run the dummy code.

2. Add express. Refer to the [official documentation](https://expressjs.com/en/starter/installing.html) for more details.
    1. Run `npm install express` to install express.
    2. Add the sample backend code in the `index.js` file.
    3. Set `"type": "module",` in the `package.json` file to use ES6 import/export syntax.
    4. Run `npm start` to run the express server.

3. Create a `requests.http` and keep on adding the HTTP URLs to test the backend.<br/>
    In our backend, we are using the port 2000 to run the server. So, all requests will be made to `http://localhost:2000/<some-URL-path>`.

4. Add sample routes for assignments : LIST and GET by ID.

5. Add PUT, POST and DELETE routes for assignments.
    1. Install `body-parser` and use it as a middleware to parse the request body as JSON. [Reference](https://expressjs.com/en/resources/middleware/body-parser.html)
    This is required to parse the request body in POST and PUT requests. `npm i body-parser`

6. Add a GET `/groups` route to get all the groups.
