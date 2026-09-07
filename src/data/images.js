export function pexels(id, width = 1600) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;
}

export const imagePool = {
  crowdFlags: pexels(5632702, 1920),
  streetCrowd: pexels(36665737, 1920),
  plazaGathering: pexels(33011255, 1920),
  conferenceHall: pexels(15448073, 1600),
  auditorium: pexels(11329863, 1600),
  presentation: pexels(9275222, 1600),
  seminarSpeaker: pexels(3321796, 1600),
  womenLaptop: pexels(3894376, 1200),
  studentsClass: pexels(10614242, 1200),
  youthStudy: pexels(34162715, 1200),
  riceField: pexels(14314165, 1200),
  ricePlanting: pexels(33597069, 1200),
  farmerRice: pexels(29005997, 1200),
};

export const portraits = {
  aminaBalogun: pexels(29852895, 600),
  emekaNwachukwu: pexels(32064778, 600),
  hauwaMustapha: pexels(34861133, 600),
  chidiOkafor: pexels(6077664, 600),
  fatimaYusuf: pexels(8872492, 600),
  ngoziEze: pexels(9304685, 600),
  suleimanGarba: pexels(1405963, 600),
  tokunboAdeyemi: pexels(35129367, 600),
  ibrahimSani: pexels(12311572, 600),
  blessingOkoro: pexels(33646670, 600),
  aliyuBello: pexels(7446948, 600),
  chiamakaNnaji: pexels(29852852, 600),
  tundeAlabi: pexels(8730848, 600),
  graceDanladi: pexels(5955102, 600),
  femiAdekunle: pexels(31880922, 600),
  zainabUmar: pexels(21316048, 600),
};