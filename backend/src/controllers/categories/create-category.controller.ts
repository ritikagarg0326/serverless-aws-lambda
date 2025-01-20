import { CustomRequest } from "../../server";
import { Response } from "express";

export let createCategoryController = async (req: CustomRequest,resp: Response)=>{
    let title = req.body.title;
    let reponse: any = await req.db.query(`insert into categories (title) values('${title}')`

    );
    let categoryId = reponse[0].insertId;
    let categoryResponse: any = await req.db.query(`select * from categories where id = ${categoryId}`);
    resp.send(categoryResponse[0][0]);
}