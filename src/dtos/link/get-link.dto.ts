import { z } from "zod";

export const getLinkDTO = z.object({
	id: z.string().nanoid(),
});

export type getLinkDTO = z.infer<typeof getLinkDTO>;
