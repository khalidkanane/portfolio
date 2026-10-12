import { NextResponse } from "next/server";
import { getGitHubData } from "@/lib/github";

export async function GET() {
  try {
    return NextResponse.json(await getGitHubData());
  } catch {
    return NextResponse.json(
      { error: "GitHub data is temporarily unavailable." },
      { status: 503 },
    );
  }
}
