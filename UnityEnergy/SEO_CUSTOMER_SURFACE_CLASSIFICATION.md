# Unity customer surface classification (foundation)

**Policy lock (Cove/Mike Phase Two):** customer-specific reports/portals/deep trees stay OUT of public search by default.

| Customer folder | HTML files (approx) | Class | Control this phase |
|---|---:|---|---|
| ARMI | 65 | PRIVATE_DEFAULT_NO_PUBLIC_INDEX | Disallow via robots; not in sitemap; no auth change this phase |
| AVCO | 5 | PRIVATE_DEFAULT_NO_PUBLIC_INDEX | Disallow via robots; not in sitemap; no auth change this phase |
| BOA_Building | 25 | PRIVATE_DEFAULT_NO_PUBLIC_INDEX | Disallow via robots; not in sitemap; no auth change this phase |
| BankofAmerica | 24 | PRIVATE_DEFAULT_NO_PUBLIC_INDEX | Disallow via robots; not in sitemap; no auth change this phase |
| FosterFarms | 1195 | PRIVATE_DEFAULT_NO_PUBLIC_INDEX | Disallow via robots; not in sitemap; no auth change this phase |
| NorfolkIron | 4 | PRIVATE_DEFAULT_NO_PUBLIC_INDEX | Disallow via robots; not in sitemap; no auth change this phase |
| TysonFoods | 295 | PRIVATE_DEFAULT_NO_PUBLIC_INDEX | Disallow via robots; not in sitemap; no auth change this phase |

Notes:
- `robots.txt` Disallow is crawl guidance, not privacy enforcement.
- No sitemap inclusion.
- No blanket authentication redesign in this phase.
- Future: password gates + noindex on any truly public residual URLs after inventory review.
