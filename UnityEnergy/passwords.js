// Unity Energy Customer Portal - Access Configuration
// =====================================================
// Passwordless + domain-locked portal access:
//   - No portal passwords are required
//   - Company email domain unlocks ONLY that company's portal
//   - unityenergy.com / accentzinc.com = all-access (any customer portal)
//   - Guest remains available for non-company walkthroughs to Unity Home
// Domain enforcement lives in customer-portals.html (CUSTOMER_EMAIL_DOMAIN_ALLOWLIST).

window.portalConfig = {
    // Kept for older pages that still read this flag.
    // Customer Access Portal is passwordless regardless of this value.
    devMode: true,

    // Customer accounts - add new customers here
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
        },
        'investor': {
            name: 'Investor Center (Private and Confidential)',
            path: './customer-portal/investor-center/index.html',
            // Founder/all-access emails only (unityenergy.com / accentzinc.com).
            allowAnyDomain: true,
            founderOnly: true
        },
        'investorcenter': {
            name: 'Investor Center (Private and Confidential)',
            path: './customer-portal/investor-center/index.html',
            allowAnyDomain: true,
            founderOnly: true
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
