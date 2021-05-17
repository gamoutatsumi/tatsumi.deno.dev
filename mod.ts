import { serve } from "https://deno.land/x/sift@0.3.0/mod.ts";

serve({
  "/": () => new Response("あかしけ やなげ 緋色の鳥よ\nくさはみ ねはみ けをのばせ", {headers: {"content-type": "text/plain; charset=utf-8"}}),
});
