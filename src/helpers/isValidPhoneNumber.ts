const validPhoneNumberRegex = /\d{3}[-]\d{3}[-]\d{2}[-]\d{2}/g; // xxx-xxx-xx-xx

const isValidPhoneNumber = (phone: string) => {
  return phone.match(validPhoneNumberRegex);
};

export default isValidPhoneNumber;
