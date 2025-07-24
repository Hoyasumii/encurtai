import mongoose from "mongoose";

const linkSchema = new mongoose.Schema({
	id: { type: String, required: true },
	target: { type: String, required: true },
	engagement: { type: Number, default: 0 },
	lastAccess: Date,
	hits: [Date],
});

export type Link = mongoose.InferSchemaType<typeof linkSchema>;
export const Link = mongoose.model("Link", linkSchema);
