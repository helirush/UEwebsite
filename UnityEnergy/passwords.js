// Unity Energy Customer Portal - Access Configuration
// =====================================================
// 
// DEVELOPMENT MODE (devMode = true):
//   - User only enters company name, no password required
//   - Use this while working locally on eWebmaster
//
// PRODUCTION MODE (devMode = false):
//   - User must enter both company name AND password
//   - Set this BEFORE uploading to GitHub
//
// To prepare for GitHub deployment:
//   1. Set devMode = false
//   2. Verify accessPolicy passwords are set as needed
//   3. Push to GitHub

window.portalConfig = {
    
    // SET TO false BEFORE PUSHING TO GITHUB
    devMode: false,
    
    // Legacy fallback password for older scripts/pages.
    // New portal logic should use accessPolicy below.
    password: "oHeaviside",
    accessPolicy: {
        // Founder / all-access domains only.
        allAccessPassword: "oHeaviside",
        // Default password for standard customer and guest access.
        defaultPassword: "Default",
        // Per-customer overrides.
        customerPasswordOverrides: {
            fosterfarms: "FosterFarms!"
        },
        // Domain-based auto-routing (domain -> customer key).
        domainCustomerOverrides: {
            "fosterfarms.com": "fosterfarms"
        }
    },
    
    // Customer accounts - add new customers here
    customers: {
        // NOTE: keys should match the normalization rule in UnityEnergy/index.html
        // (lowercase + strip all non-alphanumeric characters).
        'fosterfarms': {
            name: 'Foster Farms',
            path: '../Customers/FosterFarms/index.html'
        },

        // Norfolk Iron & Metal
        // Accept both "norfolkiron" and "Norfolk Iron & Metal" (=> norfolkironmetal)
        'norfolkiron': {
            name: 'Norfolk Iron & Metal',
            path: '../Customers/NorfolkIron/index.html'
        },
        'norfolkironmetal': {
            name: 'Norfolk Iron & Metal',
            path: '../Customers/NorfolkIron/index.html'
        },
        'armi': {
            name: 'ARMI',
            path: '../Customers/ARMI/index.html'
        },
        'arkansasmyriad': {
            name: 'ARMI',
            path: '../Customers/ARMI/index.html'
        },
        'avco': {
            name: 'AVCO Center',
            path: '../Customers/AVCO/index.html'
        },
        'avcocenter': {
            name: 'AVCO Center',
            path: '../Customers/AVCO/index.html'
        },
        'avcobuilding': {
            name: 'AVCO Center',
            path: '../Customers/AVCO/index.html'
        },
        'boa': {
            name: 'BOA Building',
            path: '../Customers/BOA_Building/index.html'
        },
        'boabuilding': {
            name: 'BOA Building',
            path: '../Customers/BOA_Building/index.html'
        },
        'bankofamerica': {
            name: 'BOA Building',
            path: '../Customers/BOA_Building/index.html'
        },
        'mobbuilding': {
            name: 'BOA Building',
            path: '../Customers/BOA_Building/index.html'
        },
        'tysonfoods': {
            name: 'Tyson Foods',
            path: '../Customers/TysonFoods/index.html'
        },
        'tyson': {
            name: 'Tyson Foods',
            path: '../Customers/TysonFoods/index.html'
        },
        'tysonfoodsinc': {
            name: 'Tyson Foods',
            path: '../Customers/TysonFoods/index.html'
        },
        'investor': {
            name: 'Investor Center',
            path: './customer-portal/investor-center/index.html',
            allowAnyDomain: true
        },
        'investorcenter': {
            name: 'Investor Center',
            path: './customer-portal/investor-center/index.html',
            allowAnyDomain: true
        }
    }
};

// Backward compatibility for existing pages/scripts
const portalConfig = window.portalConfig;
