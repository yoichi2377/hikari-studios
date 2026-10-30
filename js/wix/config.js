// Written by install/deploy.mjs --stack static from .env.local's WIX_CLIENT_ID (what `wix env pull`
// writes; on a migration preview the site being migrated), else wix.config.json, or --client-id.
// The public OAuth client id — not a secret: it only mints anonymous visitor tokens.
export const WIX_CLIENT_ID = "cd19f73e-4544-4a1b-be0a-bcb185d8a81b";
