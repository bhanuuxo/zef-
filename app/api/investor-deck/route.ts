import { readFile } from "fs/promises";
import path from "path";

export const runtime = "nodejs";

const deckPath = path.join(process.cwd(), "Deck", "Phase 2 Deck.pdf");

export async function GET(request: Request) {
  const url = new URL(request.url);
  const download = url.searchParams.get("download") === "1";
  const file = await readFile(deckPath);

  return new Response(file, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `${download ? "attachment" : "inline"}; filename="Phase 2 Deck.pdf"`,
      "Cache-Control": "no-store",
    },
  });
}