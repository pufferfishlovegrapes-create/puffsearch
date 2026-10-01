<h1 align="center">Cherri</h1>

<p align="center">
  <img alt="image" src="https://github.com/user-attachments/assets/d0532d69-892b-4b08-ae29-f2191295fbf7" />
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

### Method 1: Deploy Buttons

[![Deploy to Heroku](https://binbashbanana.github.io/deploy-buttons/buttons/remade/heroku.svg)](https://heroku.com/deploy/?template=https://github.com/x8rr/cherri)
[![Run on Replit](https://binbashbanana.github.io/deploy-buttons/buttons/remade/replit.svg)](https://replit.com/github/x8rr/cherri)
[![Remix on Glitch](https://binbashbanana.github.io/deploy-buttons/buttons/remade/glitch.svg)](https://glitch.com/edit/#!/import/github/x8rr/cherri)
[![Deploy to Amplify Console](https://binbashbanana.github.io/deploy-buttons/buttons/remade/amplifyconsole.svg)](https://console.aws.amazon.com/amplify/home#/deploy?repo=https://github.com/x8rr/cherri)
[![Run on Google Cloud](https://binbashbanana.github.io/deploy-buttons/buttons/remade/googlecloud.svg)](https://deploy.cloud.run/?git_repo=https://github.com/x8rr/cherri)
[![Deploy to Oracle Cloud](https://binbashbanana.github.io/deploy-buttons/buttons/remade/oraclecloud.svg)](https://cloud.oracle.com/resourcemanager/stacks/create?zipUrl=https://github.com/x8rr/cherri/archive/refs/heads/main.zip)
[![Deploy on Railway](https://binbashbanana.github.io/deploy-buttons/buttons/remade/railway.svg)](https://railway.app/new/template?template=https://github.com/x8rr/cherri)
[![Deploy to Vercel](https://binbashbanana.github.io/deploy-buttons/buttons/remade/vercel.svg)](https://vercel.com/new/clone?repository-url=https://github.com/x8rr/cherri)
[![Deploy to Netlify](https://binbashbanana.github.io/deploy-buttons/buttons/remade/netlify.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/x8rr/cherri)
[![Deploy to Koyeb](https://binbashbanana.github.io/deploy-buttons/buttons/remade/koyeb.svg)](https://app.koyeb.com/deploy?type=git&repository=github.com/x8rr/cherri&branch=Main&name=cherri)
[![Deploy to Render](https://binbashbanana.github.io/deploy-buttons/buttons/remade/render.svg)](https://render.com/deploy?repo=https://github.com/x8rr/cherri)
[![Deploy to Cyclic](https://binbashbanana.github.io/deploy-buttons/buttons/remade/cyclic.svg)](https://app.cyclic.sh/api/app/deploy/x8rr/cherri)

> [!IMPORTANT]
> For Cloudflare Pages, use [this repository.](https://github.com/x8rr/cherri-cloudflare)

### Method 2: Deploying Locally

Clone the repository:

```sh
git clone https://github.com/x8rr/cherri.git
```

Enter the directory:

```sh
cd cherri
```

Install dependencies and run the site with its same-origin Wisp endpoint:

```sh
npm install
npm start
```

The server listens on port 8000 by default. For production, forward HTTPS WebSocket upgrades for `/wisp/` to this Node server; static-only hosting can serve the UI but cannot run the Wisp relay.

### Method 3: Deploying to Firebase

Ensure you have a Firebase account and a project ready.

Install the Firebase CLI:

```sh
npm i -g firebase-tools
```

Initialize a hosting project:

```sh
firebase init hosting
```

Follow the CLI steps, then deploy.

---
credits to the original cherri by x8rr. The code is not mine for the original pls go to https://github.com/x8rr/cherri
this is a remixed version of cherri with out the games-added backend 
This repository was derived from [x8rr/cherri](https://github.com/x8rr/cherri). All original code was written by the project owner (x8rr). The following changes have been made to this fork:

* Change 1
* Change 2
* Change 3

---
 
