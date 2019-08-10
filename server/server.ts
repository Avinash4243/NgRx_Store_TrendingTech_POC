

import * as express from 'express';
import {Application} from "express";
import {getAllTechnologies, getTechnologyById} from "./get-technologies.route";
import {searchLessons} from "./search-lessons.route";
import {loginUser} from "./auth.route";
import {saveTechnology} from "./save-course.route";

const bodyParser = require('body-parser');



const app: Application = express();


app.use(bodyParser.json());


app.route('/api/login').post(loginUser);

app.route('/api/technologies').get(getAllTechnologies);

app.route('/api/technologies/:id').put(saveTechnology);

app.route('/api/technologies/:id').get(getTechnologyById);

app.route('/api/lessons').get(searchLessons);




const httpServer = app.listen(9000, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});




