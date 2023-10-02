Bun.serve({
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/")
      return new Response(Bun.file(import.meta.dir + "/src/index.html"));

    const file = Bun.file(import.meta.dir + "/src" + url.pathname);
    return new Response(file);
  },
});
