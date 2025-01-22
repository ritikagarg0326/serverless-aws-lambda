import { Response } from "express";
import { CustomRequest } from "../../server";
import { TagsService } from "../../services/tags.services";

export let getTagsController = async (req: CustomRequest, resp: Response) => {
  let tags = await TagsService.getTags();

  resp.send(tags);
};