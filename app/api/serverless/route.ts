export const runtime = "nodejs";

export function GET(request: Request) {
  return new Response(
    JSON.stringify(Object.fromEntries(request.headers.entries()), null, 2),
    {
      status: 200,
      headers: { "content-type": "text/plain" },
    }
  );
}
