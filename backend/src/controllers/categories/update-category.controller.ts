import { CustomRequest } from "../../server";
import { Response } from "express";

export let updateCategoryController = async (req: CustomRequest,resp: Response)=>{ 
        let data= req.body;
      await req.db.query(
            `update categories set title= '${data.title}' where id = ${data.id}`
        );
        resp.send('category is updated');
        
    }
