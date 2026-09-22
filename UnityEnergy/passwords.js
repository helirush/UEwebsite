// Unity Energy Customer Portal - Access Configuration
// =====================================================
// Passwordless portal access:
//   - Visitor completes profile (when required)
//   - Selects company or Guest
//   - Selects Access Unity Portal
// No portal passwords are required.

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
            allowAnyDomain: true
        },
        'investorcenter': {
            name: 'Investor Center (Private and Confidential)',
            path: './customer-portal/investor-center/index.html',
            allowAnyDomain: true
        }
    },

    accessPolicy: {
        // Domain-based auto-routing (domain -> customer key).
        domainCustomerOverrides: {
            "fosterfarms.com": "fosterfarms"
        }
    }
};

// Backward compatibility for existing pages/scripts
const portalConfig = window.portalConfig;
