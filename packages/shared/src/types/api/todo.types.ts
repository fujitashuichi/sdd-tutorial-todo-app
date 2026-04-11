import { z } from "zod";
import { TodoWithoutTimeSchema } from "../domain/index.js";


export const PostTodoReqSchema = TodoWithoutTimeSchema.omit({
  id: true
});
export type PostTodoReq = z.infer<typeof PostTodoReqSchema>;
