import express from "express";
import { createServer } from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { server as wisp } from "@mercuryworkshop/wisp-js/server";

const siteRoot = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT || 8000);
const host = process.env.HOST || "0.0.0.0";

wisp.options.port_whitelist = [80, 443];
wisp.options.stream_limit_per_host = -1;
wisp.options.stream_limit_total = 48;
wisp.options.allow_udp_streams = false;
wisp.options.allow_direct_ip = false;
wisp.options.allow_private_ips = false;
wisp.options.allow_loopback_ips = false;

const app = express();
app.disable("x-powered-by");
app.use((request, response, next) => {
  if (
    request.path === "/node_modules" ||
    request.path.startsWith("/node_modules/") ||
    ["/server.mjs", "/package.json", "/package-lock.json"].includes(request.path)
  ) {
    response.sendStatus(404);
    return;
  }
  next();
});
app.use(express.static(siteRoot, { dotfiles: "ignore" }));

const server = createServer(app);

server.on("upgrade", (request, socket, head) => {
  let url;
  let origin;
  try {
    url = new URL(request.url || "/", "http://localhost");
    origin = new URL(request.headers.origin || "");
  } catch {
    socket.end("HTTP/1.1 403 Forbidden\r\nConnection: close\r\n\r\n");
    return;
  }

  if (
    url.pathname !== "/wisp/" ||
    !["http:", "https:"].includes(origin.protocol) ||
    origin.host.toLowerCase() !== (request.headers.host || "").toLowerCase()
  ) {
    socket.end("HTTP/1.1 403 Forbidden\r\nConnection: close\r\n\r\n");
    return;
  }

  wisp.routeRequest(request, socket, head);
});

server.listen(port, host, () => {
  console.log(`Site and Wisp endpoint listening on http://${host}:${port}`);
});