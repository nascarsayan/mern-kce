import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

// Load the sample data from the file
import fs from "fs";
// file is in ../mock-backend/sample-data.json.
// readFileSync will return a stream of bytes
const data = fs.readFileSync('../mock-backend/sample-data.json');
// Parse the buffer to JSON
const { assignments, groups } = JSON.parse(data);

// console.dir is like console.log 
// but it prints the object in a more readable way
console.dir({
    totalAssignments: assignments.length,
    totalGroups: groups.length
});


// Each HTTP Method has a corresponding function in Express
// app.get, app.post, app.put, app.delete will handle
// GET, POST, PUT, DELETE requests respectively.
// The syntax is app.get(URL path, callback-function).

// The callback function will be called when the path is matched.
// The callback function syntax is (req, res) => { ... }
// req is the HTTP request object and res is the HTTP response object.
// res.send will send the string response to the client.
// res.json will send a JSON response to the client.
// res.status will set the status code of the response.
// The default status code is 200 (HTTP Status OK).
app.get("/assignments", (req, res) => {
    res.json(assignments);
});

// in the URL path, we can specify parameters using a colon.
// All parameters are stored by express in req.params as a dictionary.
// For example, if we've defined the path as "/assignments/:id/group/:groupId",
// and the URL is "/assignments/1/group/2",
// then req.params will be { id: "1", groupId: "2" }.
app.get("/assignments/:id", (req, res) => {
    const id = req.params.id;
    const assignment = assignments.find(assignment => assignment.id === id);
    if (!assignment) {
        // Set the status to 404 (HTTP Status Not Found)
        // Then, send the response with the message.
        res.status(404).send("Assignment not found");
    } else {
        res.json(assignment);
    }
});


app.listen(2000, () => {
    console.log("Server is running on port 2000");
});
