import {Request, Response} from 'express';
import {TECHNOLOGIES} from "./db-data";


export function saveTechnology(req: Request, res: Response) {

    console.log("Saving course ...");

    const id = req.params["id"],
        changes = req.body;

        TECHNOLOGIES[id] = {
        ...TECHNOLOGIES[id],
        ...changes
    };

    res.status(200).json(TECHNOLOGIES[id]);

}

