import { serve } from "https://deno.land/x/sift@0.1.6/mod.ts";

serve({
  "/": () => new Response("200 OK", {headers: {"content-type": "text/plain; charset=utf-8"}}),
});
