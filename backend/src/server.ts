import express, { NextFunction, Request, response, Response } from "express";
import { db } from "./db";
import { Connection } from "mysql2/promise";
import { routes } from "./routes/index.routes";
export interface CustomRequest extends Request {
    db: Connection;
    
  }
let app= express();
async function dbMiddleware(
    req: CustomRequest,
    resp: Response,
    next: NextFunction
  ) {
    req.db = await db;
    next();
  }

// app.get('/test', async(req,resp)=>{
//     let connection =await db;
//     let reponse =await connection.query('select * from categories');

//     resp.send(reponse[0]);
// });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(dbMiddleware as any);

app.use('/api', routes);
app.post("/api/categories", async (req: any,resp: Response)=>{
    let title = req.body.title;
    let db: Connection = req.db;
    let reponse: any = await db.query(`insert into categories (title) values('${title}')`

    );
    let categoryId = reponse[0].insertId;
    let categoryResponse: any = await db.query(`select * from categories where id = ${categoryId}`);
    resp.send(categoryResponse[0][0]);
});


app.delete("/api/categories/:categoryId", async (req: any,resp: Response)=>{
    let categoryId = req.params.categoryId;
    let reponse = await req.db.query(`delete from categories where id= ${categoryId}`);
    resp.send('category is deleted');
    
});

app.patch("/api/categories", async (req: any,resp: Response)=>{
    let data= req.body;
    let reponse = await req.db.query(
        `update categories set title= '${data.title}' where id = ${data.id}`
    );
    resp.send('category is updated');
    
});

app.get("/api/categories", async (req: any,resp: Response)=>{
    
    let reponse = await req.db.query(`select * from categories`);
    resp.send(reponse[0]);
    
});



app.listen(3200, () =>{
    console.log('http://localhost:3200');
});