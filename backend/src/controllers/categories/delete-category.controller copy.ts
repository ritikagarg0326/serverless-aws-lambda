import { CustomRequest } from "../../server";
import { Response } from "express";

export let deleteCategoryController = async (req: CustomRequest,resp: Response)=>{ 
    let categoryId = req.params.categoryId;
    let reponse = await req.db.query(`delete from categories where id= ${categoryId}`);
    resp.send('category is deleted');
    
}
    
