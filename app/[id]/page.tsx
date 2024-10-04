/* eslint-disable @next/next/no-img-element */

import services from "@/services";
import { redirect } from "next/navigation";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const response = await services.get(`/link/${id}`);

  if (response.status !== 200) redirect("/");

  const { type, target } = response.data;

  if (type === "url") redirect(target);

  return (
    <img
      src={target}
      alt="image"
    />
  );
}
