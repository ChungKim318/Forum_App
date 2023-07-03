export const formatPhone = phone => {
  if (phone?.length === 9) {
    let phoneNew =
      phone?.slice(0, 3) + '' + phone?.slice(3, 7) + '' + phone?.slice(7);
    return phoneNew;
  } else {
    let phoneNew = phone?.replace(/\s+/g, '');
    return phoneNew;
  }
};
