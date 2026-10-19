# Unity Contact Us — CTA Typography Design Notes
Date: 2026-10-19  
Source: CLERK_COM_261019r0_Unity_Contact_CTA_Typography (Cove Faraday → Clerk)  
Surface: `eWebmaster/UnityEnergy/contact-us.html` only (not promoted)

## Decision lock
Preserve Contact Us composition, palette, and homepage identity. Refine left CTA cards + gold MEET WITH CLERK only.

## Type family
| Role | Family | Weight | Notes |
|------|--------|--------|-------|
| CTA titles (left cards) | Source Sans 3 | 600 Semibold | Uppercase; tracking ~0.045em (~0.4–0.7px) |
| CTA descriptions | Source Sans 3 | 400 Regular | ~13–14px desktop (`0.875rem` cap); line-height 1.4 |
| MEET WITH CLERK | Source Sans 3 | 600 Semibold | Uppercase; slightly larger than left titles |

Google Fonts load: `Source+Sans+3:wght@400;600`

## Color
| Role | Token | Rationale |
|------|-------|-----------|
| CTA titles | `rgba(28, 48, 38, 0.96)` | Deep charcoal-green (not pure black) |
| CTA descriptions | `rgba(58, 74, 64, 0.9)` | Muted charcoal-green, accessible on cream pills |
| MEET label | `rgba(42, 28, 8, 0.98)` | Existing warm dark on gold (unchanged hue seat) |

## Size / tracking / leading (desktop)
| Element | Size | Tracking | Line-height |
|---------|------|----------|-------------|
| `.ue-card-title` | `clamp(0.86rem, 1.05vw, 1.02rem)` | `0.045em` | `1.2` |
| `.ue-card-sub` | `clamp(0.78rem, 0.92vw, 0.875rem)` | `0.01em` | `1.4` |
| `.ue-meet-label` | `clamp(0.95rem, 1.18vw, 1.14rem)` | `0.05em` | `1.2` |

## Mobile adjustments (`max-width: 700px`)
- Titles: `0.8rem`, tracking `0.03em` (slightly tighter for narrow width)
- Descriptions: `0.72rem`, line-height `1.35`

## Copy retained
- EMAIL UNITY TEAM
- TELL US ABOUT YOUR FACILITY
- SUBSCRIBE TO MAXWELLIAN UPDATES
- MEET WITH CLERK

## Site-wide principle (recorded)
Elegant serif for major storytelling headlines; refined sans for navigation/actions; regular sans for explanatory text.

## Deviations
None material vs CLERK_COM r0. MEET WITH CLERK keeps warm brown text on gold for contrast on the gold fill (charcoal-green would fight the gold plate).

## Verification
Hard-refresh Contact Us; check desktop + mobile wrap/readability on all three left CTAs and Meet with Clerk.
