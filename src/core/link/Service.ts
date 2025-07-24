import type { DAO } from "./DataAccessObject";
import { z } from "zod";

export class Service {
  constructor(private dataAccessObject: DAO) { }

  public async create(target: string): Promise<string | null> {
    const targetSchema = z.string().url();
    const targetIsValid = targetSchema.safeParse(target).success;

    if (!targetIsValid) return null;

    try {
      const request = await this.dataAccessObject.create(target);
      return request;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_: unknown) {
      console.log(_);
      return null;
      // return await this.create(target);
    }
  }

  public async removeUnvisitedLinks() {
    return await this.dataAccessObject.removeUnvisitedLinks();
  }

  public async remove(id: string) {
    return await this.dataAccessObject.remove(id);
  }

  public async getEngagement(id: string) {
    return await this.dataAccessObject.getEngagement(id);
  }

  public async getLink(id: string) {
    return await this.dataAccessObject.getLink(id);
  }
}
