# Autism & ADHD Assessments Farnham — SEO and launch checklist

**Status: review build, not yet published.** The Render preview and all 24 static HTML routes intentionally have `noindex,nofollow`; the live Wix website remains unchanged. SEO preparation is not the same as indexed, ranking, or generating qualified enquiries.

## In the review build now
- Individual page titles, descriptions, canonicals and Open Graph tags for 24 planned public routes.
- Static HTML entry points for 23 internal routes, with route-specific content and structured data before JavaScript runs; the homepage has static introductory content too. Regenerate from `index.html` and `app4.js` with `node scripts/generate-seo-pages.mjs`.
- `MedicalClinic`, `WebPage`, `WebSite`, breadcrumbs and assessment `Service` structured data, with a separate Speech Therapy Farnham provider identity.
- Correct Farnham clinic address: The Annexe, 3 Leigh Lane, Farnham, Surrey GU9 8HP.
- Local Surrey/North Hampshire context on the homepage, Adult and Child overview pages. These are areas served, **not additional clinics**.
- Updated XML sitemap, 24 canonical URLs, original approved logos and infinity favicon.
- Internal links to assessment and contact journeys, with direct clean paths on future non-Render hosts.

## Must be completed and signed off before switching the domain
1. Obtain Lisa's final clinical approval of all services, practitioner names/credentials, fees, wait times, FAQs, legal wording, autism/PDA/ADHD claims and the separate Speech Therapy service.
2. Confirm the enquiry forms, clinician booking flow, calendar, email destinations, privacy notices and consent processes. The Speech Therapy enquiry currently **prepares a local email draft; it does not send a web form**. Do not connect unapproved processors to patient data.
3. Validate all 24 pages on real desktop and mobile browsers. Confirm the original logos display at appropriate sizes, no cropped portraits, all CTAs work, all local images load, readable contrast and no mobile overflow.
4. Finalise the production host's URL handling: direct paths `/adult-autism-assessment`, etc., must serve a 200 response with the correct HTML and canonical. Confirm trailing-slash rules, no 404s or rewrite loops.
5. On the approved **live** deployment only, remove `noindex,nofollow` from `index.html` and regenerate all 23 static route pages; add the appropriate production robots.txt and `Sitemap: https://www.autismassessmentsfarnham.co.uk/sitemap.xml`. **Do not remove noindex on the review site.**
6. Map and implement permanent 301 redirects for replaced legacy pages, including `/services` → `/choose-your-assessment`, `/recommended-services` and `/copy-of-faq` → `/local-resources`. Keep genuinely retained URLs, such as `/faq`, working. Verify existing indexed URL inventory from Search Console before finalising redirects.
7. Verify the property in Google Search Console, submit the sitemap, inspect priority pages and monitor indexing, canonical choice, impressions and queries after launch. Update the clinic's Google Business Profile and consistent business details on trusted directories, using only the real Farnham clinic location.
8. Check Core Web Vitals, image formats, mobile layouts and accessibility; optimise page weight and image loading based on measured results rather than guesses.
9. Verify GA4, Google Ads and consent-aware conversion events for Adult Pre-Booking, Child Pre-Booking, consultations and eventual booked assessments. Do not transmit clinical form content to analytics.
10. Continue tracking real search performance for Farnham and nearby Surrey/Hampshire areas, improve content based on qualified enquiries and maintain approved clinician expertise/signposting. No ranking or enquiry volume can be guaranteed.

## Priority local queries to monitor (not promises of rankings)
- private autism assessment Farnham / Surrey
- adult autism assessment Farnham / Guildford
- child autism assessment Farnham / Surrey
- private ADHD assessment Farnham / Surrey
- combined autism and ADHD assessment Surrey
- autism assessment near Aldershot / Farnborough / Godalming
- Speech Therapy Farnham EHCP report / expert witness

**Do not publish the future ADHD medication service** until the clinic specifically approves its clinical, regulatory and operational details.
