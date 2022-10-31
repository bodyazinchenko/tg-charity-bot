const validPhoneNumberRegex = /0\d{2}[-]\d{3}[-]\d{2}[-]\d{2}/g;

const isValidPhoneNumber = (phone: string) => {
  return phone.match(validPhoneNumberRegex);
};

export default isValidPhoneNumber;
