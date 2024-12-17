import { NextResponse } from "next/server";
import { ROTATION_API_URL } from "@/constants/apiUrls";
import { ChampionRotation } from "@/types/rotation";

export async function GET() {
  const RIOT_API_KEY = process.env.NEXT_PUBLIC_RIOT_API_KEY;

  if (!RIOT_API_KEY) {
    return NextResponse.json(
      { error: "Riot API key is missing in environment variables." },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(ROTATION_API_URL, {
      method: "GET",
      headers: {
        "X-Riot-Token": RIOT_API_KEY,
      },
      next: {
        revalidate: 86400,
      },
    });

    if (!response.ok) {
      throw new Error(`패치 데이터가 없습니다 ${response.status}`);
    }

    const data: ChampionRotation = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Error fetching champion Rotation data", error.message);

    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
