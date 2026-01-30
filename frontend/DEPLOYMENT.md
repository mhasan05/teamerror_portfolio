Frontend deployment notes

This file explains how to build the frontend for production and configure the API endpoint.

1) Build-time environment

Vite injects env vars that begin with VITE_. Use `VITE_API_URL` to tell the built app where the API is.

Example (build locally before uploading):

```bash
cd frontend
# set the API base URL for production
export VITE_API_URL="https://api.teamerror.net/api"
npm install
npm run build
# Serve the dist/ content with your static server or upload to VPS
npx serve -s dist
```

2) .env.production example (create `frontend/.env.production` or set env when building)

```
VITE_API_URL="https://api.teamerror.net/api"
```

3) Runtime configuration (optional)

If you want to change the API URL without rebuilding the static bundle, consider one of these approaches:
- Use nginx to proxy `/api/` to the backend so the app can use a relative URL like `/api`.
- Serve a small `config.json` from the same origin and fetch it at app startup. This requires a small change in the app to fetch that config before rendering.

4) Common checks
- Make sure the backend is accessible from the server and that CORS permits `https://teamerror.net` (see backend/DEPLOYMENT.md).
- Ensure HTTPS is enabled for both `teamerror.net` and `api.teamerror.net`.

5) Quick local test

```bash
# simulate production build using local API
export VITE_API_URL="http://localhost:8000/api"
npm run build
npx serve -s dist
# Open http://localhost:5000 and inspect network requests for /api/services/
```
