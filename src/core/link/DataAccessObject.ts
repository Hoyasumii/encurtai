import { nanoid } from "nanoid";
import { useConnection } from "@/core";
import { Link } from "./MongoSchema";

export class DAO {
  @useConnection()
  public async create(target: string) {
    const linkId: string = nanoid(5);
    const lastAccess = new Date();

    await Link.create({ target, id: linkId, lastAccess });

    return linkId;
  }

  @useConnection()
  public async remove(id: string) {
    return (await Link.deleteOne({ id })).deletedCount === 1;
  }

  @useConnection()
  public async removeUnvisitedLinks() {
    const period = new Date();
    period.setDate(period.getDate() - parseInt(process.env.DAYS_TO_REMOVE_LINK));

    return (await Link.deleteMany({ lastAccess: { $lt: period } }).exec())
      .deletedCount;
  }

  @useConnection()
  public async getEngagement(id: string) {
    const link = await Link.findOne({ id }, "engagement");
    return link?.engagement ?? NaN;
  }

  @useConnection()
  public async getLink(id: string) {
    const link = await Link.findOne({ id }, "type target engagement");
    const now = new Date();

    if (!link) return null;

    await Link.updateOne(
      { id },
      {
        lastAccess: now,
        engagement: link.engagement + 1,
        $push: { hits: now },
      }
    );

    return link.target;
  }
}
