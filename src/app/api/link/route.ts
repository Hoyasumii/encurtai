import { createLinkDTO } from "@/dtos/link";
import service from "@/core/link";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
	const body = await request.json();

	const { success, data } = createLinkDTO.safeParse(body);

	if (!success)
		return new Response("Bad Request Error", {
			status: 400,
		});

	const linkId = await service.create(data.target);

	return Response.json(
		{ success: true, data: linkId },
		{
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
				"Access-Control-Allow-Headers": "Content-Type, Authorization",
			},
		},
	);
}
