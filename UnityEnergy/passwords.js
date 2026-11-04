// Unity Energy Customer Portal - Access Configuration
// =====================================================
// Passwordless + domain-locked portal access:
//   - No portal passwords are required for Customer Access Portal
//   - Company email domain unlocks ONLY that company's portal
//   - unityenergy.com / accentzinc.com = all-access (any customer portal)
//   - Guest remains available for non-company walkthroughs to Unity Home
// Code-gated portals are SEPARATE from Customer Access:
//   - Investor / Partner are never listed in the customer dropdown
//   - Access is by private 6-digit access code only (no name lists)
//   - Each code opens only its assigned destination front page
//   - Multiple partner/investor codes are supported without exposing identities
// Domain enforcement lives in customer-portals.html (CUSTOMER_EMAIL_DOMAIN_ALLOWLIST).

window.portalConfig = {
    // Kept for older pages that still read this flag.
    // Customer Access Portal is passwordless regardless of this value.
    devMode: true,

    // Customer accounts - add new customers here
    // NOTE: Investor destinations do NOT belong here for the customer selector.
    customers: {
        // NOTE: keys should match the normalization rule in UnityEnergy/index.html
        // (lowercase + strip all non-alphanumeric characters).
        'fosterfarms': {
            name: 'Foster Farms (23 Energy Fields - Measured)',
            path: '../Customers/FosterFarms/index.html'
        },

        // Norfolk Iron & Metal
        // Accept both "norfolkiron" and "Norfolk Iron & Metal" (=> norfolkironmetal)
        'norfolkiron': {
            name: 'Norfolk Iron & Metal (5 EnergyFields - Measured+MPTS)',
            path: '../Customers/NorfolkIron/index.html'
        },
        'norfolkironmetal': {
            name: 'Norfolk Iron & Metal (5 EnergyFields - Measured+MPTS)',
            path: '../Customers/NorfolkIron/index.html'
        },
        'armi': {
            name: 'ARMI (500kVA : 1xH240)',
            path: '../Customers/ARMI/index.html'
        },
        'arkansasmyriad': {
            name: 'ARMI (500kVA : 1xH240)',
            path: '../Customers/ARMI/index.html'
        },
        'avco': {
            name: 'AVCO Center (2000kVA : 3xH240)',
            path: '../Customers/AVCO/index.html'
        },
        'avcocenter': {
            name: 'AVCO Center (2000kVA : 3xH240)',
            path: '../Customers/AVCO/index.html'
        },
        'avcobuilding': {
            name: 'AVCO Center (2000kVA : 3xH240)',
            path: '../Customers/AVCO/index.html'
        },
        'boa': {
            name: 'BOA Building (2 EnergyFields - Measured+MPTS)',
            path: '../Customers/BOA_Building/index.html'
        },
        'boabuilding': {
            name: 'BOA Building (2 EnergyFields - Measured+MPTS)',
            path: '../Customers/BOA_Building/index.html'
        },
        'bankofamerica': {
            name: 'BOA Building (2 EnergyFields - Measured+MPTS)',
            path: '../Customers/BOA_Building/index.html'
        },
        'mobbuilding': {
            name: 'BOA Building (2 EnergyFields - Measured+MPTS)',
            path: '../Customers/BOA_Building/index.html'
        },
        'tysonfoods': {
            name: 'Tyson Foods (2500kVA : 2xH240, 3xH490)',
            path: '../Customers/TysonFoods/index.html'
        },
        'tyson': {
            name: 'Tyson Foods (2500kVA : 2xH240, 3xH490)',
            path: '../Customers/TysonFoods/index.html'
        },
        'tysonfoodsinc': {
            name: 'Tyson Foods (2500kVA : 2xH240, 3xH490)',
            path: '../Customers/TysonFoods/index.html'
        }
    },

    // Investor Access Portal — private 6-digit codes only (never shown in a dropdown).
    // Add one entry per investor assignment. Codes are exact 6-digit matches.
    investorAccess: {
        codes: {
            // Default investor code.
            '121212': {
                name: 'Investor Portal',
                path: './customer-portal/investor-center/index.html',
                slug: 'investor-center'
            }
            // Additional investor venues (identity stays private — only the code is shared):
            // '343434': {
            //     name: 'Investor Portal',
            //     path: './customer-portal/investor-center/index.html',
            //     slug: 'investor-venue-b'
            // }
        }
    },

    // Partner Access Portal — private 6-digit codes only (never shown in a dropdown).
    // Multiple codes => multiple partner front pages without exposing partner names.
    partnerAccess: {
        codes: {
            // USSI partner venue — private 6-digit code (not listed in UI).
            '000000': {
                name: 'Partner Portal',
                path: './customer-portal/partner-center/ussi/index.html',
                slug: 'ussi-partnership'
            }
            // Add more 6-digit codes for additional partner venues:
            // '454545': {
            //     name: 'Partner Portal',
            //     path: './customer-portal/partner-center/venues/partner-b/index.html',
            //     slug: 'partner-venue-b'
            // }
        }
    },

    accessPolicy: {
        // Domain-based auto-routing (domain -> customer key).
        // Runtime also enforces CUSTOMER_EMAIL_DOMAIN_ALLOWLIST in customer-portals.html.
        allAccessEmailDomains: ['unityenergy.com', 'accentzinc.com'],
        domainCustomerOverrides: {
            "fosterfarms.com": "fosterfarms",
            "norfolkiron.com": "norfolkiron",
            "norfolkironmetal.com": "norfolkiron",
            "armi.com": "armi",
            "army.com": "armi",
            "arkansasmyriad.com": "armi",
            "avco.com": "avco",
            "avcocenter.com": "avco",
            "boa.com": "boa",
            "bankofamerica.com": "boa",
            "tyson.com": "tysonfoods",
            "tysonfoods.com": "tysonfoods"
        }
    }
};

// Backward compatibility for existing pages/scripts
const portalConfig = window.portalConfig;
