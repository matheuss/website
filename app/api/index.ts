export function GET() {
  return new Response(new Date().toJSON(), {
    status: 200,
    headers: { "content-type": "text/plain" },
  });
}
