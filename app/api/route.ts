export const runtime = "nodejs";

export async function GET(request: Request) {
  return Response.json({ hi: true });
}
