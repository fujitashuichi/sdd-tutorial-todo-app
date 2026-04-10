import { z } from "zod";

export const TodoSchema = z.object({
  id: z.uuid(),
  title: z.string().max(15).min(1),
  isCompleted: z.boolean().default(false),
  createdAt: z.iso.date()
})
export type Todo = z.infer<typeof TodoSchema>;


export const TodoWithoutTimeSchema = TodoSchema.omit({
  createdAt: true
});
export type TodoWithoutTime = z.infer<typeof TodoWithoutTimeSchema>;
