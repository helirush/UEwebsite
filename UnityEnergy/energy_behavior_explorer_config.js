// Energy Behavior Access — Study Explorer card catalog (visitor lane)
// Public labels are anonymized. Internal paths are eWebmaster-relative from UnityEnergy/.
// permission: visitor_intro | visitor_portal | guided_only
window.energyBehaviorExplorerConfig = {
  version: '2026-11-03-direct-site-r1',
  // Open study → site hero directly (no interim intro pages).
  integrityLegend: [],
  columns: {
    untuned: {
      title: 'Untuned Energy Fields',
      cards: [
        {
          id: 'U1',
          industry: 'Food production',
          title: 'Multi-field 480 V industrial campus',
          status: 'Continuously monitored',
          integrity: 'Measured baseline behavior · modeled burden scenarios',
          permission: 'visitor_portal',
          // Direct to Foster Farms hero
          portalPath: '../Customers/FosterFarms/index.html',
          internalNote: 'Foster Farms — anonymized public label'
        },
        {
          id: 'U2',
          industry: 'Stainless fabrication',
          title: 'Single large 480 V process field',
          status: 'Historical snapshot',
          integrity: 'Measured industrial process load',
          permission: 'visitor_portal',
          portalPath: '../Customers/ARMI/index.html',
          internalNote: 'ARMI Fayetteville — anonymized'
        },
        {
          id: 'U3',
          industry: 'High-rise commercial',
          title: 'Multi-riser 480 V building',
          status: 'Historical case study',
          integrity: 'Commercial building electrical-field case study',
          permission: 'visitor_portal',
          portalPath: '../Customers/AVCO/index.html',
          internalNote: 'AVCO Center — anonymized'
        }
      ]
    },
    tuned: {
      title: 'Tuned Energy Fields',
      cards: [
        {
          id: 'T1',
          industry: 'Metals fabrication',
          title: 'Multi-field industrial plant',
          status: 'Measured + MPTS demo',
          integrity: 'Measured + MPTS demonstration framing',
          permission: 'visitor_portal',
          portalPath: '../Customers/NorfolkIron/index.html',
          internalNote: 'Norfolk Iron — anonymized'
        },
        {
          id: 'T2',
          industry: 'Commercial towers',
          title: 'Dual MSB commercial fields',
          status: 'Measured + MPTS packages',
          integrity: 'Sim/outcome packages on file — not automatic bill savings',
          permission: 'visitor_portal',
          portalPath: '../Customers/BOA_Building/index.html',
          internalNote: 'BOA / Spokane corridor — anonymized'
        },
        {
          id: 'T3',
          industry: 'Protein processing',
          title: 'Industrial plant energy field',
          status: 'Commissioning / MPTS-capable',
          integrity: 'Industrial commissioning context — guided claims only',
          permission: 'visitor_portal',
          portalPath: '../Customers/TysonFoods/index.html',
          internalNote: 'Tyson Scranton — anonymized'
        }
      ]
    }
  }
};
