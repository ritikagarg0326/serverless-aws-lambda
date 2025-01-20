import { CustomRequest } from "../../server";
import { Response } from "express";

export let getCategoryController = async (req: CustomRequest,resp: Response)=>{ 
    
        let reponse = await req.db.query(`select * from categories`);
        resp.send(reponse[0]);
        
    
}
    
