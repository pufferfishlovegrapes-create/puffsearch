<h1 align="center">Puff Search</h1>

<p align="center">
  <img alt="Puff Search pufferfish logo" src="assets/img/puffsearch-logo.png" />
</p>

<p align="center">
  A clean, customizable web hub with apps, a fast browser, extensive customization options, and more.
</p>
 
<hr>

## Roadmap

* [x] Apps
* [x] Proxy
* [x] Movies
* [x] Chatroom

## Deployment

The static site can be hosted on many providers. The Scramjet proxy also needs a long-running Node.js host that supports WebSocket upgrades and serves the site over HTTPS.

Follow the steps below to deploy.

### Run Locally

Clone the repository:

```sh
git clone https://github.com/pufferfishlovegrapes-create/puffsearch.git
```

Enter the directory:

```sh
cd puffsearch
```

Install dependencies and run the site with its same-origin Wisp endpoint:

```sh
npm install
npm start
```

The server listens on port 8000 by default. Production hosting must support a long-running Node.js process and HTTPS WebSocket upgrades for `/wisp/`; static-only hosting cannot run the Wisp relay.

---
Puff Search is based on the original upstream project by x8r ([source repository](https://github.com/x8rr/cherri)). This fork removes the bundled games and adds a self-hosted Wisp backend.

---
 
