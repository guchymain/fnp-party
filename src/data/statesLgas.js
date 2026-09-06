// Representative subset of Nigeria's 36 states + FCT for the Ward/LGA Finder demo.
// Production deployment must replace this with INEC's full dataset of 36 states,
// 774 LGAs, and ~8,800 registration area wards.
export const statesLgas = [
  {
    state: "Lagos",
    zone: "South West",
    lgas: [
      { name: "Ikeja", wards: ["Ward A", "Ward B", "Ward C"] },
      { name: "Eti-Osa", wards: ["Ward 1", "Ward 2", "Ward 3"] },
      { name: "Lagos Island", wards: ["Ward A", "Ward B", "Ward C"] },
      { name: "Alimosho", wards: ["Ward 1", "Ward 2", "Ward 3"] },
    ],
  },
  {
    state: "Kano",
    zone: "North West",
    lgas: [
      { name: "Kano Municipal", wards: ["Ward 1", "Ward 2", "Ward 3"] },
      { name: "Nassarawa", wards: ["Ward 1", "Ward 2"] },
      { name: "Fagge", wards: ["Ward 1", "Ward 2", "Ward 3"] },
    ],
  },
  {
    state: "Rivers",
    zone: "South South",
    lgas: [
      { name: "Port Harcourt", wards: ["Ward 1", "Ward 2", "Ward 3"] },
      { name: "Obio-Akpor", wards: ["Ward 1", "Ward 2"] },
    ],
  },
  {
    state: "Kaduna",
    zone: "North West",
    lgas: [
      { name: "Kaduna North", wards: ["Ward 1", "Ward 2"] },
      { name: "Kaduna South", wards: ["Ward 1", "Ward 2"] },
      { name: "Zaria", wards: ["Ward 1", "Ward 2", "Ward 3"] },
    ],
  },
  {
    state: "Oyo",
    zone: "South West",
    lgas: [
      { name: "Ibadan North", wards: ["Ward 1", "Ward 2", "Ward 3"] },
      { name: "Ibadan South-West", wards: ["Ward 1", "Ward 2"] },
    ],
  },
  {
    state: "Enugu",
    zone: "South East",
    lgas: [
      { name: "Enugu East", wards: ["Ward 1", "Ward 2"] },
      { name: "Enugu North", wards: ["Ward 1", "Ward 2"] },
    ],
  },
  {
    state: "FCT",
    zone: "North Central",
    lgas: [
      { name: "Abuja Municipal", wards: ["Garki", "Wuse", "Asokoro"] },
      { name: "Gwagwalada", wards: ["Ward 1", "Ward 2"] },
    ],
  },
  {
    state: "Borno",
    zone: "North East",
    lgas: [
      { name: "Maiduguri", wards: ["Ward 1", "Ward 2", "Ward 3"] },
      { name: "Jere", wards: ["Ward 1", "Ward 2"] },
    ],
  },
  {
    state: "Anambra",
    zone: "South East",
    lgas: [
      { name: "Awka South", wards: ["Ward 1", "Ward 2"] },
      { name: "Onitsha North", wards: ["Ward 1", "Ward 2"] },
    ],
  },
  {
    state: "Kebbi",
    zone: "North West",
    lgas: [
      { name: "Birnin Kebbi", wards: ["Ward 1", "Ward 2"] },
      { name: "Argungu", wards: ["Ward 1", "Ward 2"] },
    ],
  },
];

export const geopoliticalZones = [
  "North Central",
  "North East",
  "North West",
  "South East",
  "South South",
  "South West",
];
