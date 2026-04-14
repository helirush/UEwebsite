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
//   2. Ensure password is set (default: "oHeaviside")
//   3. Push to GitHub

window.portalConfig = {
    
    // SET TO false BEFORE PUSHING TO GITHUB
    devMode: false,
    
    // Production password - all customers use this
    password: "oHeaviside",
    
    // Customer accounts - add new customers here
    customers: {
        // NOTE: keys should match the normalization rule in UnityEnergy/index.html
        // (lowercase + strip all non-alphanumeric characters).
        'unityenergy': {
            name: 'Unity Energy',
            path: '../Customers/FosterFarms/index.html'
        },
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
        }
    }
};

// Backward compatibility for existing pages/scripts
const portalConfig = window.portalConfig;
