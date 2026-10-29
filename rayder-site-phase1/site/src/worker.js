// RAYDER — Worker entry point.
// Phase 1: serve the static public site. API routes arrive in Phase 2
// (accounts/login) and Phase 3 (PayPal subscriptions + webhooks, sandbox first).
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname.startsWith("/api/")) {
      return Response.json(
        { error: "not_implemented", detail: "API arrives in Phase 2/3." },
        { status: 501 }
      );
    }

    // Everything else is a static page/asset from ./public.
    return env.ASSETS.fetch(request);
  },
};
