import { z } from "zod";

export const createLinkDTO = z.object({
  target: z.string().url(),
});

export type createLinkDTO = z.infer<typeof createLinkDTO>;
