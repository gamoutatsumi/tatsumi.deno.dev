import { serve } from "https://deno.land/std@0.91.0/http/mod.ts";

const server = serve({ port: 8888 });

for await (const req of server) {
  await req.respond({
    status: 200,
    headers: new Headers({
      "content-tyoe": "text/plain",
}),
    body: "200 OK",
})
}
