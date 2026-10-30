# Hikari Studios

Responsive static business site, hosted on GitHub Pages with live Wix Forms and Bookings.

## Run locally

`python -m http.server 8080`

Open http://localhost:8080. No build is needed. The `js/wix` modules are the shipped Wix Headless REST data layer; `business.js` provides the interface.

## Owner setup

- Wix site: dbe50794-0c37-45e1-8838-84849151ab69
- Enquiry form: f5772b2b-1487-45b5-893b-a1035fb395b4
- Public OAuth client: cd19f73e-4544-4a1b-be0a-bcb185d8a81b (not a secret)
- Allowed checkout return domain: yoichi2377.github.io
- Consultations are draft 30-minute services, quote-based, with manual approval. Review service descriptions, business timezone, location and staff working hours before taking bookings.
- Payment checkout is supported by the Wix booking data layer when services are configured with online pricing. Online payment collection is not activated: set prices, connect a payment provider and use a suitable Wix paid plan first.
- Configure enquiry notifications in Wix Forms if email delivery to hikaristudios07@gmail.com is desired; submissions are stored in Wix.

Pages publishes from `main` at the repository root. Never commit API keys or owner credentials. The frontend uses anonymous visitor tokens only.
