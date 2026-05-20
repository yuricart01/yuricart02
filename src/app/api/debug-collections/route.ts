import { NextResponse } from "next/server";
import { getWixServerClient } from "@/lib/wix-client.server";
import { getCollections } from "@/wix-api/collections";

export async function GET() {
  const wixClient = getWixServerClient();
  const collections = await getCollections(wixClient);
  
  const simplifiedCollections = collections.map(c => ({
    id: c._id,
    name: c.name,
    slug: c.slug
  }));

  return NextResponse.json({
    count: simplifiedCollections.length,
    collections: simplifiedCollections
  });
}
