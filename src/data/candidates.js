import { portraits } from "./images.js";

export const candidates = [
  {
    id: "cand-01",
    name: "Ibrahim K. Sani",
    office: "Governorship",
    state: "Kaduna",
    photoInitials: "IS",
    photo: portraits.ibrahimSani,
    bio: "Former state commissioner for works; running on an infrastructure and security platform aligned with the party manifesto.",
    verified: true,
  },
  {
    id: "cand-02",
    name: "Blessing N. Okoro",
    office: "Senate",
    state: "Rivers",
    photoInitials: "BO",
    photo: portraits.blessingOkoro,
    bio: "Public health specialist campaigning for primary healthcare investment in every ward.",
    verified: true,
  },
  {
    id: "cand-03",
    name: "Aliyu M. Bello",
    office: "House of Representatives",
    state: "Kano",
    photoInitials: "AB",
    photo: portraits.aliyuBello,
    bio: "Small-business advocate focused on ending multiple taxation for micro and small enterprises.",
    verified: true,
  },
  {
    id: "cand-04",
    name: "Chiamaka R. Nnaji",
    office: "State House of Assembly",
    state: "Anambra",
    photoInitials: "CN",
    photo: portraits.chiamakaNnaji,
    bio: "Education reform campaigner and former school proprietor.",
    verified: true,
  },
  {
    id: "cand-05",
    name: "Tunde F. Alabi",
    office: "Senate",
    state: "Oyo",
    photoInitials: "TA",
    photo: portraits.tundeAlabi,
    bio: "Agribusiness entrepreneur running on rural infrastructure and farmer-registry transparency.",
    verified: true,
  },
];

export const electedOfficials = [
  {
    id: "eo-01",
    name: "Grace U. Danladi",
    office: "Senator",
    state: "Plateau",
    photoInitials: "GD",
    photo: portraits.graceDanladi,
    since: "2023",
  },
  {
    id: "eo-02",
    name: "Femi O. Adekunle",
    office: "House of Representatives",
    state: "Ogun",
    photoInitials: "FA",
    photo: portraits.femiAdekunle,
    since: "2023",
  },
  {
    id: "eo-03",
    name: "Zainab A. Umar",
    office: "State House of Assembly",
    state: "Kebbi",
    photoInitials: "ZU",
    photo: portraits.zainabUmar,
    since: "2023",
  },
];

export const offices = [
  "Governorship",
  "Senate",
  "House of Representatives",
  "State House of Assembly",
];
