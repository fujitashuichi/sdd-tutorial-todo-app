import { z } from "zod";
import { TodoWithoutTimeSchema } from "../domain";


export const PostTodoReqSchema = TodoWithoutTimeSchema.omit({
  id: true
});
export type PostTodoReq = z.infer<typeof PostTodoReqSchema>;
