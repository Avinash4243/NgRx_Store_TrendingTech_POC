

import {Request, Response} from 'express';
import {TECHNOLOGIES} from "./db-data";



export function getAllTechnologies(req: Request, res: Response) {

    console.log("Retrieving technologies data ...");

    res.status(200).json({payload:Object.values(TECHNOLOGIES)});

}


export function getTechnologyById(req: Request, res: Response) {

    const technologyId = req.params["id"];

    const technologies = Object.values(TECHNOLOGIES);

    const technology = technologies.find(technology => technology.id == technologyId);

    res.status(200).json(technology);
}