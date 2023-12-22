import express, { Request, Response } from "express";
import pool from '../modules/pool';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  const sqlText = (`
      SELECT * FROM "tasks";
  `);
  pool.query(sqlText)
    .then((dbres: any) => res.send(dbres.rows))
    .catch((dberror: any) => {
    console.log('Oops you did a goof: ', dberror);
    res.sendStatus(500)
  });
});

router.post('/', (req: Request, res: Response) => {
  const sqlText =`
    INSERT INTO "tasks" ("name")
    VALUES ($1);
  `;
  const sqlValues = [
    req.body.name
  ];
  pool.query(sqlText, sqlValues)
    .then(() => res.sendStatus(201))
    .catch((dberror: any) => {
    console.log('Oops you did a goof: ', dberror);
    res.sendStatus(500)
  });
});

export default router;
