import type { SetContentType } from "@/types";
import { join } from "node:path";
import { readFileSync, existsSync } from "node:fs";

export function readFile(
  set: { headers: { "content-type": SetContentType } },
  file: string,
  type: SetContentType
) {
  const filePath = join(__dirname, file);

  if (!existsSync(filePath)) throw new Error("Inexistent File");

  set.headers["content-type"] = type;
  return readFileSync(filePath);
}
