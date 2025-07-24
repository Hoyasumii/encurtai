import type { NextRequest } from "next/server";
import service from "@/core/link";

type Props = {
	params: Promise<{ id: string }>;
};

export async function GET(_: NextRequest, { params }: Props) {
	const { id } = await params;

	const requestedLink = await service.getLink(id);

	if (!requestedLink) return Response.json({ success: false }, { status: 404 });

	return Response.json({ success: true, data: requestedLink });
}
